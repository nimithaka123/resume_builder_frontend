<template>
  <v-row justify="center">
    <v-expansion-panels class="basic-accordion" v-model="panel" >
      <v-expansion-panel expand>
        <v-expansion-panel-header class="accordion-heading">
          Basic Details
          <span class="red--text">*</span>
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Name 
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.name" 
                  :rules="nameRules"
                  label="Name" 
                  @keyup="firstLetterCapitalize" 
                  >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  E-mail 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.email"
                  :rules="emailRules"   
                  label="E-mail">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Phone 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="basic.phone" 
                  :rules="phoneRules"   
                  label="Phone">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Image
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.image"
                  label="Image URL">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Summary
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-textarea
                  auto-grow
                  v-model="basic.summary"
                  :rules="summaryRules"
                  :counter="500"
                  label="Summary"
                  rows="5"
                  row-height="20">
                </v-textarea>
            </v-col>
            </v-row>  
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>

<script>
export default{
    name:"BasicDetails",
    props:{
      basic_details:Object
    },
   data() {
    return{
      panel:0,
      basic:{
        name:'',
        email:'',
        phone:'',
        summary:'',
        image:''
      },
      nameRules: [
                  v => !!v || 'Name is required',
                  v => (v && v.length > 3) || 'Name must be greater than 3 characters',
                  ],
      emailRules: [
                  v => !!v || 'E-mail is required',
                  v => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'E-mail must be valid',
                ],
      phoneRules: [
                    v => !!v || 'Phone no. is required',
                    v => /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v) || 'Enter valid phone no.'
                  ],
      summaryRules: [
                  v => v.length <= 500 || 'Summary must be less than 500 characters',
      ]
    }
   },

   watch:{
      basic:{
        handler(val){
          this.$emit('basic', val)
        },
        deep:true
      },
   },
   methods: {
    firstLetterCapitalize(){
      if(this.basic.name[0].toLowerCase())
        this.basic.name=this.basic.name[0].toUpperCase()+this.basic.name.slice(1)
    }
   },
   mounted() {
    if(this.basic_details)
    this.basic=this.basic_details
   }

    }
</script>

<style>
.basic-accordion{
  margin:5px 30px 12px 32px;
}
.v-expansion-panel-header {
  font-size: 1.07rem;
  font-family:Roboto;
  font-weight:450;
}
</style>