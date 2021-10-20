import { writable } from "svelte/store";

export const user = writable(false);
export const account = writable({});
export const users = writable([]);
