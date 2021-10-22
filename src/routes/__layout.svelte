<script>
  import { onMount } from "svelte";

  import { users, collection } from "../state";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  onMount(() => {
    users.set(JSON.parse(localStorage.getItem("users")) || []);
    collection.set(JSON.parse(localStorage.getItem("collection")) || []);

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
