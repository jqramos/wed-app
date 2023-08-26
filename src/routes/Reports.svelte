<div class="flex flex-col mt-20 ">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-left text-base font-light">
                    <thead
                            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                        <th scope="col" class="px-6 py-4 ">Guest Name</th>
                        <th scope="col" class="px-6 py-4">Role</th>
                        <th scope="col" class="px-6 py-4">Added Guest</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white">
                    {#await records}
                        loading...
                    {:then records}
                        {#each records.items as item}
                            <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 p-5">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{item.guest_name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.role}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.added_guest ? countAddedGuests(item.added_guest) : '-'}</td>
                            </tr>
                        {/each}
                    {:catch error}
                        <p>{error.message}</p>
                    {/await}
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 p-5">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">TOTAL COUNT: {totalCount}</td>
                        <td className="whitespace-nowrap px-6 py-4">ANSWERED YES:
                            {totalYesResponses}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4"> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<script lang="ts">
    import PocketBase from 'pocketbase'
    $: totalCount = 0;
    $: totalYesResponses = 0;

    const pb = new PocketBase('/');
    $: records = getAllAttendees();
    async function getAllAttendees() {
        const response =  await pb.collection('guests').getList(1, 200, {
            sort: '+guest_name',
            filter: `response != "No"`
        }).then((response) => {
            countAnsweredYes(response.items);
            response.items = addGuest(response.items);
            return response;
        });
        totalCount += response.totalItems;
        return response;
    }

    function countAddedGuests(addedGuests) {
        return addedGuests.length;
    }


    async function countAnsweredYes(items) {
        items.filter((item) => {
            if (item.response === 'Yes') {
                totalYesResponses ++;
            }
        });
    }

    function addGuest(items) {

        items.forEach((guest) => {
            if (guest.added_guest && guest.added_guest.length > 0) {
                guest.added_guest.forEach((addedGuest) => {
                    items.push({
                        guest_name: addedGuest,
                        role: 'Added Guest',
                        added_guest: null
                    });
                    totalCount ++;
                });
            }
        });
        return items.sort((a, b) => {
            return a.guest_name.localeCompare(b.guest_name);
        })
    }

</script>