<script>
  import { posts, user } from "../state";

  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";
  import Navbar from "../Components/Navbar.svelte";
  import Footer from "../Components/Footer.svelte";
  import { onMount } from "svelte";

  const arr = new Array(2).fill(null);
  
</script>

{#if $user}
  <section>
    <Navbar />
    <div class="grid grid-cols-1 w-full gap-8 py-10 mb-20 md:grid-cols-2 md:gap-x-2">
      {#each $posts as item (item.id)}
        <Post details={item} />
      {/each}
    </div>
  </section>
  <Footer />
{:else}
  <Login />
{/if}
