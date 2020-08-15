<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Name" />
      </div>
    </div>
    <div class="field">
      <label class="label">E-Mail</label>
      <div class="control">
        <input class="input" type="email" placeholder="E-Mail" />
      </div>
    </div>
    <div class="field">
      <label class="label">Nachricht</label>
      <div class="control">
        <textarea class="textarea" placeholder="..."></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-link">Absenden</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>