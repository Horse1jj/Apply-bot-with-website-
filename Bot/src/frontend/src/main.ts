import App from './App.svelte';

const app = new App({
  target: document.getElementById('app') // Make sure this matches the HTML element in `index.html`
});

export default app;
