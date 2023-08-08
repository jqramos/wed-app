
<div class="p-10 flex flex-col justify-center items-center  text-center">    
    <!-- create layout for wedding faqs numbered list-->

    <h1 class="text-4xl cursive font-extrabold">RSVP</h1>

    <!-- create forms for attendess -->
    <div>
        <form class="w-full max-w-lg mt-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Guest Name
                </label>
                <div class="relative">
                  <select bind:value={selectedGuest} on:change={eligiblePlusOne} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-guest-name">
                    {#await guests}
                      <option>.. Loading guests</option>
                      {:then guests}
                      <option>Select your name</option>
                      {#each guests as guest}
                          <option value={guest}>{guest?.guest_name}</option>
                      {/each}
                    {/await}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              
              {#if guestPlusOne > 0}
              <div class="w-full  px-3 mb-6 md:mb-0 mt-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Guest No
                </label>
                <div class="relative">
                  <select bind:value={selectedGuestNo} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-guest-no">
                    <option value="0">0</option>
                    <!-- create option based on value of number guestPlusOne -->
                    {#each Array(guestPlusOne) as _, i}
                        <option value={i+1}>{i+1}</option>
                    {/each}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              
              {/if}
              
              {#if selectedGuestNo > 0}
              {#each Array(selectedGuestNo) as _, i}

              <div class="w-full md:w-ull px-3 mt-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Guest No {i+1} Name
                </label>
                <input class="appearance-none block w-full 
                bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                focus:outline-none focus:bg-white focus:border-gray-500" id="grid-guests-name-{i}" type="text" placeholder="">
              </div>
              {/each}

              {/if}
            </div>
            
          </form>
            
          <button on:click={submit} class="bg-secondary text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
    </div>
</div>

<script lang="ts">
  import PocketBase from 'pocketbase'
  import { onMount } from 'svelte';
  const pb = new PocketBase('/');
  let guests = records();
  let guestPlusOne;
  let selectedGuest = "";
  let selectedGuestNo = 0;

  //make guestPlusOne reactive
  $: guestPlusOne;

  
  //call api once on load
  async function records() {
      // list and filter "example" collection records
    const records = await pb.collection('guests').getFullList({
      sort: '-guest_name',
    });
    return  records;
  }

  function eligiblePlusOne() {    
    guestPlusOne = selectedGuest?.guest_no ? selectedGuest?.guest_no : 0;
  }


  async function submit() {
    let guestNames = [];
    //iterate to selectedGuestNo
    for (let i = 0; i < selectedGuestNo; i++) {
      //get guest name
      const name = document.getElementById(`grid-guests-name-${i}`).value;
      guestNames.push(name);
    }

    //create object to be sent to api
    const data = {
      guest_name: selectedGuest?.guest_name,
      addded_guest: JSON.stringify(guestNames)
    }

    //call api
    const record = await pb.collection('guests').update(selectedGuest?.id, data);
    return record;
  }


</script>