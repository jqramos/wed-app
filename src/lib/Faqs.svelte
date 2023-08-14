
<div transition:scale ={{ delay: 250, duration: 700, easing: cubicInOut, opacity:50}} >
    <div class="p-10 flex flex-col justify-center items-center  text-center">    
        <!-- create layout for wedding faqs numbered list-->

        <h1 class="text-5xl font-extrabold">Frequently Asked Questions</h1>
        <ul>
            <li class="text-xl">
                <span class="font-bold">What is the dress code?</span>
                <br>
                <span class="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium nisl ut leo mollis interdum. Donec eu varius sem, sit amet ultrices diam. Curabitur elementum eros ac augue pellentesque, a ornare ligula cursus. Cras eu imperdiet turpis. Praesent cursus nisi a imperdiet accumsan. Nam non lobortis metus. Donec ac neque eget ligula porttitor hendrerit. Cras cursus risus nulla, ac venenatis ante commodo ut. Pellentesque mattis tristique iaculis. Integer risus neque, euismod vel libero eget, eleifend consequat felis. Mauris elit nunc, posuere non volutpat sit amet, placerat quis massa. Aliquam pulvinar laoreet congue. Proin ultricies ipsum ac erat viverra, sagittis pretium lacus aliquet. Aenean eget orci sed magna porta sagittis.
                </span>
            </li>

        </ul>
    </div>
</div>



<script lang="ts">
    import { scale } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
</script>
