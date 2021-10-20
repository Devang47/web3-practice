<script>
  import { onMount } from "svelte";

  import { user, account, posts, users } from "../state";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  onMount(() => {
    users.set(JSON.parse(localStorage.getItem("users")) || []);
    // Using localstorage
    // posts.set(JSON.parse(localStorage.getItem("posts")) || []);

    // Using hardcoded data
    posts.set([
      {
        id: 1,
        author: "Zakir khan",
        data: "https://lh3.googleusercontent.com/NuQwyxBPd9SvtUqlqAHfi1ETg0H7yGm2w2JihcXmO0etLuZ8svh12-5mE2MudE7QQow2gWMIU8lG4ez2WwHPB4y8D8ZnXZWFfk07AA=w600",
        likes: "2",
        liked: "true",
        comments: [
          {
            id: 12,
            data: "It sounds confusing and basing on the version of web3 you have the syntax is different. According to the error you got at the first place seems like you are using web3 1.0. However the instance code is for the version 0.2.x.x",
            username: "Zakir khan",
          },
          {
            id: 12,
            data: "It sounds confusing and basing on the version of web3 you have the syntax is different. According to the error you got at the first place seems like you are using web3 1.0. However the instance code is for the version 0.2.x.x",
            username: "Zakir khan",
          },
        ],
      },
      {
        id: 2,
        author: "Arbaz Khan",
        data: "https://lh3.googleusercontent.com/NuQwyxBPd9SvtUqlqAHfi1ETg0H7yGm2w2JihcXmO0etLuZ8svh12-5mE2MudE7QQow2gWMIU8lG4ez2WwHPB4y8D8ZnXZWFfk07AA=w600",
        likes: "2",
        liked: "false",
        comments: [
          {
            id: 12,
            data: "It sounds confusing and basing on the version of web3 you have the syntax is different. According to the error you got at the first place seems like you are using web3 1.0. However the instance code is for the version 0.2.x.x",
            username: "Zakir khan",
          },
          {
            id: 12,
            data: "It sounds confusing and basing on the version of web3 you have the syntax is different. According to the error you got at the first place seems like you are using web3 1.0. However the instance code is for the version 0.2.x.x",
            username: "Zakir khan",
          },
        ],
      },
    ]);

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
