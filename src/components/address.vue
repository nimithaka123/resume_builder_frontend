<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">Location Details</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area">
              <v-col cols="12" sm="1">
                <v-panel-title class="input-area-label">Address</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="location.address" 
                  placeholder=" Add Address" 
                  clearable>
                </v-text-field>
              <!-- :value="name"  @input="$emit('update:name', $event.target.value)" -->
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="input-area">
              <v-col cols="12" sm="1">
                <v-panel-title class="input-area-label">Street</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="location.street"   
                  placeholder=" Add Street" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="1">
                <v-panel-title class="input-area-label">City</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="location.city"    
                  placeholder=" Add City"
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="1">
                <v-panel-title class="input-area-label">Country</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="country"
                  v-model="location.country"  
                  placeholder=" Add Country">    
                </v-select>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="1">
                <v-panel-title class="input-area-label">Pincode</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field 
                  v-model="location.pincode"    
                  placeholder=" Add City"
                  clearable>
                </v-text-field>
            </v-col>
            </v-row>  
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>


<script>
export default{
    name:"location",
    props:{
      location_details:Object
    },
    data: () => ({
    country: ['Canada','Japan','India', 'Indonesia','Thailand','UK', 'USA'],
    location:{
        address: '',
        street:'',
        city:'',
        country:'',
        pincode:'',
     },
  }), 
  watch:{
      location:{
        handler(val){
          console.log(">>>>>>>>>>>>>>dddd", val)
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
    .v-application--wrap{
        min-height: auto;
    }
</style>