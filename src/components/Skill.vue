<template>
  <div class="container mb-5" id="skills">
    <div class>
      <h1 class="text-center">Skills</h1>

      <div class="row mt-4">
        <!-- MCV / CMS -->
        <div class="col-lg-12 col-md-12 col-12 mb-md-5 mb-lg-0 mb-5 fa-pull-left">
          <div class="row under-icon mt-4">
            <div class="col-lg-12">
              <h3 class="text-center">Frameworks</h3>
            </div>
          </div>
          <div class="row">
            <div v-for="wd in languages" class="col-lg-4 col-md-2 col-4 fa-pull-left text-center">
              <font-awesome-icon
                      class="text-black text-center normal-icon"
                      size="4x"
                      :icon="[wd.type, wd.name]"
              ></font-awesome-icon>
              <span class="stars " v-for="ws in wd.stars">
                <font-awesome-icon v-bind:class="{ checked: ws }"
                                   class="text-center"
                                   size="1x"
                                   :icon="['fas', 'star']"
                ></font-awesome-icon>
              </span>
            </div>
          </div>
        </div>

        <!-- Webdev -->
        <div
          class="col-lg-12 col-md-12 col-12 mt-md-5 mb-md-5 mb-lg-0 mt-lg-0 mt-5 mb-5 fa-pull-left"
        >
          <div class="row under-icon mt-4">
            <div class="col-lg-12 col-12 text-center">
              <h3 class>Webdevelopment</h3>
            </div>
          </div>
          <div class="row">
            <div v-for="wd in webdev" class="col-lg-4 col-md-2 col-4 fa-pull-left text-center mb-3">
                <font-awesome-icon
                  class="text-black text-center normal-icon"
                  size="4x"
                  :icon="[wd.type, wd.name]"
                ></font-awesome-icon>
              <span class="stars " v-for="ws in wd.stars">
                <font-awesome-icon v-bind:class="{ checked: ws }"
                        class="text-center"
                        size="1x"
                        :icon="['fas', 'star']"
                ></font-awesome-icon>
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
                  :icon="['fab', 'linux']"
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
                  :icon="['fab', 'gitlab']"
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
  name: "Skill",
  data: function () {
    return {
      languages: [
        {
          name: "drupal",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', 'checked']
        },
        {
          name: "laravel",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', 'checked']
        },
        {
          name: "vuejs",
          type: "fab",
          stars: ['checked', 'checked', 'checked', '', '']
        }
      ],
      webdev: [
        {
          name: "php",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', '']
        },
        {
          name: "html5",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', 'checked']
        },
        {
          name: "database",
          type: "fas",
          stars: ['checked', 'checked', 'checked', 'checked', '']
        },
        {
          name: "css3",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', 'checked']
        },
        {
          name: "js",
          type: "fab",
          stars: ['checked', 'checked', 'checked', 'checked', '']
        },
      ]
    }
  }
};
</script>
