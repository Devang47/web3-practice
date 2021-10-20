<script>
  import { posts, user } from "../state";

  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";
  import Navbar from "../Components/Navbar.svelte";
  import Footer from "../Components/Footer.svelte";
  import { onMount } from "svelte";

  const arr = new Array(2).fill(null);

  const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_occupant",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_value",
          type: "uint256",
        },
      ],
      name: "Occupy",
      type: "event",
    },
    {
      inputs: [],
      name: "currentStatus",
      outputs: [
        {
          internalType: "enum HotelRoom.statuses",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];

  let owner;

  onMount(async () => {
    // const contract = new web3.eth.contract(abi, "0x4E29e6631065429F861056c38B891621A05D612b");
    // owner = await contract.methods.owner().call();
  });
</script>

{#if $user}
  <section>
    <Navbar />
    <div class="text-white text-xl">{owner}</div>
    <div class="grid grid-cols-1 w-full gap-8 py-10 mb-20">
      {#each $posts as item (item.id)}
        <Post details={item} />
      {/each}
    </div>
  </section>
  <Footer />
{:else}
  <Login />
{/if}
