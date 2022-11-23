<template>
  <main>
    <!-- heading -->
  <div class="main-container">
    <div class="main-heading">
          <h3>Resumes</h3>
      </div>
      <v-divider></v-divider>
      <!-- alert -->
      <v-alert v-model="alert"
      dense
      text
      type="success"
    >
      Successfully deleted
    </v-alert>
      <!-- Search and add new resume -->
      <div class="search-area">
          <div class="search-bar">
            <v-text-field class="search-option"
              dense
              single-line
              outlined
              label="Search by name or email"
              prepend-inner-icon="mdi-magnify"
              v-model="searchItem" 
              @keyup="getData"
            ></v-text-field>
          </div>
          <div class="add-new-resume" >
              <router-link to="/resume">+ Add new resume</router-link>
          </div>
      </div>
      <template>
        <Confirmation :dialog="dialog" @delete-id="deleteApplicant(delete_id)"/>
      </template>   
      <!-- Table displaying get all resume -->
      <div class="list-table" v-if="searchItem===''" >
          <v-simple-table v-for="item in basicData" :key="item.basic_details_id" >
            <template v-slot:default>
              <tr>
                  <th class="first-column">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Applied on</th>
                  <th></th>
              </tr>
              <tr v-for="i in item" :key="i.basic_details_id" class="data" >
                      <td class="first-column">{{i.name}}</td>
                      <td>{{i.email}}</td>
                      <td>{{i.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}}</td>
                      <td>{{i.applied_date.split(".")[0]}}</td>
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
                            <v-list dense >
                              <router-link :to="`/edit/${i.basic_details_id}`"> 
                                <v-list-item class="kebab-menu">Edit</v-list-item>
                              </router-link> 
                              <v-list-item class="kebab-menu" 
                                @click="getConfirmation(i.basic_details_id)">
                                Delete
                              </v-list-item>
                            </v-list>
                          </v-menu>
                      </td>
                </tr>
            </template>     
          </v-simple-table>    
      </div>
      <!-- Result for search data -->
      <div class="list-table" v-else>
          <v-simple-table  v-for="item in data" :key="item.basic_details_id">
              <template v-slot:default>
                <tr>
                    <th class="first-column">Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Applied on</th>
                    <th></th>
                </tr>
                <tr v-for="i in item" :key="i.basic_details_id" class="data" >
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
                              <v-list-item class="kebab-menu" 
                                @click="getConfirmation(i.basic_details_id)" >
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
import Confirmation from '@/components/Confirmation.vue'
import axios from 'axios'
export default{
  name:"Home",
  components:{
        Confirmation,
  },
  data() {
      return {
          dialog:false,
          basicData: [],
          searchItem : "",
          data : [],
          delete_id:0,
          alert:false
      }
  },
  methods : {
    // Delete a resume
    async deleteApplicant(id){
      await axios.delete(`http://127.0.0.1:8000/resume/${id}`)
      await axios.get('http://127.0.0.1:8000/all-resume')
      .then((res)=>{
          this.basicData = res.data
        })
        this.alert=true
        this.dialog=false
    },
    // Search a resume
      async getData(){
          await axios.get(`http://127.0.0.1:8000/resume/${this.searchItem}`)
          .then((response)=>{
              this.data = response.data
          })
      },
      getConfirmation(id){
        this.dialog=true
        this.delete_id=id
      },
      hide_alert: function (event) {
      window.setInterval(() => {
        this.alert = false;
      }, 5000)    
    }
  },
  mounted(){
      axios.get('http://127.0.0.1:8000/all-resume')
      .then((res)=>{
          this.basicData = res.data
          console.log('data:',res.data)
      })
      
      if(alert){
      this.hide_alert();
    }
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
.search-bar{
  width: 28%;
}
.add-new-resume a{
  margin-right: 19px;
  font-size: 15px;
  text-decoration: none;
  color: #28a99e;
}
.list-table{
  margin: 15px 19px auto 20px;
}

th{
  background-color:#26A69A;
  text-align: left;
  height: 6vh;
  width: auto;
}
.first-column{
  padding-left: 16px;
}

tr{
  height: 50px;
}
tr:hover {
          background-color:  #F4F6F8;
}
.kebab-menu:hover{
  background-color:#F9FAFB;
}

@media screen and (max-width: 600px) {
  .search-bar{
    width: 60%;
  }

  .add-new-resume a{
    font-size: 12px;
  }
  .list-table{
    margin: 10px 10px auto 10px;
  }

  th{
    background-color:#26A69A;
    text-align: left;
    border: 2px solid #26A69A;
    height: 4vh;
    width: auto;
    font-size: 10px;
  }

  tr{
    height: 50px;
    font-size: 8px;
  }
}
</style>


