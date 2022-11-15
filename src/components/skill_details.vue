<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">Skills</v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row class="input-area" >
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Skill Name</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  :value="skill.skill_name"
                  v-model="skill.skill_name" 
                  placeholder=" Add Skill Name" 
                  clearable>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <v-panel-title class="input-area-label">Skill Level</v-panel-title>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="items"
                  v-model="skill.skill_level"
                  placeholder=" Add Skill Level">    
                </v-select>
              </v-col>
            </v-row>
          </v-expansion-panel-content>   
      </v-expansion-panel>
    </v-expansion-panels>
</v-row>
</template>

<script>
export default{
    name:"skill_details",
    props:{
      skill_details:Object
    },
    data: () => ({
      items: ['Beginner', 'Intermediate', 'Expert'],
      skill:{
        skill_name: '',
        skill_level:'',
     },
      
  }), 

  watch:{
      skill:{
        handler(val){
        this.$emit('skill', val)
        },
        deep:true

      },
},
mounted(){
  if(this.skill_details)
  this.skill=this.skill_details
}  
}

</script>

<style>
.row{
  align-items: center;
}
</style>
