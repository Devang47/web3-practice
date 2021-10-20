<script>
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({
      duration: 500,
    });
    console.log("AOS Initiated");
  });
</script>

<footer class="bg-navbar py-10 px-8 w-full rounded-xl pb-16">
  <h2 class="text-center text-white font-bold text-4xl">
    NftWorks<span class="text-accent">.</span>
  </h2>

  <div class="flex mx-auto mt-12 gap-12 items-center justify-center">
    <ul class="flex flex-col items-center justify-center gap-3 text-white">
      <li>
        <a href="#" class="footer_nav_head py-2 px-4 font-semibold text-lg rounded-lg mb-1 block">
          Navigation</a
        >
      </li>
      <li><a href="/" class=""> Home</a></li>
      <li><a href="/profile" class=""> Profile</a></li>
      <li><a href="/profile#collection" class=""> Collection</a></li>
    </ul>
    <ul class="flex flex-col items-center justify-center gap-3 text-white">
      <li>
        <a href="#" class="footer_nav_head py-2 px-4 font-semibold text-lg rounded-lg mb-1 block">
          Developer</a
        >
      </li>
      <li><a href="/" class=""> Twitter</a></li>
      <li><a href="/profile" class=""> Github</a></li>
      <li><a href="mailto:devangsaklani@gmail.com" class=""> Email</a></li>
    </ul>
  </div>
</footer>
