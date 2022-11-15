<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" v-model="panel" focusable>
      <v-expansion-panel expand>
        <v-expansion-panel-header class="accordion-heading">Project Details</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Project Title</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="project.project_title" 
                  placeholder=" Add Project Title" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line" ></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Skills</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="project.skills"  
                  placeholder=" Add Skills" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Description</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-textarea
                  auto-grow
                  v-model="project.description"
                  placeholder=" Add Description"
                  rows="4"
                  row-height="20">
                </v-textarea>
            </v-col>
            </v-row> 
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>

<script>
export default{
    name:"project_details",
    props:{
      project_details:Object
    },

    data(){
        return{
        project:{
        project_title: '',
        skills:'',
        description:'',
     },
        }
    }, 
    
    watch:{
      project:{
        handler(val){
          this.$emit('project', val)
        },
        deep:true

      }
},

mounted(){
  if(this.project_details)
  this.project=this.project_details
}    
}

</script>