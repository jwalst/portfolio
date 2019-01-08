<template>
  <div class="about row mb-5" id="about">
        <div class="back-image"></div>
        <div class="container mt-auto mb-auto">
            <div class="row">
                <p class="col-md-12">
                    <img class="img-thumbnail rounded-circle about-img mt-md-5" src="../assets/img/jeffrey.png"/>
                </p>
                <p class="mt-2 col-md-12 h1">Jeffrey Walst</p>
                <p class="mt-2 col-md-12 h5 text-light">Software Engineer</p>

                <p class="mt-lg-5 mt-2 col-md-12">

                    <span class="text-left">
                        A spontaneous and very vicious Software engineer with a broad knowledge of different programming languages.
                        My programming skills are characterized in different CMS and MVC systems. My main programming languages ​are PHP and VueJS.
                    </span>
                </p>
                <div class="mt-5 col-md-12 text-center">Find me on:</div>
                <div class="col-md-12 social text-center">
                    <a class="p-1" href="https://www.linkedin.com/in/jeffreywalst/">
                                <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']"></font-awesome-icon></a>
                    <!--<a class="p-1" href="https://github.com/jwalst"><i class="fab fa-2x fa-github"></i></a>-->
                    <a class="p-1" href="https://gitlab.com/jwalst"><font-awesome-icon size="2x" :icon="['fab', 'gitlab']"></font-awesome-icon></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
