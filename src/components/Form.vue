<template>
  <form action="https://formspree.io/xzbjqgaw" method="POST">
    <div>
      <div class="field">
        <label class="label has-text-white">E-Mail</label>
        <div class="control">
          <input class="input" type="email" placeholder="E-Mail" name="email" />
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Nachricht</label>
        <div class="control">
          <textarea class="textarea" placeholder="..." name="message"></textarea>
        </div>
      </div>
      <div class="control">
        <button class="button is-link" type="submit">Absenden</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>