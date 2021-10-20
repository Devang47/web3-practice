<script>
  import { fade } from "svelte/transition";

  export let details;

  let liked = true;
  const handleCollect = () => {
    liked = !liked;
  };
</script>

<article in:fade class="mx-auto flex-col gap-2 flex mt-5 w-11/12 max-w-md lg:max-w-3xl lg:mx-auto ">
  <div class="flex items-center justify-start">
    <span class="text-white mr-4 text-2xl font-medium"> {details.author} </span>
  </div>
  <a href={`/posts/${details.id}`}>
    <div class="bg-white rounded w-full border-2 border-red-500">
      <img src={details.data} alt="" class="object-contain w-full" />
    </div></a
  >
  <div class="flex items-center justify-end gap-3 w-full">
    <button
      on:click={handleCollect}
      class="bg-gray-100 text-black rounded-md font-medium py-1 px-4 mr-2 active:shadow-lg hover:shadow duration-75"
    >
      Collect Nft
    </button>
    <button>
      <svg
        width="28"
        height="28"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 16.625C15.5496 16.625 17.1999 16.625 18.2245 15.5995C19.25 14.5749 19.25 12.9246 19.25 9.625C19.25 6.32538 19.25 4.67513 18.2245 3.6505C17.1999 2.625 15.5496 2.625 12.25 2.625H8.75C5.45038 2.625 3.80013 2.625 2.7755 3.6505C1.75 4.67513 1.75 6.32538 1.75 9.625C1.75 12.9246 1.75 14.5749 2.7755 15.5995C3.34688 16.1718 4.1125 16.4246 5.25 16.5358"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2501 16.625C11.1686 16.625 9.97684 17.0625 8.88921 17.6269C7.14096 18.5343 6.26684 18.9884 5.83634 18.6988C5.40584 18.41 5.48721 17.5131 5.65084 15.7203L5.68759 15.3125"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</article>
