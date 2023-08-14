
<div transition:scale ={{ delay: 250, duration: 700, easing: cubicInOut, opacity:50}} >
    <div class="p-10 flex flex-col justify-center items-center  text-center">        
        <p>
            <span class="text-6xl pb-3  font-extrabold">
                November 24, 2023
            </span>
            <br>
            <span class="text-4xl mt-2">
                Friday
            </span>
            <br>
            <span class="text-4xl cursive mt-2">
                Alta Veranda de Tibig, Silang, Cavite
            </span>
            <br>
                
            <br>
            <span class="text-xl">
                <!-- {computeWeddingDate()} -->
            </span>
        </p>

        <div>
            <!-- ceremony schedule -->
            <div class="mt-10">
                <h1 class="text-4xl cursive font-extrabold">Ceremony</h1>
                <!-- at daisy garden style it cool -->
                <p class="text-xl">
                    Daisy Garden
                </p>
                <p class="text-xl">
                    4:00 PM - 5:00 PM
                </p>
            </div>
            <!-- reception schedule -->
            <div class="mt-10">
                <h1 class="text-4xl cursive font-extrabold">Reception</h1>
                <p class="text-xl">
                    Plaza Guevarra
                </p>
                <p class="text-xl">
                    5:00 PM - 10:00 PM
                </p>
            </div>  

        </div>
    </div>
</div>

<script lang="ts">
    import { scale } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    const weddingDate = new Date('November 24, 2023 00:00:00 GMT+08:00');

        // compute duration before nov 24 2023 gm+8
    function computeWeddingDate() {
        const currentDate = new Date();
        const diff = weddingDate.getTime() - currentDate.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));
        const seconds = Math.floor(diff / (1000));
        //format like this 15 DAYS 13 HRS 24 MINS AGO assess if ago or to go
        const go = diff > 0 ? 'TO GO' : 'AGO';
        return `${Math.abs(days)} DAYS ${Math.abs(hours % 24)} HRS ${Math.abs(minutes % 60)} MINS ${go}`;
    }
</script>