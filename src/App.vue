<template>
  <div>
    <v-app>
    <v-toolbar color=#80CBC4 dense>
      <v-toolbar-title>Resume Building Application</v-toolbar-title>
    </v-toolbar>
  <router-view />
</v-app>
</div>
 
</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style>
.v-toolbar__content{
  color: white;
}
.v-application--wrap{
        min-height: auto;
    }
.main-heading{
  margin: 10px 1px 10px 17px
}
a{
  text-decoration: none;
}
.accordion{
  margin:5px 30px 25px 34px;
}
.line{
  margin-top: 3px;
}
.row a{
  font-size: 16px;
  font-family: sans-serif;
}
</style>
