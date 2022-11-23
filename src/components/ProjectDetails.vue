<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion">
      <v-expansion-panel expand>
        <v-expansion-panel-header class="accordion-heading">
          Project Details
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in project" :key="index">
              <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">Project Title</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.project_title" 
                  label="Project Title">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line" ></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">Skills</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.skills"  
                  label="Skills">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">Description</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-textarea
                  auto-grow
                  v-model="item.description"
                  label="Description"
                  rows="3"
                  row-height="20">
                </v-textarea>
            </v-col>
            <v-col cols="12" sm="4">
                     <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeProject(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row> 
            <v-row>
              <v-col cols="12" sm="2">
                <a class="add-or-remove" 
                  @click="addProject"  
                  v-show="index == project.length-1">  
                    <label class="add-or-remove">Add Project</label> 
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
    name:"ProjectDetails",
    props:{
      project_details:Array
    },
    data() {
        return{
        project:[
        {
        project_title: '',
        skills:'',
        description:'',
     },
        ]
        }
    }, 
    methods:{
      addProject() {
        this.project.push({
         project_title:"",
         skills:"",
         description:""
        })
      },
      removeProject(index) {
     this.project.splice(index, 1)
     if (!this.project.length) this.addProject();
    },
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