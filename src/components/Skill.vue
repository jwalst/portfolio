<template>
  <div class="container mb-5" id="skills">
    <div class>
      <h1 class="text-center">Skills</h1>

      <div class="row mt-4">
        <!-- MCV / CMS -->
        <div class="col-lg-3 col-md-12 col-12 mb-md-5 mb-lg-0 mb-5 fa-pull-left">
          <div class="row under-icon mt-4">
            <div class="col-lg-12">
              <h3 class="text-center">Frameworks</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center offset-lg-0 offset-md-3">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  size="lg"
                  :icon="['fab', 'drupal']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fab', 'laravel']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  size="lg"
                  :icon="['fab', 'vuejs']"
                ></font-awesome-icon>
              </span>
            </div>
          </div>
        </div>

        <!-- Webdev -->
        <div
          class="col-lg-4 col-md-12 col-12 offset-lg-1 mt-md-5 mb-md-5 mb-lg-0 mt-lg-0 mt-5 mb-5 fa-pull-left"
        >
          <div class="row under-icon mt-4">
            <div class="col-lg-12 col-12 text-center">
              <h3 class>Webdevelopment</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center offset-md-2 offset-lg-0">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fab', 'php']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fab', 'html5']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center col-xs-4">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fas', 'database']"
                ></font-awesome-icon>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 offset-lg-2 offset-2 col-md-2 col-4">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fab', 'css3']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon class="fa-stack-1x text-white text-center" :icon="['fab', 'js']"></font-awesome-icon>
              </span>
            </div>
          </div>
        </div>

        <!-- Workflow -->
        <div class="col-lg-3 col-md-12 col-12 offset-lg-1 mt-sm-5 mt-lg-0 mt-5 fa-pull-left">
          <div class="row under-icon mt-4">
            <div class="col-lg-12">
              <h3 class="text-center">Workflow</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-2 col-4 col-sm-4 fa-pull-left text-center offset-lg-0 offset-md-3">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fas', 'server']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  size="lg"
                  class="fa-stack-1x text-white text-center"
                  :icon="['fab', 'apple']"
                ></font-awesome-icon>
              </span>
            </div>
            <div class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <span class="fa-stack fa-lg fa-3x">
                <font-awesome-icon class="fa-stack-2x" :icon="['fas', 'circle']"></font-awesome-icon>
                <font-awesome-icon
                  class="fa-stack-1x text-white text-center"
                  :icon="['fas', 'code-branch']"
                ></font-awesome-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill"
};
</script>
