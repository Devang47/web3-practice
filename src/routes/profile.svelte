<script>
  import { collection } from "../state";

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Navbar from "../Components/Navbar.svelte";
  import Post from "../Components/Post.svelte";
  import Footer from "../Components/Footer.svelte";

  let address;
  onMount(() => {
    if (!web3 || !window.ethereum.selectedAddress) {
      window.location.href = "/";
    }
    address = window.ethereum.selectedAddress;
  });
</script>

<Navbar />

<section in:fade class="pb-10 ">
  <header class="bg-banner h-28 md:h-40 w-full shadow-inner" />
  <div class="bg-white rounded-full h-32 w-32 mx-auto -mt-16 md:h-40 md:w-40 md:-mt-20">
    <img src="" alt="" />
  </div>
  <h1 class="text-center mt-4 text-3xl font-semibold md:text-4xl text-white ">Devang Saklani</h1>
  <h2 class="text-center text-light_dark mt-4 max-w-md mx-auto md:max-w-lg ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae recusandae, itaque numquam
    impedit et facere ullam voluptates nisi.
  </h2>

  <h3
    class="text-light_dark text-center mt-10 bg-navbar py-2 px-4 rounded-lg w-min mx-auto whitespace-nowrap shadow"
  >
    Address: <code class="font-mono py-1 px-2 m-1 bg-dark border border-banner">{address}</code>
  </h3>

  {#if $collection.length}
    <section id="collection" class="pt-24  py-2 px-4">
      <div class=" md:w-11/12 lg:w-10/12 lg:max-w-7xl mx-auto px-10">
        <h2
          class=" text-2xl font-bold text-center text-light_dark bg-navbar rounded-lg py-2 px-4 w-min mx-auto whitespace-nowrap shadow-md"
        >
          Your Collection:
        </h2>
      </div>

      <div
        id="nfts"
        class="grid grid-cols-1 w-full gap-12 py-5 mb-20 md:grid-cols-2 md:w-11/12 md:mx-auto md:gap-x-1 md:gap-y-8 lg:w-10/12 lg:max-w-7xl"
      >
        {#each $collection as item}
          <Post addToCollection={null} details={item} purchased={true} />
        {/each}
      </div>
    </section>
  {/if}
</section>
<Footer />
