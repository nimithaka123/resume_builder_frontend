<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion">
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">
          Education Details
          <span class="red--text">*</span>
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in education" :key="index">
              <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Qualification
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.qualification"
                  :rules="[required('Qualification')]"
                  label="Qualification">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Course Name
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.course_name" 
                  :rules="[required('Course name')]"
                  label="Course Name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Institute Name
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="item.institute_name" 
                  :rules="[required('Institute name')]"   
                  label="Institute Name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Location
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.location"
                  :rules="[required('Location')]" 
                  label="Location">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Start Date
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="item.start_date"
                  :rules="[required('Start date')]" 
                  label="Start Date">
                </v-text-field>
            </v-col>
            </v-row>  
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  End Date
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  onfocus="(this.type='date')"
                  v-model="item.end_date"
                  :rules="[required('End date')]" 
                  label="End Date">
                </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeEducation(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="2">
                <a class="add-or-remove" 
                  @click="addEducation" 
                  v-show="index == education.length-1"> 
                    <label class="add-or-remove">Add Education</label>
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
    name:"EducationDetails",
    props:{
        education_details:Array
    },
    data() {
        return{
        education:[
        {
        qualification: '',
        institute_name:'',
        course_name:'',
        location:'',
        start_date:'',
        end_date:'',
     },
        ],
        required(propertyType){
      return v => v && v.length >0 || `${propertyType} is required`
     }
        }
    },
    methods:{
      addEducation() {
        this.education.push({
          qualification:"",
          institute_name:"",
          course_name:"",
          location:"",
          start_date:"",
          end_date:""
        })
      },
      removeEducation(index) {
      this.education.splice(index, 1)
      if (!this.education.length) this.addEducation();
    },
    },
    watch:{
      education:{
        handler(val) {
          this.$emit('education', val)
        },
        deep:true
      }
},
mounted() {
      if(this.education_details)
      this.education=this.education_details
    }
  }
</script>

<style>
.add-or-remove {
  font-size: 15px;
}
</style>
