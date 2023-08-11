
<div class="p-10 flex flex-col justify-center items-center  text-center" >    
    <!-- create layout for wedding faqs numbered list-->

    <h1 class="text-5xl font-extrabold">RSVP</h1>

    <!-- create forms for attendess -->
    <div>
      {#if !isSubmitted}
        <form class="w-full max-w-lg mt-10" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-state">
                  Guest Name
                </label>
                <div class="relative search-container">
                  <Svelecte
                    {resetOnBlur}
                    {fetchResetOnBlur}
                    bind:value={guests}
                    valueAsObject
                    on:change={(e) => {
                      eligiblePlusOne(e);
                    }}
                    minQuery={3}
                    placeholder="Search for your name"
                    fetch={async (search) => {
                      const records = await searchRecords(search);
                      return records;
                    }}
                    labelField="guest_name"
                  ></Svelecte>

                </div>
              </div>

              <!-- show message asking if going or not -->
              {#if selectedGuest && !isGoing}
                  <div class="w-full text-center mt-5" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
                    <p class="text-2xl">Are you going to attend the wedding?</p>
                    <div class="mt-2">
                      <!-- buttons to anser -->
                      <button on:click={() => isGoing = true} class="bg-secondary text-white font-bold py-2 px-4 rounded">
                        Yes
                      </button>
                      <button on:click={() => sendNo()} class="bg-secondary text-white font-bold py-2 px-4 rounded">
                        No
                      </button>
                    </div>
                  </div>
                {/if}
              
              {#if guestPlusOne > 0 && isGoing}
              <div class="w-full  px-3 mb-6 md:mb-0 mt-3" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
                <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-state">
                  Number of additional guest (only declared guest will have food)
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

              <div class="w-full md:w-ull px-3 mt-3" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
                <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-last-name">
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
            
          {#if selectedGuest && isGoing}
          <button on:click={submit} class="bg-secondary text-white font-bold py-2 px-4 rounded" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
            Submit
          </button>
          {/if}
        {/if}

        {#if isSubmitted}
          <div class="text-2xl" transition:fade={{ delay: 250, duration: 500, easing: quintOut}}>
            <p>Thank you for your response!</p>
            {#if isGoing}
              <p>We will see you at the wedding!</p>
            {:else}
              <p>We are sorry you can't make it.</p>
            {/if}
          </div>
        {/if}

    </div>
</div>

<script lang="ts">
  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import PocketBase from 'pocketbase'
  const pb = new PocketBase('/');
  import Svelecte from 'svelecte';
  let guests = [];
  let guestPlusOne;
  let selectedGuest = "";
  let selectedGuestNo = 0;
  let isGoing = false;
  let isSubmitted = false;

  //make guestPlusOne reactive
  $: guestPlusOne;


  let resetOnBlur = true;
  let fetchResetOnBlur = true;
  
  //call api once on load
  async function searchRecords(search) {
      // list and filter "example" collection records
    const records = await pb.collection('guests').getList(1, 10, {
      sort: '-guest_name',
      filter: `isFamily = false && guest_name~"${search}" && response != "No"`
    });
    return records.items;
  }

  function eligiblePlusOne(e) {   
    selectedGuest = e.detail;
    //if null set isGoing to false
    if (selectedGuest == null) {
      isGoing = false;
      selectedGuestNo = 0;
      return;
    }
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
      addded_guest: JSON.stringify(guestNames),
      response: "Yes"
    }

    //call api
    const record = sendData(data);
    return record;
  }


  async function sendData(data) {
    isSubmitted = true;
    return await pb.collection('guests').update(selectedGuest?.id, data);
  }

  async function sendNo() {
    isGoing = false;
    const data = {
      guest_name: selectedGuest?.guest_name,
      response: "No"
    }

    //call api
    const record = sendData(data);
    return record;
  }
  


</script>