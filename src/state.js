import { writable } from "svelte/store";
// import Web3 from "web3";

// const web3_temp = new Web3("HTTP://127.0.0.1:7545");

// export const web3 = writable(web3_temp);

export const user = writable(false);
export const account = writable({});
export const posts = writable([]);
export const users = writable([]);
