<script>
  import { user, collection } from "../state";

  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";
  import Navbar from "../Components/Navbar.svelte";
  import Footer from "../Components/Footer.svelte";
  import { onMount } from "svelte";

  import { nfts } from "../utils";

  const error = "";

  const addToCollection = (id) => {
    let item = nfts.find((e) => e.id === id);
    collection.set([...$collection, item]);
    console.log($collection);
  };
</script>

{#if $user}
  <section>
    <Navbar />

    <h1
      class="text-4xl text-white font-bold w-10/12 text-center mx-auto  mt-16 leading-snug max-w-lg md:max-w-5xl lg:text-6xl lg:leading-snug lg:mt-24 "
    >
      Welcome to the biggest market of <span class="text-accent">Legit</span>
      and
      <span class="text-accent">Creative</span>
      Nft’s.
    </h1>

    <a
      class="py-2 px-6 block w-min whitespace-nowrap mx-auto text-dark bg-light_dark font-bold rounded-md outline-none duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg my-4 mt-12 text-lg"
      href="#nfts"
    >
      Lets Explore!
    </a>

    <div
      id="nfts"
      class="grid grid-cols-1 w-full gap-8 mt-12 py-10 mb-20 md:grid-cols-2 md:w-11/12 md:mx-auto md:gap-x-1 md:gap-y-8 lg:w-10/12 lg:max-w-7xl"
    >
      {#each nfts as item (item.id)}
        <Post {addToCollection} details={item} purchased={false} />
      {/each}
    </div>
  </section>
  <Footer />
{:else}
  <Login />
{/if}

<!-- {#if error}
  <Error />
{/if} -->
