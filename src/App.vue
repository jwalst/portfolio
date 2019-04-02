<template>
  <div id="app" class="wrapper">
    <About></About>
    <Project></Project>
    <Skill></Skill>
    <footer class="row m-0 pt-md-4 pt-5">
      <div class="container text-center"><span>Copyright © Jeffrey Walst 2019</span>
        <p class="mt-2 col-md-12 social">
          <a class="p-1" href="mailto:info@jeffreywalst.nl">
            <font-awesome-icon class="align-middle" size="2x" :icon="['fas', 'envelope']"></font-awesome-icon>
          </a>
          <a class="p-1 align-bottom" href="https://www.linkedin.com/in/jeffreywalst/">
            <font-awesome-icon class="text-black align-middle" size="2x" :icon="['fab', 'linkedin-in']"></font-awesome-icon>
          </a>
          <!--<a class="p-1" href="https://github.com/jwalst"><i class="fab fa-2x fa-github"></i></a>-->
          <a class="p-1 " href="https://gitlab.com/jwalst">
            <font-awesome-icon class="align-middle" size="2x" :icon="['fab', 'gitlab']"></font-awesome-icon>
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Skill from "./components/Skill.vue";

export default {
  name: "app",
  components: {
    About,
    Project,
    Skill
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
