<script>
  import { fade } from "svelte/transition";

  import Navbar from "../Components/Navbar.svelte";
</script>

<Navbar />

<div in:fade class="pb-10 ">
  <header class="bg-banner h-28 md:h-40 w-full" />
  <div class="bg-white rounded-full h-32 w-32 mx-auto -mt-16 md:h-40 md:w-40 md:-mt-20">
    <img src="" alt="" />
  </div>

  <div class="text-center text-white mt-4 text-3xl font-semibold md:text-4xl">Devang Saklani</div>

</div>
