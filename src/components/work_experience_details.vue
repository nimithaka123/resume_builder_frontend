<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">Work Experience Details</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Organization</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="experience.organization" 
                  placeholder=" Add Organization" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Job Role</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="experience.job_role"   
                  placeholder=" Add Job Role" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Job Location</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="experience.job_location"    
                  placeholder=" Add Job Location"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Key Roles</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="experience.key_roles"
                  placeholder=" Add Key Roles"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Start Date</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="experience.start_date"
                  placeholder=" Add Start Date"
                  clearable>
                </v-text-field>
            </v-col>
            </v-row>  
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">End Date</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="experience.end_date"
                  placeholder=" Add End Date"
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
    name:"work_experience_details",
    props:{
      work_experience_details:Object
    },
    data: () => ({
        experience:{
          organization: '',
          job_role:'',
          job_location:'',
          key_roles:'',
          start_date:'',
          end_date:''
     },
  }),
  watch:{
      experience:{
        handler(val){
          this.$emit('experience', val)
        },
        deep:true

      },
   }, 
   
   mounted(){
    if(this.work_experience_details)
    this.experience=this.work_experience_details
   }
    
}
</script>
