<script>
  import { posts, user } from "../state";

  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";
  import Navbar from "../Components/Navbar.svelte";
  import Footer from "../Components/Footer.svelte";
  import { onMount } from "svelte";

  const arr = new Array(2).fill(null);
</script>

{#if !$user}
  <section>
    <Navbar />

    <h1
      class="text-4xl text-white font-bold w-10/12 text-center mx-auto  mt-16 leading-snug max-w-lg"
    >
      Welcome to the biggest market of <span class="text-accent">Legit</span>
      and
      <span class="text-accent">Creative</span>
      Nft’s.
    </h1>

    <button
      class="py-2 px-6 block mx-auto text-dark bg-light_dark font-bold rounded-md outline-none duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg my-4 mt-10 text-lg"
    >
      Lets Explore!
    </button>

    <div
      class="grid grid-cols-1 w-full gap-8 mt-14 py-10 mb-20 md:grid-cols-2 md:w-11/12 md:mx-auto md:gap-1 xl:grid-cols-3"
    >
      {#each $posts as item (item.id)}
        <Post details={item} />
      {/each}
    </div>
  </section>
  <Footer />
{:else}
  <Login />
{/if}
