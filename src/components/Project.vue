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
              <p class="mt-4"><span v-html="item.description"></span></p>
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
              <p class="mt-4"><span v-html="item.description"></span></p>
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
          name: "IPM",
          type: "Project",
          img: require("@/assets/img/ipm.png"),
          logo: require("@/assets/img/IPM_BLACK.png"),
          startdate: "Sep 2017",
          enddate: "Ongoing",
          description:
            "<p>Project Specification Simplified! IPM (Internalprojectmanager) is a Project management system where companies can manage their project releases. Every Projects is specified in a release. In every release are Features, Non-functional Requirements, Technical Specifications and Out of Scope." +
                  " Every feature has its own requirements which can be assigned to multiple users in the projects team.</p> <p>Links: <br><a target='_blank' href='https://gitlab.com/internalprojectmanager/IPM'>Gitlab</a><br><a target='_blank' href='https://internalprojectmanager.com'>Website</a></p>"
        },
        {
          id: 1,
          name: "DNSSEC Zone Checker",
          type: "Project",
          img: require("@/assets/img/DNSZONECHECKER.png"),
          logo: null,
          startdate: "Jan 2019",
          enddate: "Jun 2019",
          description:
                  "The DNSSEC Zone Checker checks the domain RRSET for ZSK, RRSIG and DS records. With this the Dutch registrars can check for their new records before they are moving the domain. This ensures a DNSSEC enabled domain at all times. Tool made in Python 3.7."
        },
        {
          id: 2,
          name: "MaaS Potentiescan",
          type: "Project",
          img: require("@/assets/img/MaaS-Potentiescan.png"),
          logo: require("@/assets/img/MPS-logo.png"),
          startdate: "Sep 2018",
          enddate: "Jan 2019",
          description:
                  "<p>Mobility as a Service (MaaS) is a mobility concept in which passengers purchase (part of) their travel requirements from one service provider. The MaaS potential scan gives the user insight into the potential of a MaaS subscription. For this, all residents in the Netherlands individually have the chance that they will purchase the MaaS proposition as a subscription. For this, the MaaS subscription is weighed against the current mobility behavior derived from GSM data. The MaaS potential scan has been made in VueJS and data supplied from OmniTRANS in Ruby.</p> <p>Links: <br><a target='_blank' href='https://maaspotentiescan.nl'>Website</a></p"
        },

      ]
    };
  }
};
</script>

