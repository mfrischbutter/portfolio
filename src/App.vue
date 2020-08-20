<template>
  <div class="columns">
    <div class="column is-flex is-background-1 is-full-height">
      <div class="nameContainer">
        <div class="title is-1">Michael Frischbutter</div>
        <div class="is-size-3">
          <p>Hi, I'm Michael from Leipzig. I am specialized in the development of PHP backend systems and apps using Flutter.</p>
        </div>
      </div>
      <div class="level">
        <div class="level-left iconbar">
          <a href="https://www.xing.com/profile/Michael_Frischbutter" target="_blank">
            <xing-icon />
          </a>
          <a href="https://www.linkedin.com/in/michael-frischbutter-4a9650151/" target="_blank">
            <linkedin-icon />
          </a>
          <a href="https://github.com/mfrischbutter" target="_blank">
            <github-icon />
          </a>
          <a href="https://stackoverflow.com/users/8971539/mfrischbutter" target="_blank">
            <stack-overflow-icon />
          </a>
        </div>
      </div>
    </div>
    <div class="column is-background-2 is-flex is-full-height">
      <img class="profile-pic" src="./assets/profile.jpg" />
      <div class="padding-box h-50vh">
        <div class="title is-2">About me</div>
        <div class="is-size-3" id="about-text">
          <p
            class="mb-3"
          >I have a diverse set of skills, ranging from design using HTML5, CSS3, Javascript and Vue all the way to PHP, Python, App-Developement with Flutter, Laravel and Typo3.</p>
          <p>Currently I am working full time as a backend developer on many different projects at a digital agency in Leipzig.</p>
        </div>
      </div>
    </div>
    <div class="column is-background-3 is-flex is-full-height">
      <div class="padding-box">
        <div class="title is-2 is-kinda-white">Contact</div>
        <div class="is-size-3">
          <p
            class="mb-6 is-kinda-white"
          >To contact me feel free to use the contact form below. I am also available through the social networks Xing and LinkedIn.</p>
          <Form />
        </div>
      </div>
      <div class="spacer"></div>
      <div class="copyright is-kinda-white is-size-4">&copy; Michael Frischbutter {{currentYear}}</div>
    </div>
  </div>
</template>

<style lang="scss">
.copyright {
  padding: 0.2rem 0.75rem;
}
.h-50vh {
  height: 50vh;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.spacer {
  margin: auto 0;
}
.centerVertical {
  margin: auto 0;
}
.title.is-2 {
  margin-bottom: 0.75rem !important;
}
.title.is-1 {
  color: white;
  font-size: 4rem;
}
.iconbar {
  padding: 0.75rem;
  height: 3.5rem;
}
.iconbar > a > span > svg {
  padding: 0rem 0.25rem;
  color: #ffffff;
  height: 2.3rem;
  width: 2.3rem;
  transition: color 0.3s;
}
.iconbar > a > span > svg:hover {
  color: #ffddd2;
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
@media screen and (min-width: 800px) {
  .is-full-height {
    height: calc(var(--vh, 1vh) * 100);
  }
}
.is-full-height:first-of-type {
  height: calc(var(--vh, 1vh) * 100);
}
</style>

<script>
// import Router from "@/components/Router.vue";
import Form from "@/components/Form.vue";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

export default {
  name: "App",
  data: function () {
    return {
      'currentYear': new Date().getFullYear()
    }
  },
  components: {
    // Router,
    Form,
  },
};
</script>