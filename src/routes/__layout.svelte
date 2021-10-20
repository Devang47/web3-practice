<script>
  import { onMount } from "svelte";

  import { user, account, users } from "../state";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  onMount(() => {
    users.set(JSON.parse(localStorage.getItem("users")) || []);
    // Using localstorage
    // posts.set(JSON.parse(localStorage.getItem("posts")) || []);

    // Using hardcoded data

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
