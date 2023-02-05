<template>
  <div class="full">
    <AboutComponent></AboutComponent>
    <PopUp></PopUp>
    <PopUpMusica></PopUpMusica>
      <TimerComponent></TimerComponent>
      <NavComponent></NavComponent>
      <div class="fondos">
<BackGround></BackGround>
      </div>


  </div>
<!--   <MusicCom></MusicCom>
  <ToDo></ToDo> -->
</template>

<script>
import TimerComponent from './Pomodoro/TimerComponent.vue';
import NavComponent from './SideNav/NavComponent.vue'
import PopUp from './SideNav/PopUp.vue';
import PopUpMusica from './SideNav/PopUpMusica.vue';
import BackGround from './SideNav/BackGround.vue';
import AboutComponent from './SideNav/AboutComponent.vue';

export default {
  components:{
    AboutComponent,
    BackGround,
    PopUpMusica,
/*     MusicCom,
    ToDo */
    PopUp,
TimerComponent,
NavComponent,
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fondos{
  margin-top:20px;
  position: fixed;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
}
</style>
