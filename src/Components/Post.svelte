<script>
  import { fade } from "svelte/transition";
  // import { handleTransaction } from "../utils";
  export let details, addToCollection, purchased;
  import { collection } from "../state";

  let itemPurchased = false;
  const initPayButton = () => {
    const paymentAddress = "0x468FDCe11A011394b9B7d1e99f51c284A1885Aa0";
    const amountEth = details.price.toString();

    if (window.ethereum.selectedAddress) {
      web3.eth.sendTransaction(
        {
          from: window.ethereum.selectedAddress,
          to: paymentAddress,
          value: web3.utils.toWei(amountEth, "ether"),
        },
        (err, transactionId) => {
          if (err) {
            console.log("Payment failed", err);
            alert(err.message);
          } else {
            console.log("Payment successful", transactionId);
            alert("Payment successful");
            itemPurchased = true;
            addToCollection(details.id);
            localStorage.setItem("collection", JSON.stringify($collection));
          }
        }
      );
    } else {
      ethereum.request({ method: "eth_requestAccounts" });
    }
  };
</script>

<article
  in:fade
  data-aos="fade-up"
  class="mx-auto flex-col gap-1 flex mt-5 w-11/12 max-w-md lg:max-w-3xl lg:mx-auto bg-navbar p-3 rounded-lg shadow-lg "
>
  <div class="">
    <span class="text-white font-semibold ml-1 text-lg"> {details.name} </span>
    <span class="text-author text-sm font-semibold"> &nbsp;Original</span>
  </div>

  <div class="details_on_hover relative z-0 rounded-lg overflow-hidden nft_details_parent">
    <div class="bg-dark w-full shadow-lg h-full flex items-center justify-center">
      <img src={details.data} alt="" class="object-cover w-full h-full " />
    </div>

    <div class="opacity-0 absolute top-0 right-0 p-4 text-accent nft_link">
      <a href={details.data} target="_blank" rel="noopener noreferrer">
        <svg
          width="22"
          height="22"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="filter drop-shadow-md"
        >
          <path
            d="M10.125 7.875L15.75 2.25"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2.25H15.75V6"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.75 10.5V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H7.5"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg></a
      >
    </div>

    <div
      class="nft_details opacity-0 absolute top-1/3 left-0 right-0 h-2/3 bg-gradient-to-b from-transparent to-black p-4 flex align-bottom flex-col"
    >
      <p class="text-white mt-auto block">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos tempore
        aliquid, dolor a unde blanditiis numquam vel incidunt eveniet.
      </p>
      <div class="float-right flex gap-4 ml-auto mt-4 md:mt-3">
        <button
          class="rounded-lg border-2 text-accent font-medium border-accent py-1 px-3 flex items-center justify-center"
        >
          <svg
            class="h-4 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>Ethereum</title><path
              d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
            /></svg
          >
          <div class="">
            {details.price}
          </div>
        </button>
        {#if !purchased}
          {#if itemPurchased}
            <button
              class="bg-navbar rounded-lg text-white font-medium border-2 border-navbar py-1 px-3"
              disabled
            >
              Sold
            </button>
          {:else}
            <button
              class="bg-accent rounded-lg text-white font-medium border-2 border-accent py-1 px-3"
              on:click={initPayButton}
            >
              Collect
            </button>
          {/if}
        {:else}
          <button>
            <a
              class="bg-accent rounded-lg text-white font-medium border-2 border-accent py-1 px-3"
              href={details.data}
              download={`Nft-${details.id}`}
              target="_blank"
              rel="noopener noreferrer">Download</a
            >
          </button>
        {/if}
      </div>
    </div>
  </div>
</article>
