<template>
  <div>
    the actor is
    {{webId}}<br>
    <h3>the pod is {{pod}}</h3>
 <Folder :url="publicUrl" />

  </div>
</template>

<script>
export default {
  name: 'Actor',
  props: ['webId'],
  components :  {
    'Folder': () => import('@/views/Folder'),
  },
  data(){
    return {
      pod:{},

    }
  },
  async created(){
    let pod = {webId: this.webId}
    this.pod = await this.$getPodInfos(pod)
    console.log("POD", this.pod)
  },
  computed:{
    publicUrl: function (){return this.pod.storage && this.pod.storage+"public/Entity/" || ""}
  }
}
</script>

<style>

</style>
