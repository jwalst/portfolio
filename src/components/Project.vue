<template>
  <div class="project container-fluid mb-5" id="project">
    <div class="col-12">
      <div class="align-content-center col-12 mb-5">
        <h1>Latest Contributions</h1>
        <h5 class="text-center">That I contributed on</h5>
      </div>
      <div v-for="item in items" :key="item.id">
        <div v-if="item.id%2==0">
          <div class="row mt-5 mt-md-0">
            <div class="col-lg-6 col-12 order-2 order-lg-1 p-0">
              <img class="img-projects" v-bind:src="item.img">
            </div>
            <div class="col-lg-6 col-12 order-1 order-lg-2 pl-lg-4">
              <h2>
                <span v-if="item.logo !== null">
                  <img class="logo-projects mb-3" v-bind:src="item.logo">
                </span>
                <span v-else>{{item.name}}</span>
              </h2>
              <p>
                {{item.type}}
                <br>
                {{item.startdate}} - {{item.enddate}}
              </p>
              <h6></h6>
              <p class="mt-4">{{item.description}}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row mt-5 mt-md-0">
            <div class="col-lg-6 col-12 order-2 order-lg-1 pl-lg-4">
              <h2>
                <span v-if="item.logo !== null">
                  <img class="logo-projects mb-3" v-bind:src="item.logo">
                </span>
                <span v-else>{{item.name}}</span>
              </h2>
              <p>
                {{item.type}}
                <br>
                {{item.startdate}} - {{item.enddate}}
              </p>
              <h6></h6>
              <p class="mt-4">{{item.description}}</p>
            </div>
            <div class="col-lg-6 col-12 order-2 order-lg-2 p-0">
              <img class="img-projects" v-bind:src="item.img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: function() {
    return {
      items: [
        {
          id: 0,
          name: "MaaS Potentiescan",
          type: "Project",
          img: require("@/assets/img/MaaS-Potentiescan.png"),
          logo: require("@/assets/img/MPS-logo.png"),
          startdate: "Sep 2018",
          enddate: "Ongoing",
          description:
            "Mobility as a Service (MaaS) is een mobiliteitsconcept waarin reizigers (een deel van) hun reisbehoefte afnemen bij één serviceprovider. De MaaS-potentiescan geeft de gebruiker inzicht in de potentie van een MaaS abonnement. Hiervoor wordt voor alle inwoners in Nederland afzonderlijk de kans bepaald dat zij die MaaS propositie als abonnement zullen afnemen. Hiervoor wordt het MaaS abonnement afgewogen tegen het huidig mobiliteitsgedrag afgeleid uit GSM data. Gemaakt in VueJS en data geleverd vanuit OmniTRANS in Ruby"
        },
        {
          id: 1,
          name: "IPM",
          type: "Project",
          img: require("@/assets/img/ipm.png"),
          logo: require("@/assets/img/IPM_BLACK.png"),
          startdate: "Sep 2017",
          enddate: "Ongoing",
          description:
            "Project Specification Simplified! IPM (Internalprojectmanager) is a Project management system where companies can manage their project releases. Every Projects is specified in a release. In every release are Features, Non-functional Requirements, Technical Specifications and Out of Scope. Every feature has its own requirements which can be assigned to multiple users in the projects team. Public Version Inbound!"
        }
      ]
    };
  }
};
</script>

