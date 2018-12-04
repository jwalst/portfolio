<template>
  <div id="app" class="wrapper">
    <About></About>
    <Project></Project>
    <Skill></Skill>
    <footer class="row">
        <div class="container text-center">
            Copyright © Jeffrey Walst 2018
            <p class="mt-2 col-md-12 social">
                <a class="p-1" href="https://www.linkedin.com/in/jeffreywalst/">
                                <font-awesome-icon class="text-black" size="2x" :icon="['fab', 'linkedin']"></font-awesome-icon></a>
                    <!--<a class="p-1" href="https://github.com/jwalst"><i class="fab fa-2x fa-github"></i></a>-->
                    <a class="p-1" href="https://gitlab.com/jwalst"><font-awesome-icon size="2x" :icon="['fab', 'gitlab']"></font-awesome-icon></a>
            </p>
        </div>
    </footer>
  </div>
</template>

<script>
import About from './components/About.vue'
import Project from './components/Project.vue'
import Skill from './components/Skill.vue'

export default {
  name: 'app',
  components: {
    About,
    Project,
    Skill
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
