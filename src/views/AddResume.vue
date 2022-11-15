<template>
  <main>
    <div class="back-option">
      <router-link to="/"> &lt Back to all resume list</router-link>
      <h4 class="sub-heading">Create resume content</h4>
    </div>
    <div>
      <v-form v-model="valid">
        <basic_details
        @basic="getBasicDetails"
        />  
        <location @location="getLocationDetails"/>

          <work_experience_details @experience="getWorkExperience"
          :work_experience="item"/>

        
          <education_details @education="getEducationDetails"/>


          <project_details @project="getProjectDetails"/>
       
    
        <skill_details 
        @skill="getSkillDetails"/> 

        <social_media_details @social_media="getSocialMediaDetails"/>
    
        <div class="button">
          <v-btn id="cancel-button">
            Cancel
          </v-btn>
          <v-btn id="save-button" @click="createResume">
            Save
          </v-btn>
        </div>
      </v-form>
    </div>
  </main>
  </template>
  
  <script>
  import basic_details from "@/components/basic_details.vue"
  import location from "@/components/address.vue"
  import education_details from "@/components/education_details.vue"
  import project_details from "@/components/project_details.vue"
  import work_experience_details from "@/components/work_experience_details.vue"
  import skill_details from "@/components/skill_details.vue"
  import social_media_details from "@/components/social_media_details.vue"
  import axios from 'axios'

  export default{
    name:"AddResume",
    components:{
      basic_details,
      location,
      education_details,
      project_details,
      work_experience_details,
      skill_details,
      social_media_details,
    },
    data() {
    return{
        name:'',
        email: '',
        phone:'',
        image:'',
        summary:'',
        address:'',
        street:'',
        city:'',
        country:'',
        pincode:'',
        qualification:'',
        institute_name:'',
        course_name:'',
        start_date:new Date(),
        end_date: new Date(),
        education_start_date:'',
        education_end_date:'',
        organization:'',
        job_role:'',
        job_location:'',
        key_roles:'',
        location:'',
        project_title:'',
        skills:'',
        description:'',
        skill_name:'',
        skill_level:'',
        network:'',
        user_name:'',
        url:'',
        // skill:[{skill_name:'',skill_level:''},],
        // education:[{qualification:'',course_name:'',institute_name:'',location:'',education_start_date:'',education_end_date:''}],
        // work_experience:[{organization:'',job_role:'',key_roles:'',job_location:'',start_date:'',end_date:''}],
        // project:[{project_title:'',skills:'',description:''}],
        // social_media:[{network:'',user_name:'',url:''}]
      }
      

    },
  methods:{
    getBasicDetails(data) {
      this.name=data.name
      this.email=data.email
      this.phone=data.phone
      this.image=data.image
      this.summary=data.summary
      console.log(this.email);
    },
    getLocationDetails(data) {
      this.address=data.address
      this.city=data.city
      this.street=data.street
      this.country=data.country
      this.pincode=data.pincode
    }, 
    getEducationDetails(data) {
      this.qualification=data.qualification
      this.institute_name=data.institute_name
      this.location=data.location
      this.course_name=data.course_name
      this.education_start_date=data.start_date
      this.education_end_date=data.end_date
    },
    getWorkExperience(data, index){
      this.organization=data.organization
      this.job_role=data.job_role
      this.key_roles=data.key_roles
      this.job_location=data.job_location
      this.start_date=data.start_date
      this.end_date=data.end_date
      // this.work_experience[index]=data

    },
    getProjectDetails(data){
      this.project_title=data.project_title
      this.skills=data.skills
      this.description=data.description
    },
    getSkillDetails(data){
      // let newData = []
      // newData.push(data)
      // console.log(newData)
      this.skill_name=data.skill_name
      this.skill_level=data.skill_level   
    },
    getSocialMediaDetails(data){
      this.network=data.network
      this.user_name=data.user_name
      this.url=data.url

    },
    async createResume() {
        console.log("Hello")
        const basicDetails = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        image:this.image,
        summary:this.summary,
        location_details:[
          {
            address: this.address,
            city: this.city,
            street: this.street,
            country:this.country,
            pincode:this.pincode
          }
        ],
        education_details:[
          {
            qualification:this.qualification,
            institute_name:this.institute_name,
            location:this.location,
            course_name:this.course_name,
            start_date:this.education_start_date,
            end_date:this.education_end_date
          },
        ],
        work_experience:[
          {
            organization:this.organization,
            job_role:this.job_role,
            key_roles:this.key_roles,
            job_location:this.job_location,
            start_date:this.start_date,
            end_date:this.end_date,
          }
        ],
        // work_experience:this.work_experience,
        
        project_details:[
          {
            project_title:this.project_title,
            skills:this.skills,
            description:this.description
          }
        ],
        skills:[
          {
            skill_name:this.skill_name,
            skill_level:this.skill_level
          }
        ],
        // skills:this.skill,
        social_media:[
          {
            network:this.network,
            user_name:this.user_name,
            url:this.url
          }
        ]

        }
        console.log(basicDetails)
        await axios.post(`http://127.0.0.1:8000/new-resume`, basicDetails).then((res) =>{
          
          this.alert=true
        }).catch((err) => {
          console.log(err)
        })
        
      }, 
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
  
