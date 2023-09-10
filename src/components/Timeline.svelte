<script lang="ts">
    import Icon from "../atoms/Icon.svelte";

    let icon1 = 'icon-time';
    let icon2 = 'icon-ceremony';
    let icon3 = 'icon-drinks';
    let icon4 = 'icon-speech';
    let icon5 = 'icon-foods';
    let icon6 = 'icon-music';
    let icon7 = 'icon-sendoff';
</script>


<section class="panel js-panel py-s7 lg:py-s10 h-screen w-full overflow-hidden bg-center relative text-neutral-300 bg-[url('/static/images/image05.jpeg')] bg-cover before:absolute before:inset-0 before:h-full before:w-full before:bg-gradient6 before:z-ground">
        <div class="relative wrapper h-full z-above-ground">
            <div class="col-span-full">
                <h2 class="mb-s4 lg:mb-s4 mt-s5 text-center max-w-[360px] mx-auto">
                    <span class="font-serif text-h3 lg:text-h2 uppercase">Wedding</span> 
                    <span class="relative block font-sans text-p2 lg:text-h3 text-right text-secondary-400 font-light italic -top-[15px]">timeline</span>
                </h2>
                <div class="timeline overflow-x-scroll lg:overflow-hidden touch-auto relative before:rounded before:min-w-[980px] before:absolute before:top-[50%] before:left-0 before:h-[2px] before:w-full before:bg-white">
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:-bottom-[2px] before:left-[50%] before:h-[20px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon1} iconCaption="church call time" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:top-[2px] before:left-[50%] before:h-[20px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon2} iconCaption="wedding ceremony" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:-bottom-[2px] before:left-[50%] before:h-[20px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon3} iconCaption="wedding reception" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:top-[2px] before:left-[50%] before:h-[20px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon4} iconCaption="speeches" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:-bottom-[2px] before:left-[50%] before:h-[30px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon5} iconCaption="dinner time" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:top-[2px] before:left-[50%] before:h-[20px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon6} iconCaption="first dance" />
                    </div>
                    <div class="timeline-item min-w-[140px] relative before:rounded before:absolute before:-bottom-[2px] before:left-[50%] before:h-[30px] before:w-[2px] before:bg-white">
                        <Icon iconName={icon7} iconCaption="send off" />
                    </div>
                </div>
            </div>
        </div>
</section>

<style>
    .timeline {
        display: grid;
        grid-template-areas: "a . c . e . g" ". b . d . f .";
        -webkit-overflow-scrolling: touch;
    }

    .timeline-item:nth-of-type(1) {
        grid-area: a;
    }
    .timeline-item:nth-of-type(2) {
        grid-area: b;
    }
    .timeline-item:nth-of-type(3) {
        grid-area: c;
    }
    .timeline-item:nth-of-type(4) {
        grid-area: d;
    }
    .timeline-item:nth-of-type(5) {
        grid-area: e;
    }
    .timeline-item:nth-of-type(6) {
        grid-area: f;
    }
    .timeline-item:nth-of-type(7) {
        grid-area: g;
    }


</style>
