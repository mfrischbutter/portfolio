<template>
  <div class="columns">
    <div class="column is-flex is-background-1 is-full-height">
      <Router />
      <div class="nameContainer">
        <div class="title is-1">Michael Frischbutter</div>
        <div
          class="is-medium"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, rerum porro, provident nemo architecto iusto quae distinctio reiciendis, atque illo cum laborum assumenda laboriosam suscipit! Magnam doloribus beatae modi illum!</div>
      </div>
      <div class="level">
        <div class="level-left iconbar">
          <xing-icon />
          <linkedin-icon />
          <github-icon />
          <stack-overflow-icon />
        </div>
      </div>
    </div>
    <div class="column is-background-2 is-flex is-full-height">
      <img class="profile-pic" src="./assets/profile.jpg" />
      <div class="padding-box">
        <div class="title is-5">About me</div>
        <div
          class="is-medium"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi, quae saepe sunt aperiam itaque tenetur rerum explicabo? Officiis, sunt? Officiis voluptatem iusto reprehenderit rem esse consequatur blanditiis quos quas.</div>
      </div>
    </div>
    <div class="column is-background-3 is-flex is-full-height">
      <div class="padding-box">
        <div class="title is-5 has-text-white">Contact</div>
        <div
          class="is-medium has-text-white"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi, quae saepe sunt aperiam itaque tenetur rerum explicabo? Officiis, sunt? Officiis voluptatem iusto reprehenderit rem esse consequatur blanditiis quos quas.</div>
      </div>
      <div class="spacer"></div>
      <img class="profile-pic" src="./assets/macbook.jpeg" />
    </div>
  </div>
</template>

<style lang="scss">
.spacer{
  margin: auto 0;
}
.centerVertical{
  margin: auto 0;
}
.title.is-5 {
  margin-bottom: 1rem !important;
}
.title.is-1 {
  color: white;
  font-size: 4rem;
}
.iconbar {
  padding: 0.75rem;
  height: 3.5rem;
}
.iconbar > span > svg {
  padding: 0rem 0.25rem;
  color: #4370af;
  height: 2.3rem;
  width: 2.3rem;
  transition: color 0.3s;
}
.iconbar > span > svg:hover{
  color: white;
}
.padding-box {
  padding: 1.2rem 0.75rem;
}
.profile-pic {
  height: 50vh;
  object-fit: cover;
  object-position: 100% -15px;
}
.nameContainer {
  margin: auto 0;
  padding: 0.75rem;
}
.column {
  padding: 0 !important;
}
.columns {
  margin: 0rem !important;
}

.is-flex {
  display: flex;
}

.is-full-height {
  height: 100vh;
  flex-direction: column;
}
</style>

<script>
// import Router from "@/components/Router.vue";
// import Form from "@/components/Form.vue";

export default {
  name: "App",
  components: {
    // Router,
    // Form,
  },
};
</script>