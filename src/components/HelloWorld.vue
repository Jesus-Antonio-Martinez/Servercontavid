<template>
<div class="container">
  <div class="welcome">
    <div class="box">

      <div class="signin">
        <h1>INGRESAR</h1>
        <form class="more-padding" autocomplete="off">
            <div class="textbox">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="PIN">
            </div>
            <button class="button submit" @click="logear()">ENTRAR</button>
        </form>
      </div>

    </div>
       <div class="rightbox">
          <h2 class="title"><span>COntaVID</span></h2>
          <img class="covid" src="https://www.megaidea.net/wp-content/uploads/2020/03/coronavirus01.png"/>
          <p class="account">¿NO ESTAS REGISTRADO?</p>
          <button class="button" @click="registrar()" >REGISTRARSE</button>
       </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',

methods:{
    registrar(){
        
    },
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
