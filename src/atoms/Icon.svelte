<script lang="ts">
    export let iconName:string = "icon-drinks | icon-ceremony | icon-music | icon-time | icon-sendoff | icon-foods | icon-speech"; 
    export let iconCaption:string = '';
</script>

<div>
    {#if iconName === 'icon-drinks'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-drinks.svg" alt="Icon Drinks" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-ceremony'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-ceremony.svg" alt="Icon Ceremony" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-music'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-music.svg" alt="Icon Music" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-time'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-time.svg" alt="Icon Time" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-speech'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-speech.svg" alt="Icon Speech" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-sendoff'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-sendoff.svg" alt="Icon Send-Off" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else if iconName === 'icon-foods'}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-foods.svg" alt="Icon Foods" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {:else}
        <figure class="aspect-square flex flex-col justify-center items-center">
            <img src="/static/vectors/icon-time.svg" alt="Icon Time" />
            <figcaption>{iconCaption}</figcaption>
        </figure>
    {/if}
</div>

<style>
    
</style>
