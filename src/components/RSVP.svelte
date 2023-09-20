<section class="panel js-panel swiper relative overflow-hidden h-screen text-neutral-300 bg-grey-600">
    <picture class="hidden lg:block h-screen w-full">
        <!-- <source srcset="/static/images/carousel-1.webp" type="image/webp"> -->
        <source srcset="/static/images/image04.jpg" type="image/jpeg">
        <img class="h-screen w-full object-cover object-right max-w-[50%] ml-auto" src="/static/images/image04.jpg" alt="">
    </picture>
    <div class="absolute lg:top-0 lg:left-0 z-ground w-full h-screen rsvp-block">
        <div class="wrapper h-full">
            <div class="col-start-1 col-span-5 flex flex-col item-center justify-center">
                <h2 class="mb-s4 lg:mb-s max-w-[337px]">
                    <span class="font-serif text-h3 lg:text-h2 uppercase">Respond,</span> 
                    <span class="block font-sans text-p2 lg:text-h3 text-right text-secondary-400 font-light italic -translate-y-[20px] lg:-translate-y-[30px]">if you please</span>
                </h2>


                {#if !isSubmitted && !isGoing}
                <p class="text-base">
                    If you're responding for you and a guest (or your family), you'll be able to RSVP for your
                    entire group.
                </p>
                <div class="relative text-primary-600 mt-s4">
                        {#if !(guestPlusOne > 0 && isGoing)}
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
                                    class="w-full rsvp-input"
                                    id="rsvp-input"
                            ></Svelecte>
                        {/if}

                        {#if selectedGuest && !isGoing}
                            <div class="w-full mt-s2" transition:fade={{ delay: 250, duration: 250, easing: quintOut}}>
                                <p class="text-p1">Are you going to attend the wedding?</p>
                                <div class="mt-2 flex flex-col">

                                    <button on:click={() => sendYes()} class=" my-s1 bg-secondary-600 text-white font-bold py-s1">
                                        Surely!
                                    </button>
                                    <button on:click={() => sendNo()} class="my-s1 bg-neutral-800 text-white font-bold py-s1">
                                        I can't make it
                                    </button>
                                </div>
                            </div>
                        {/if}
                </div>
                {/if}

                {#if !isSubmitted && isGoing}
                    {#if guestPlusOne > 0}
                        <p class="text-base">
                            You are eligible for({guestPlusOne}) additional guest. Kindly add the name of your companion/s
                        </p>
                    {/if}
                <div className="relative text-primary-600 mt-s4">
                    {#if guestPlusOne > 0 && isGoing}
                        <div class="w-full mt-s2" transition:fade={{ delay: 250, duration: 250, easing: quintOut}}>
                            <p class="text-base text-primary-600">Note: leave the fields blank if your companions can't make it</p>
                            <p class="mt-2 text-base text-white">Type the guest/s name here</p>
                            <div class="flex flex-col">
                                {#each Array(guestPlusOne) as _, i}
                                    <div class="flex flex-col">
                                        <input type="text" id="grid-guests-name-{i}" class=" px-5 my-s1 bg-neutral-800 font-bold py-s1 guest-field text-lg" placeholder="Guest {i+1} Full Name">
                                    </div>
                                {/each}
                                <button on:click={() => submit()} class="my-s1 bg-secondary-600 text-white font-bold py-s1">
                                    Proceed
                                </button>
                            </div>
                        </div>
                    {/if}

                </div>
                {/if}

                {#if isSubmitted}
                <div class="relative text-primary-600 mt-s4">
                    <div  transition:fade={{ delay: 250, duration: 250, easing: quintOut}}>
                        <p class="text-secondary-400 font-light mb-10 text-3xl">Thank you for confirming your attendance!</p>
                        {#if isGoing}
                                <span class="text-p1 text-neutral-300">
                                    We are thrilled that you'll be joining us for our wedding day. Your presence will
                                    make the occasion even more special. We're looking forward to
                                    celebrating with you. See you there!
                                </span>
                        {:else}
                            <span class="text-p1 text-neutral-300">While we'll miss having you there, we completely
                                understand and appreciate your response. If circumstances
                                change, please don't hesitate to reach out. We hope to catch
                                up with you soon under different circumstances.
                            </span>
                        {/if}
                    </div>
                </div>
            {/if}
            </div>
        </div>
    </div>
</section>


<script lang="ts">
    import {  fade  } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import PocketBase from 'pocketbase'
    const pb = new PocketBase('/');
    import Svelecte from 'svelecte';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    let guests = [];
    let guestPlusOne;
    let selectedGuest = "";
    let isGoing = false;
    let isSubmitted = false


    $: guestPlusOne;


    onMount(async () => {
        document.getElementsByClassName('svelecte')[0].addEventListener('click', onInputClick);
        guestPlusOne =0;
    });

    function onInputClick() {
        gsap.to('.rsvp-input', {
            y: -20,
            duration: 0.5,
            ease: 'power4.out'
        });
    }


    let resetOnBlur = true;
    let fetchResetOnBlur = true;

    //call api once on load
    async function searchRecords(search) {
        // list and filter "example" collection records
      const records = await pb.collection('guests').getList(1, 10, {
        sort: '-guest_name',
        filter: `isFamily = false && guest_name~"${search}" && (response != "No" && response != "Yes")`
      });
      return records.items;
    }

    function eligiblePlusOne(e) {
      selectedGuest = e.detail;
      //if null set isGoing to false
      if (selectedGuest == null) {
        isGoing = false;
          guestPlusOne = 0;
        return;
      }
      guestPlusOne = selectedGuest?.guest_no ? selectedGuest?.guest_no : 0;
    }


    async function submit() {
      let guestNames = [];
      for (let i = 0; i < guestPlusOne; i++) {
        const name = document.getElementById(`grid-guests-name-${i}`).value;
        guestNames.push(name);
      }

      //create object to be sent to api
      const data = {
        guest_name: selectedGuest?.guest_name,
        added_guest: JSON.stringify(guestNames),
        response: "Yes"
      }

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

    function sendYes() {
        isGoing = true;
        if (guestPlusOne > 0) {
            return;
        } else {
            submit();
        }
    }


</script>

<style>

    @media (max-width: 1024px) {
        .rsvp-block {
            background-image: url('../../public/static/images/image04.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        /*    opacity down*/
            opacity: 0.8;
        }

    }
</style>