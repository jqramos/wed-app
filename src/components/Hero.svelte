<script>
    import Logo from '../atoms/Logo.svelte';
</script>


<section class="panel js-panel relative h-screen text-white overflow-hidden before:absolute before:h-full before:w-full before:bg-gradient1 before:inset-0">
    <div class="h-full w-full">
        <img class="h-full w-full object-cover" src="/static/images/image-5.webp" alt="">
    </div>
    <div class="absolute inset-0">
        <div class="wrapper h-full">
            <div class="col-span-full flex justify-center items-center flex-col">
                <Logo />
                <h1 class="font-serif text-h3 lg:text-h1 uppercase text-center mb-s2">Jayvee <span class="block lg:inline">&</span> Victoria</h1>
                <h3 class="font-serif text-p1 lg:text-h4 uppercase text-center">The Wedding</h3>
            </div>
        </div>
    </div>
</section>
