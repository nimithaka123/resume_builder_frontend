<template>
  <v-row justify="center">
    <v-expansion-panels class="basic-accordion" v-model="panel" focusable>
      <v-expansion-panel expand>
        <v-expansion-panel-header class="accordion-heading">Basic Details</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Name</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.name" 
                  :value="name"
                  :rules="nameRules"
                  placeholder=" Add Name" 
                  @keyup="firstLetterCapitalize" clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Email</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.email"
                  :rules="emailRules"   
                  placeholder=" Add Email" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Phone</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="basic.phone" 
                  :rules="phoneRules"   
                  placeholder=" Add Phone"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Image</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="basic.image"
                  placeholder=" Add Image URL"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Summary</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-textarea
                  auto-grow
                  v-model="basic.summary"
                  placeholder=" Add Summary"
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
    name:"basic_details",
    props:{
      basic_details:Object
    },
   data(){
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
                  v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
      phoneRules: [
                    v => !!v || 'Phone no. is required',
                    v => /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v) || 'Enter valid phone no.'
                  ],
    }
   },

   watch:{
      basic:{
        handler(val){
          console.log(">>>>>>>>>>>>>>dddd", val)
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
   mounted(){
    if(this.basic_details)
    this.basic=this.basic_details
   }

    }
</script>

<style>
.basic-accordion{
  margin:5px 30px 12px 34px;
}
.v-expansion-panel-header {
  font-size: 16px;
  font-family:sans-serif;
  font-weight:bold;
}

</style>