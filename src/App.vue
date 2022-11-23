<template>
  <div>
    <v-app>
      <!-- nav-bar -->
    <v-toolbar color=#00695C dense>
      <v-toolbar-title class="nav-bar-title">Resume Building Application</v-toolbar-title>
    </v-toolbar>
  <router-view />
</v-app>
</div>
</template>

<script>

</script>

<style>
.nav-bar-title{
  font-size: 22px;
  font-weight: bold;
}
.v-toolbar__content{
  color: white;
}
.v-application--wrap{
        min-height: auto;
    }
.main-heading{
  margin: 10px 1px 10px 18px
}
a{
  text-decoration: none;
}
.accordion{
  margin:5px 30px 13px 32px;
}
.line{
  margin-top: 3px;
}
.row a{
  font-size: 16px;
  font-family: sans-serif;
}

.v-expansion-panel-content{
  background: rgb(245, 245, 245);
  background: linear-gradient(90deg, rgba(245, 245, 245, 0.9) 16%, rgba(255, 255, 255, 1) 16%);
}
@media screen and (max-width: 600px) {
  .v-expansion-panel-content{
    background: white;
  }
    }
</style>
