<template>
    <div class="container-fluid pt-2 pb-2 mb-5" id="skills">
        <div class="back-image"></div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-md-12">
                    <h1 class="text-center text-white">Skills</h1>
                </div>
                <div class="col-lg-12 col-md-12 col-12 mb-3 fa-pull-left">
                    <div class="row under-icon mt-4">
                        <div class="col-lg-12">
                            <h3 class="text-center">Frameworks</h3>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div v-for="wd in languages" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <h5 class="">{{wd.exp}}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <font-awesome-icon
                                            class="text-black text-center normal-icon align-middle"
                                            size="4x"
                                            :icon="[wd.type, wd.name]"
                                    >
                                    </font-awesome-icon>
                                </div>
                                <div class="col-9">
                                    <div class="col-2 fa-pull-left align-middle p-0" v-for="ws in wd.stars">
                                        <font-awesome-icon v-bind:class="{ checked: ws }"
                                                           class="text-center w-75 align-middle "
                                                           size="4x"
                                                           :icon="['fas', 'star']"
                                        ></font-awesome-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Webdev -->
                    <div
                            class="col-lg-12 col-md-12 col-12 mt-3 mb-3 fa-pull-left"
                    >
                        <div class="row under-icon mt-4">
                            <div class="col-lg-12 col-12 text-center">
                                <h3 class>Webdevelopment</h3>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div v-for="wd in webdev" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h5 class="">{{wd.exp}}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <font-awesome-icon
                                                class="text-black text-center normal-icon align-middle"
                                                size="4x"
                                                :icon="[wd.type, wd.name]"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                    <div class="col-9">
                                        <div class="col-2 fa-pull-left align-middle p-0" v-for="ws in wd.stars">
                                            <font-awesome-icon v-bind:class="{ checked: ws }"
                                                               class="text-center w-75 align-middle "
                                                               size="4x"
                                                               :icon="['fas', 'star']"
                                            ></font-awesome-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Workflow -->
                    <div class="col-lg-12 col-md-12 col-12 mt-3 mb-5 fa-pull-left">
                        <div class="row under-icon">
                            <div class="col-lg-12 col-12 text-center">
                                <h3 class>Workflow</h3>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div v-for="wd in flow" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h5 class="">{{wd.exp}}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <font-awesome-icon
                                                class="text-black text-center normal-icon align-middle"
                                                size="4x"
                                                :icon="[wd.type, wd.name]"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                    <div class="col-9">
                                        <div class="col-2 fa-pull-left align-middle p-0" v-for="ws in wd.stars">
                                            <font-awesome-icon v-bind:class="{ checked: ws }"
                                                               class="text-center w-75 align-middle "
                                                               size="4x"
                                                               :icon="['fas', 'star']"
                                            ></font-awesome-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        exp: "Drupal 7/8",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        name: "laravel",
                        exp: "Laravel 5.x",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        name: "vuejs",
                        exp: "VueJS Cli 3",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', null, null]
                    }
                ],
                webdev: [
                    {
                        name: "html5",
                        exp: "HTML",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        name: "css3",
                        exp: "CSS",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        name: "php",
                        type: "fab",
                        exp: "PHP 7",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        name: "database",
                        exp: "MySQL Database",
                        type: "fas",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        name: "js",
                        exp: "Javascript",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', null, null]
                    },
                ],
                flow: [
                    {
                        name: "linux",
                        exp: "Linux Server",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        name: "apple",
                        exp: "Apple Mac OS",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        name: "git",
                        exp: "Git",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    }
                ]
            }
        }
    };
</script>
