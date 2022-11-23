<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion">
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">
          Social Media
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in social_media" :key="index">
              <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">Network</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.network" 
                  label="Network">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">User Name</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.user_name"   
                  label="User Name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">URL</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="item.url"    
                  label="URL">
                </v-text-field>
              </v-col>
               <v-col cols="12" sm="4">

                     <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeSocialMedia(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="2">
                <a class="add-or-remove" 
                  @click="addSocialMedia" 
                  v-show="index == social_media.length-1"> 
                  <label class="add-or-remove">Add Social Media</label>
                </a>
              </v-col>
            </v-row>
            </div>
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>

<script>
export default{
    name:"SocialMediaDetails",
    props:{
        social_media_details:Array
    },
    data() {
        return{
          social_media:[
          {
          network: '',
          user_name:'',
          url:''
     },
          ]
        }
    }, 
    methods:{
      addSocialMedia() {
        this.social_media.push({
         network:"",
         user_name:"",
         url:""
        })
      },
      removeSocialMedia(index) {
      this.social_media.splice(index, 1)
      if (!this.social_media.length) this.addSocialMedia();
    },
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