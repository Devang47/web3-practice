<script>
  import { fade } from "svelte/transition";
  export let details;
</script>

<article
  in:fade
  class="mx-auto flex-col gap-1 flex mt-5 w-11/12 max-w-md lg:max-w-3xl lg:mx-auto bg-navbar p-3 rounded-lg shadow-lg "
>
  <div class="">
    <span class="text-white font-semibold ml-1 text-lg"> {details.author} </span>
    <span class="text-author text-sm font-semibold"> &nbsp;Author</span>
  </div>

  <div class="details_on_hover relative z-0 rounded-lg overflow-hidden">
    <div class="bg-white w-full shadow-lg">
      <img src={details.data} alt="" class="object-contain w-full" />
    </div>
    <div
      class="absolute top-1/3 left-0 right-0 h-2/3 bg-gradient-to-b from-transparent to-black p-4 flex align-bottom flex-col"
    >
      <p class="font-sans text-white mt-auto block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere asperiores ducimus
        nemo explicabo.
      </p>
      <div class=" float-right flex gap-4 ml-auto">
        <button class="rounded-lg border-2 text-red_accent font-medium border-red_accent py-1 px-3">
          $23
        </button>
        <button
          class="bg-red_accent rounded-lg text-white font-medium border-2 border-red_accent py-1 px-3"
        >
          Collect
        </button>
      </div>
    </div>
  </div>
</article>
