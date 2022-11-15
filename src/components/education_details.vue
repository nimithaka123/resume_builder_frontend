<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">Education Details</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Qualification</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="education.qualification"
                  placeholder=" Add Qualification" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Course Name</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="education.course_name"   
                  placeholder=" Add Course Name" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Institute Name</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="education.institute_name"    
                  placeholder=" Add Institute Name"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Location</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="education.location"
                  placeholder=" Add Location"
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
                  v-model="education.start_date"
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
                  v-model="education.end_date"
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
    name:"education_details",
    props:{
        education_details:Object
    },
    data(){
        return{
        education:{
        qualification: '',
        institute_name:'',
        course_name:'',
        location:'',
        start_date:'',
        end_date:'',
     },
        }
    }, 
    
    watch:{
      education:{
        handler(val){
          this.$emit('education', val)
        },
        deep:true

      }
},
mounted(){
      if(this.education_details)
      this.education=this.education_details
    }
  }


</script>
