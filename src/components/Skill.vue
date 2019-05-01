<template>
    <div class="container-fluid pt-2 pb-2 mb-2" id="skills">
        <div class="back-image"></div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-md-12">
                    <h1 class="text-center text-white">Skills</h1>
                </div>
                <div class="col-lg-12 col-md-12 col-12 mb-1 fa-pull-left">
                    <div class="row under-icon mt-4">
                        <div class="col-lg-12">
                            <h3 class="text-center">Frameworks</h3>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div v-bind:key="wd.id" v-for="wd in languages" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
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
                                    <div class="col-2 fa-pull-left align-middle p-0" v-bind:key="ws" v-for="ws in wd.stars">
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
                            <div v-bind:key="wd.id" v-for="wd in webdev" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
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
                                        <div class="col-2 fa-pull-left align-middle p-0" v-bind:key="ws" v-for="ws in wd.stars">
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
                    <div class="col-lg-12 col-md-12 col-12 mt-3 fa-pull-left">
                        <div class="row under-icon">
                            <div class="col-lg-12 col-12 text-center">
                                <h3 class>Workflow</h3>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div v-bind:key="wd.id" v-for="wd of flow" class="col-lg-4 col-md-4 col-12 fa-pull-left text-center mb-3">
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
                                        <div class="col-2 fa-pull-left align-middle p-0" v-bind:key="ws" v-for="ws in wd.stars">
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
</template>

<script>
    export default {
        name: "Skill",
        data: function () {
            return {
                languages: [
                    {
                        id: 1,
                        name: "drupal",
                        exp: "Drupal 7/8",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        id: 2,
                        name: "laravel",
                        exp: "Laravel 5.x",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        id: 3,
                        name: "vuejs",
                        exp: "VueJS Cli 3",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    }
                ],
                webdev: [
                    {
                        id: 1,
                        name: "html5",
                        exp: "HTML",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        id: 2,
                        name: "css3",
                        exp: "CSS",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        id: 3,
                        name: "php",
                        type: "fab",
                        exp: "PHP 7",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        id: 4,
                        name: "database",
                        exp: "MySQL Database",
                        type: "fas",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        id: 5,
                        name: "js",
                        exp: "Javascript",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    },
                    {
                        id: 6,
                        name: "python",
                        exp: "Python",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', null]
                    }
                ],
                flow: [
                    {
                        id: 1,
                        name: "linux",
                        exp: "Linux Server",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        id: 2,
                        name: "apple",
                        exp: "Apple Mac OS",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    },
                    {
                        id: 3,
                        name: "git",
                        exp: "Git",
                        type: "fab",
                        stars: ['checked', 'checked', 'checked', 'checked', 'checked']
                    }
                ]
            }
        }
    };
</script>
