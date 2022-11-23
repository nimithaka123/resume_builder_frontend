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
      <h4 class="sub-heading">Edit resume content</h4>
    </div>
    <div>
    <!-- Resume form -->
      <v-form>
        <BasicDetails v-if="post.basic_details" 
        :basic_details="post.basic_details[0]" 
        @basic="getBasicDetails" />  
        <LocationDetails v-if="post.location_details" 
        :location_details="post.location_details" 
        @location="getLocationDetails"/>
        <WorkExperienceDetails 
          v-if="post.work_experience_details" 
          :work_experience_details="post.work_experience_details" 
          @experience="getWorkExperience"/>
        <EducationDetails
        v-if="post.education_details"  
        :education_details="post.education_details"  
        @education="getEducationDetails"/>
        <ProjectDetails  
        v-if="post.project_details" 
        :project_details="post.project_details" 
        @project="getProjectDetails" 
        />
        <SkillDetails
        v-if="post.skill_details" 
        :skill_details="post.skill_details"
        @skill="getSkillDetails" 
        />
        <SocialMediaDetails 
        v-if="post.social_media_details" 
        :social_media_details="post.social_media_details"  
        @social_media="getSocialMediaDetails"/>
      <!-- Buttons -->
        <div class="button">
          <v-btn id="cancel-button" @click="goBack">
            Cancel
          </v-btn>
          <v-btn id="save-button" @click="editResume">
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
    name:"EditResume",
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
      post:'',
        name:'',
        email: '',
        phone:'',
        image:'',
        summary:'',
        alert:false,
        id: this.$route.params.id,
        skill:[{skill_name:'',skill_level:''}],
        locationList:[{address:'',street:'',country:'',pincode:'',city:''}],
        educationDetailsList:[{qualification:'',course_name:'',location:'',start_date:'',end_date:'',institute_name:''}],
        workExperienceList:[{organization:'',job_role:'',job_location:'',key_roles:'',start_date:'',end_date:''}],
        projectDetailsList:[{project_title:'',skills:'',description:''}],
        socialMediaList:[{network:'',user_name:'',url:''}]
      }
    },
  methods:{
    goBack(){
      this.$router.push('/')
    },
    getBasicDetails(data) {
      this.name=data.name
      this.email=data.email
      this.phone=data.phone
      this.image=data.image
      this.summary=data.summary
      console.log(this.email);
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
      this.projectDetailsList=data
    },
    getSkillDetails(data){
      this.skill=data
    },
    getSocialMediaDetails(data){
      this.socialMediaList=data
    },
    async editResume() {
        console.log("Hello")
        const basicDetails = {
          basic_details:[{
          name: this.name,
          email: this.email,
          phone: this.phone,
          image:this.image,
          summary:this.summary,
          }],
       
        location_details:this.locationList,
       
        education_details:this.educationDetailsList,
       
        work_experience_details:this.workExperienceList,
        
        project_details:this.projectDetailsList,
        skill_details:this.skill,
       
        social_media_details:this.socialMediaList
        }
        console.log(basicDetails)
        await axios.put(`http://127.0.0.1:8000/update-individual-resume/${this.id}`, basicDetails).then((res) =>{
          this.alert=true
          window.scrollTo(0,0)
        }).catch((err) => {
          console.log(err)
        })   
      },
      hide_alert: function (event) {
      console.log('Hide')
      window.setInterval(() => {
        this.alert = false;
      }, 5000)    
    }
    },
    mounted(){
    axios.get(`http://127.0.0.1:8000/individual-resume/${this.id}`)
    .then((res)=>{
        this.post = res.data
    })
    .catch(function(error){
        console.log('error:',error)
    })
    if(alert){
      this.hide_alert();
  }    
},
  
  }
</script>

<style>
.back-option{
  margin: 10px 1px 10px 20px;
}
.sub-heading{
  padding-top: 7px;
  padding-bottom: 7px;
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
#save-button{
  background-color: #0097A7;
}
#save-button:hover{
  background-color:#26C6DA;
}
</style>
  