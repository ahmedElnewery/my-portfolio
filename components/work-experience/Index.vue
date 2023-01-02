

<script setup>
import {experiences} from "./../../constants/constants";
import {format} from "date-fns";
import BriefCase from './../icons/BriefCase.vue'
const state = reactive({
  selectedCompanyId: "1",
});
// computed
const companies = computed(() => {
  return experiences.map((work) => ({
    id: work.id,
    companyName: work.company,
  }));
});

const showTabContent = computed(() => {
  return state.selectedCompanyId === selectedWorkExperience.value.id;
});

const selectedWorkExperience = computed(() => {
  return experiences.find(
    (work) => work.id === state.selectedCompanyId
  );
});
const selectedWorkExperienceStartDate = () => {
  return format(new Date(selectedWorkExperience.value.startDate), "MMMM yyyy");
}
const selectedWorkExperienceEndDate= computed(()=>{
  if (selectedWorkExperience.value.endDate === null){
    return "Present"
  } else {
    const endDate = new Date(selectedWorkExperience.value.endDate)
    const now = new Date()
  
    return format(endDate,"MMMM yyyy")
  }
})

// methods
const updateSelectedCompanyId = (id) => {
  state.selectedCompanyId = id;
};
</script>
<template>
  <section class="section " id="experience">
    <BaseTitle :icon="BriefCase">Where I’ve Worked </BaseTitle>
    <div class="flex gap-x-8">
      <div>
        <ul class="font-mono flex flex-col">
          <li
            :class="['tab', { '--active': state.selectedCompanyId === company.id }]"
            v-for="company in companies"
            :key="company.id"
            :tab-id="company.id"
            @click="updateSelectedCompanyId(company.id)"
          >
            {{ company.companyName }}
          </li>
        </ul>
      </div>

      <div>
        <Transition name="fade" mode="out-in">
          <div v-if="showTabContent" :key="state.selectedCompanyId">
            <p class="text-xl font-medium">
              <span class="text-lightest-slate">{{
                selectedWorkExperience.title
              }}</span>
              <a class="text-green cursor-pointer">
                @{{ selectedWorkExperience.company }}</a
              >
            </p>
            <p class="text-light-slate text-sm font-mono mb-6">
              <span>{{ selectedWorkExperienceStartDate() }}</span> -
              <span>{{ selectedWorkExperienceEndDate }}</span>
            </p>
            <ul>
              <li
                class="
                  mb-4
                  text-base
                  relative
                  pl-6
                  before:left-0
                  before:text-green
                  before:content-['▹']
                  before:absolute
                "
                v-for="(achieve, i) in selectedWorkExperience.achievements"
                :key="i"
              >
                {{ achieve }}
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
