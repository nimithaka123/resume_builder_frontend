<template>
    <main>
      <div class="back-option">
        <router-link to="/"> &lt Back to all resume list</router-link>
        <h4 class="sub-heading">Edit resume content</h4>
      </div>
      <div>
        <v-form v-model="valid">
          <basic_details v-if="post.basic_details" 
          :basic_details="post.basic_details[0]" 
          @basic="getBasicDetails" />  
          <location v-if="post.location_details" 
          :location_details="post.location_details[0]" 
          @location="getLocationDetails"/>
          <work_experience_details 
            v-if="post.work_experience_details" 
            :work_experience_details="post.work_experience_details[0]" 
            @experience="getWorkExperience"/>
          <education_details 
          v-if="post.education_details" 
          :education_details="post.education_details[0]"  
          @education="getEducationDetails"/>
          <project_details 
          v-if="post.project_details"  
          :project_details="post.project_details[0]" 
          @project="getProjectDetails" 
          />
          <skill_details v-if="post.skill_details" 
          :skill_details="post.skill_details[0]"
          @skill="getSkillDetails" 
          @add-accordion="adder(skill)" 
          @remove-accordion="remover(skill, index)"/>
          <social_media_details 
          v-if="post.social_media_details"  
          :social_media_details="post.social_media_details[0]"  
          @social_media="getSocialMediaDetails"/>
        
          <div class="button">
            <v-btn id="cancel-button">
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
    import basic_details from "@/components/basic_details.vue"
    import location from "@/components/address.vue"
    import education_details from "@/components/education_details.vue"
    import project_details from "@/components/project_details.vue"
    import work_experience_details from "@/components/work_experience_details.vue"
    import skill_details from "@/components/skill_details.vue"
    import social_media_details from "@/components/social_media_details.vue"
    import axios from 'axios'
  
    export default{
      name:"EditResume",
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
        post:'',
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
          education_start_date:new Date(),
          education_end_date:new Date(),
          organization:'',
          job_role:'',
          job_location:'',
          key_roles:'',
          location:'',
          title:'',
          skills:'',
          description:'',
          skill_name:'',
          skill_level:'',
          network:'',
          user_name:'',
          url:'',
          id: this.$route.params.id
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
      getWorkExperience(data){
        console.log(data);
        this.organization=data.organization
        this.job_role=data.job_role
        this.key_roles=data.key_roles
        this.job_location=data.job_location
        this.start_date=data.start_date
        this.end_date=data.end_date
      },
      getProjectDetails(data){
        this.project_title=data.project_title
        this.skills=data.skills
        this.description=data.description
      },
      getSkillDetails(data){
        this.skill_name=data.skill_name
        this.skill_level=data.skill_level
      },
      getSocialMediaDetails(data){
        this.network=data.network
        this.user_name=data.user_name
        this.url=data.url
  
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
          work_experience_details:[
            {
              organization:this.organization,
              job_role:this.job_role,
              key_roles:this.key_roles,
              job_location:this.job_location,
              start_date:this.start_date,
              end_date:this.end_date,
            }
          ],
          project_details:[
            {
              project_title:this.project_title,
              skills:this.skills,
              description:this.description
            }
          ],
          skill_details:[
            {
              skill_name:this.skill_name,
              skill_level:this.skill_level
            }
          ],
          social_media_details:[
            {
              network:this.network,
              user_name:this.user_name,
              url:this.url
            }
          ]
  
          }
          console.log(basicDetails)
          await axios.put(`http://127.0.0.1:8000/update-individual-resume/${this.id}`, basicDetails).then((res) =>{
            this.alert=true
          }).catch((err) => {
            console.log(err)
          })
          
        },
      },
      mounted(){
      axios.get(`http://127.0.0.1:8000/individual-resume/${this.id}`)
      .then((res)=>{
          this.post = res.data
      })
      .catch(function(error){
          console.log('error:',error)
      })
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
    
  