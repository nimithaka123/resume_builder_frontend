<template>
  <v-row justify="center">
    <v-expansion-panels class="accordion">
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-heading">
          Skills
          <span class="red--text">*</span>
        </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div v-for="(item, index) in skill"
              :key="index">
              <v-row class="input-area" >
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Skill Name
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field  
                  v-model="item.skill_name" 
                  :rules="[required('Skill name')]"
                  label="Skill Name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider class="line"></v-divider>
            <v-row>
              <v-col cols="12" sm="2">
                <label class="input-area-label">
                  Skill Level
                  <span class="red--text">*</span>
                </label>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="items"
                  v-model="item.skill_level"
                  :rules="[required('Skill level')]"
                  label="Skill Level">    
                </v-select>
              </v-col>
              <v-col cols="12" sm="4">
                     <v-btn
                     icon >
                     <v-icon
                        color="blue"
                        @click="removeSkill(index)"
                      >
                        mdi-delete
                      </v-icon>
                     </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="2">
                <a class="add-or-remove" 
                  @click="addSkills" 
                  v-show="index == skill.length-1" > 
                    <label class="add-or-remove">Add Skill</label> 
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
    name:"SkillDetails",
    props:{
      skill_details:Array
    },
    data() {
      return {
        items: ['Beginner', 'Intermediate', 'Expert'],
    skill:[
      {
      skill_name: '',
      skill_level:'',
    }
  ],
  required(propertyType){
      return v => v && v.length >0 || `${propertyType} is required`
     }   
      }
    }, 
 methods:{
  addSkills() {
      this.skill.push({
        skill_name: "",
        skill_level: "",
      })
    },
    removeSkill(index) {
     this.skill.splice(index, 1)
     if (!this.skill.length) this.addSkills()
    },
 },
  watch:{
      skill:{
        handler(val) {
        this.$emit('skill', val)
        },
        deep:true
      },
},
mounted() {
  if(this.skill_details)
  this.skill=this.skill_details
}  
}
</script>

<style>
.row{
  align-items: center;
}
.add-or-remove{
  font-size: 15px;
  font-family: Roboto;
}
</style>
