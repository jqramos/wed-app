<script lang="ts">
    import Logo from "../atoms/Logo.svelte";
    import { openModal, closeModal } from 'svelte-modals'
    import Drawer from '../atoms/Drawer.svelte';

  function handleClick() {
    openModal(Drawer);
  }

  </script>


<header class="js-header opacity-0 fixed w-full z-navigation py-s5 before:absolute before:inset-0 before:h-full before:w-full before:bg-gradient5 transition-opacity duration-500 delay-75">
    <div class="wrapper">
        <div class="relative col-span-2">
            <Logo className="max-w-[70px] h-auto" />
        </div>
        <button on:click={handleClick} class="js-hamburger group relative col-start-4 md:col-start-6 lg:col-start-12 flex flex-col items-end justify-center gap-s1">
            <span class="block w-[34px] h-[4px] bg-white rounded-sm"></span>
            <span class="block w-[34px] h-[4px] bg-white rounded-sm transition-transform duration-300 translate-x-[-8px] group-hover:translate-x-0"></span>
            <span class="block w-[34px] h-[4px] bg-white rounded-sm"></span>
        </button>
    </div>
</header>
