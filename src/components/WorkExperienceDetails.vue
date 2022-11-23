<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion">
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">
          Work Experience Details
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in experience" :key="index">
              <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">Organization</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.organization" 
                  label="Organization">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">Job Role</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.job_role"   
                  label="Job Role">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">Job Location</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="item.job_location"    
                  label="Job Location">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">Key Roles</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.key_roles"
                  label="Key Roles">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">Start Date</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="item.start_date"
                  label="Start Date">
                </v-text-field>
            </v-col>
            </v-row>  
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">Worked Till</label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="item.end_date"
                  label="Worked Till">
                </v-text-field>
            </v-col>
             <v-col cols="12" sm="4">
                     <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeExperience(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="2">
                <a class="add-or-remove" 
                  @click="addExperience" 
                  v-show="index == experience.length-1"> 
                    <label class="add-or-remove">Add Experience</label> 
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
    name:"WorkExperienceDetails",
    props:{
      work_experience_details:Array
    },
    data () {
      return {
        experience:[
        {
          organization: '',
          job_role:'',
          job_location:'',
          key_roles:'',
          start_date:'',
          end_date:''
     },
        ]
      }
    },
  methods:{
      addExperience() {
        this.experience.push({
          organization:"",
          job_role:"",
          job_location:"",
          key_roles:"",
          start_date:"",
          end_date:""
        })
      },
      removeExperience(index) {
     this.experience.splice(index, 1)
     if (!this.experience.length) this.addExperience()
    },
    },
  watch:{
      experience:{
        handler(val) {
          this.$emit('experience', val)
        },
        deep:true
      },
   }, 
   mounted() {
    if(this.work_experience_details)
    this.experience=this.work_experience_details
   }   
}
</script>
