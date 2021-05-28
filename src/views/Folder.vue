<template>
  <div>
    <b-button variant="light" @click="currentUrl = parent"><b-icon icon="arrow-up" aria-hidden="true"></b-icon>{{parent}}</b-button>
    <br>

    <b-button v-for="f in folder" :key="f.url" variant="outline-info" @click="currentUrl =f.url" >

      <span v-if="f.url==currentUrl">*</span>
      <b-icon v-if="isContainer(f)" icon="folder-fill"></b-icon>
      <b-icon v-else icon="file-earmark-richtext" aria-hidden="true"></b-icon>
      {{label(f.url)}}
      <!-- <hr>
      <b-card-text>
      {{f.predicates}}
    </b-card-text> -->
  </b-button>

</div>
</template>

<script>
export default {
  name: "Folder",
  props: ['url'],
  data(){
    return{
      folder: [],
      currentUrl: "",
      parent: "",
      rdf_type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
    }
  },
  created(){

  },
  methods:{
    isContainer(f){
      let types = f.predicates[this.rdf_type] != undefined && f.predicates[this.rdf_type].namedNodes
      let cont = `${types}`.includes("http://www.w3.org/ns/ldp#BasicContainer") || `${types}`.includes("http://www.w3.org/ns/ldp#Container")
      return cont
    },
    label(text){
      var parts = text.split('/');
      var l = parts.pop() || parts.pop();  // handle potential trailing slash
      console.log(l)
      return l
      //return await this.$label(text)
    }
  },
  watch:{
    url(){
      this.currentUrl = this.url
    },
    async currentUrl(cu){
      if (cu != undefined){
        this.folder = await this.$getFolder(cu)
        console.log("folder",this.folder)
        cu.endsWith('/') ? cu = cu.slice(0, -1) : ""
        this.parent =  cu.slice(0, cu.lastIndexOf('/'))+'/';
      }
    }
  }
}
</script>

<style>

</style>
