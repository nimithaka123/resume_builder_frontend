<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" >
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">
          Location Details
          <span class="red--text">*</span>
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in location" :key="index">
              <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Address Line 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.address" 
                  :rules="[required('Address line')]"
                  label="Address Line">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Street 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.street"
                  :rules="[required('Street')]"   
                  label="Street">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  City 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="item.city" 
                  :rules="[required('City')]"   
                  label="City">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Country 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="country"
                  v-model="item.country" 
                  :rules="[required('Country')]" 
                  label="Country">    
                </v-select>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Pincode 
                  <span class="red--text">*</span> 
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="item.pincode" 
                  :rules="[required('Pincode')]"   
                  label="Pincode">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                     <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeLocation(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row>
            <v-row>
             <v-col cols="12" sm="2">
              <a class="add-or-remove" 
                @click="addLocation" 
                v-show="index == location.length-1" > 
                  <label class="add-or-remove">
                    Add Location
                  </label> 
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
    name:"LocationDetails",
    props:{
      location_details:Array
    },
    data() {
      return{
        country: ['Canada','Japan','India', 'Indonesia','Thailand','UK', 'USA'],
    location:[
    {
        address: '',
        street:'',
        city:'',
        country:'',
        pincode:'', 
    }
    ],
     required(propertyType){
      return v => v && v.length >0 || `${propertyType} is required`
     }
      }
    },
  methods:{
    addLocation() {
        this.location.push({
          address:"",
          street:"",
          city:"",
          country:"",
          pincode:"",
        })
      },
      removeLocation(index) {
      this.location.splice(index, 1)
      if (!this.location.length) this.addLocation()
    },

  },
  watch:{
      location:{
        handler(val) {
          this.$emit('location', val)
        },
        deep:true

      },
   },
   mounted(){
    if(this.location_details)
    this.location=this.location_details
   }
}
</script>

<style>
   
</style>
