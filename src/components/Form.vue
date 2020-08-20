<template>
  <form action="https://formspree.io/xzbjqgaw" method="POST">
    <div>
      <div class="field">
        <label class="is-kinda-white label is-size-3">E-Mail</label>
        <div class="control">
          <input class="input" type="email" placeholder="E-Mail" name="email" />
        </div>
      </div>
      <div class="field">
        <label class="label is-size-3 is-kinda-white">Nachricht</label>
        <div class="control">
          <textarea class="textarea" placeholder="..." name="message"></textarea>
        </div>
      </div>
      <div class="control">
        <button class="button is-link is-size-3" type="submit">Absenden</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>