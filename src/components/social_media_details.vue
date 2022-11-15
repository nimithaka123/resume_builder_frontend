<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">Social Media</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Network</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="social_media.network" 
                  placeholder=" Add Network" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">User Name</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="social_media.user_name"   
                  placeholder=" Add User Name" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">URL</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="social_media.url"    
                  placeholder=" Add URL"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>

<script>
export default{
    name:"social_media_details",
    props:{
        social_media_details:Object
    },
    data(){
        return{
          social_media:{
          network: '',
          user_name:'',
          url:''
     },
        
        }
    }, 
    watch:{
      social_media:{
        handler(val){
          this.$emit('social_media', val)
        },
        deep:true

      },

},

mounted(){
  if(this.social_media_details)
  this.social_media=this.social_media_details
}
    
    
}

</script>