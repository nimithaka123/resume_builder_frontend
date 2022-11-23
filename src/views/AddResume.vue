<template>
  <main>
    <!-- Alert box -->
    <v-alert v-model="alert"
      dense
      text
      type="success"
    >
      Successfully saved
    </v-alert>
    <!-- Subheading -->
    <div class="back-option">
      <router-link to="/"> &lt Back to all resume list</router-link>
      <h4 class="sub-heading">Create resume content</h4>
    </div>
    <div>
    <!-- Resume form -->
      <v-form ref="form"
              lazy-validation
      >
        <BasicDetails
         @basic="getBasicDetails"
        />  
        <LocationDetails 
         @location="getLocationDetails"
         />
        <WorkExperienceDetails 
         @experience="getWorkExperience"
        />
        <EducationDetails 
         @education="getEducationDetails"
         />
        <ProjectDetails 
         @project="getProjectDetails"
         />
        <SkillDetails
         @skill="getSkillDetails"
         /> 
        <SocialMediaDetails 
         @social_media="getSocialMediaDetails"
         />
         <!-- Buttons -->
        <div class="button">
          <v-btn id="cancel-button" 
            @click="goBack">
            Cancel
          </v-btn>
          <v-btn id="save-button" 
            @click="[createResume(), validate()]">
            Save
          </v-btn>
        </div>
      </v-form>
    </div>
  </main>
  </template>
  
  <script>
  import BasicDetails from "@/components/BasicDetails.vue"
  import LocationDetails from "@/components/LocationDetails.vue"
  import EducationDetails from "@/components/EducationDetails.vue"
  import ProjectDetails from "@/components/ProjectDetails.vue"
  import WorkExperienceDetails from "@/components/WorkExperienceDetails.vue"
  import SkillDetails from "@/components/SkillDetails.vue"
  import SocialMediaDetails from "@/components/SocialMediaDetails.vue"
  import axios from 'axios'

  export default{
    name:"AddResume",
    components:{
      BasicDetails,
      LocationDetails,
      EducationDetails,
      ProjectDetails,
      WorkExperienceDetails,
      SkillDetails,
      SocialMediaDetails,
    },
    data() {
    return{
        name:'',
        email: '',
        phone:'',
        image:'',
        summary:'',
        alert:false,
        skill:[{skill_name:'',skill_level:''}],
        locationList:[{address:'',street:'',country:'',pincode:'',city:''}],
        workExperienceList:[{organization:'',job_role:'',job_location:'',key_roles:'',start_date:'',end_date:''}],
        educationDetailsList:[{qualification:'',course_name:'',location:'',start_date:'',end_date:'',institute_name:''}],
        ProjectDetailsList:[{project_title:'',skills:'',description:''}],
        socialMediaList:[{network:'',user_name:'',url:''}],
        isValid:true
      }  
    },
  methods:{
    goBack(){
      this.$router.push('/')
    },
    validate () {
        this.$refs.form.validate()
        window.scrollTo(0,0)
    },
    getBasicDetails(data) {
      this.name=data.name
      this.email=data.email
      this.phone=data.phone
      this.image=data.image
      this.summary=data.summary
    },
    getLocationDetails(data) {
      this.locationList=data
    }, 
    getEducationDetails(data) {
      this.educationDetailsList=data
    },
    getWorkExperience(data){
      this.workExperienceList=data
    },
    getProjectDetails(data){
      this.ProjectDetailsList=data
    },
    getSkillDetails(data){  
      this.skill=data
    },
    getSocialMediaDetails(data){
      this.socialMediaList=data
    },
   
    async createResume() {
        const basicDetails = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        image:this.image,
        summary:this.summary,
        location_details:this.locationList,
       
        education_details:this.educationDetailsList,
       
        work_experience:this.workExperienceList,
       
        project_details:this.ProjectDetailsList,

        skills:this.skill,
       
        social_media:this.socialMediaList

        }
       
       await axios.post(`http://127.0.0.1:8000/new-resume`, basicDetails).then((res) =>{  
          console.log(res.data)
          if(res.data['data']==='inserted'){
            this.alert=true
            window.scrollTo(0,0)
          }
          else{
            this.alert=false
          } 
        }).catch((err) => {
          console.log(err)
        }) 
      },
      hide_alert: function (event) {
      window.setInterval(() => {
        this.alert = false;
        console.log("hide alert after 6 seconds");
      }, 6000)    
    },
    },
    mounted() {
    if(alert){
      this.hide_alert();
    }
  }
  }
</script>

<style>
.back-option{
  margin: 10px 1px 10px 20px;
}
.back-option a{
  font-size: 14px;
}
.sub-heading{
  padding-top: 7px;
  padding-bottom: 7px;
  color:#00897B;
}
.button{
  display:flex;
  justify-content: flex-end;
}
#save-button, #cancel-button{
  width: 90px;
  padding: 0;
  margin: 18px; 
}
#cancel-button{
  color:#0097A7;
}
#save-button{
  background-color: #0097A7;
  color: white;
}
#save-button:hover{
  background-color:#26C6DA;
}

</style>
  
