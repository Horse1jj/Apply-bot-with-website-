<script lang="ts">
  import { onMount } from "svelte";
  let name = "";
  let email = "";
  let message = "";

  async function submitForm() {
    const response = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      alert("Your application has been submitted!");
      name = email = message = "";
    } else {
      alert("Error submitting application.");
    }
  }
</script>

<h1>Application Form</h1>
<form on:submit|preventDefault={submitForm}>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Message:
    <textarea bind:value={message} required></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

<style>
  /* Add your styles here */
</style>

