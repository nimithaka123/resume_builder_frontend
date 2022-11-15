<template>
  <main>
  <div class="main-container">
    <div class="main-heading">
          <h2>Resumes</h2>
      </div>
      <v-divider></v-divider>
      <div class="search-area">
          <div class="search-bar">
          <v-text-field class="search-option"
            single-line
            outlined
            label="Search by name or email"
            prepend-inner-icon="mdi-magnify"
            v-model="query" 
            @keyup="getData"
          ></v-text-field>
          </div>
          <div class="add-new-resume" >
              <router-link to="/resume">+ Add new resume</router-link>
          </div>
      </div>
      <div class="list-table post-table" v-if="data.length == 0 || query===''">
          <v-simple-table  v-for="post in posts" :key="post.basic_details_id">
            <template v-slot:default>
              <tr>
                  <th class="first-column">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Applied on</th>
                  <th></th>
              </tr>
              <tr v-for="i in post" :key="i.basic_details_id" class="data" >
                      <td class="first-column">{{i.name}}</td>
                      <td>{{i.email}}</td>
                      <td>{{i.phone}}</td>
                      <td>{{i.applied_date}}</td>
                      <td>
                          <v-menu
                            bottom
                            left
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                dark
                                icon
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon color=#9E9E9E>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>
                            <v-list>
                              <router-link :to="`/edit/${i.basic_details_id}`"> 
                                <v-list-item class="kebab-menu">Edit</v-list-item>
                              </router-link> 
                                

                              <v-list-item class="kebab-menu" @click="deleteApplicant(i.basic_details_id)">
                                Delete
                              </v-list-item>
                            </v-list>
                          </v-menu>
                      </td>
              </tr>
            </template>     
          </v-simple-table>
      </div>
      <div class="list-table" v-else>
          <v-simple-table  v-for="post in data" :key="post.basic_details_id">
              <template v-slot:default>
                <tr>
                    <th class="first-column">Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Applied on</th>
                    <th></th>
                </tr>
                <tr v-for="i in post" :key="i.basic_details_id" class="data" >
                    <td class="first-column">{{i.name}}</td>
                    <td>{{i.email}}</td>
                    <td>{{i.phone}}</td>
                    <td>{{i.applied_date}}</td>
                    <td>
                      <v-menu
                        bottom
                        left
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                          >
                            <v-icon color=#9E9E9E>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                              <router-link :to="`/edit/${i.basic_details_id}`"> 
                                <v-list-item class="kebab-menu">Edit</v-list-item>
                              </router-link> 
                                

                              <v-list-item class="kebab-menu" @click="deleteApplicant(i.basic_details_id)">
                                Delete
                              </v-list-item>
                            </v-list>
                        
                      </v-menu>
                    </td>
                </tr>
              </template>
          </v-simple-table>
      </div>
  </div>   

  </main>   
</template>


<script>
import axios from 'axios'
export default{
  name:"Home",
  data() {
      return {
          posts: [],
          query : "",
          data : []
      }
  },
  methods : {
    async deleteApplicant(id){
    console.log('Deleting')
      await axios.delete(`http://127.0.0.1:8000/resume/${id}`)
      axios.get('http://127.0.0.1:8000/all-resume')
      .then((res)=>{
          this.posts = res.data
        })
      // .then((res) => console.log(res.data))
    },
      async getData(){
          await axios.get(`http://127.0.0.1:8000/resume/${this.query}`)
          .then((response)=>{
              this.data = response.data
              console.log(this.data)
          })
          .catch((error)=>{
              console.log('error:',error)
          })
      },
      showContent(){
          console.log(filteredContent)
      }
  },
  mounted(){
      axios.get('http://127.0.0.1:8000/all-resume')
      .then((res)=>{
          this.posts = res.data
          console.log('data:',res.data)
      })
      .catch(function(error){
          console.log('error:',error)
      })
  },
  }


</script>


<style scoped>
.search-area{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-option{
  margin: 22px 0px 0px 20px;
}
.add-new-resume a{
  margin-right: 19px;
  text-decoration: none;
  color: #28a99e;
}
th{
  background-color:#E0F2F1;
  text-align: left;
  height: 6vh;
  width: auto;
}
.first-column{
  padding-left: 26px;
}
.button{
  width: 80px;
}
</style>


