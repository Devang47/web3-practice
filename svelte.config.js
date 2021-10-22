const netlify = require('@sveltejs/adapter-netlify')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
const config = {

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: netlify(),
    target: "#svelte",
  },
};

export default config;


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
}
