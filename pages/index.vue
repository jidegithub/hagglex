<template>
  <Form :mode="mode" @modeSwitch="switchForm" />
</template>

<script>
import Form from '../components/form'
export default {
  name:"index",
  data(){
    return {
      mode: "login",
      currentUser: {}
    }
  },
  components:{
    Form
  },
  methods:{
    switchForm(mode){
      if(mode == "login"){
        this.mode = "signup"
      }
      else if(mode == "signup"){
        this.mode = "login"
      }
    }
  }
}
</script>

<style lang="scss">

</style>
