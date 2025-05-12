<script>
import feather from 'feather-icons';
// import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';

export default {
  components: { ProjectSingle },

  setup() {
    const { t, tm } = useI18n();

    const searchprojs = computed(() => tm('searchprojs'));
    const searchinput = computed(() => tm('searchinput'));
    const projectsHeading = computed(() => t('projectsHeading'));

    const projectsList = ref(projects);
    const selectedCategory = ref('');
    const searchProject = ref('');

    const filteredProjects = computed(() => {
      if (selectedCategory.value) {
        return projectsList.value.filter(
          (item) => item.category === selectedCategory.value
        );
      } else if (searchProject.value) {
        const project = new RegExp(searchProject.value, 'i');
        return projectsList.value.filter((el) =>
          t(el.title).match(project)
        );
      }
      return projectsList.value;
    });

    onMounted(() => {
      feather.replace();
    });

    return {
      projectsList,
      projectsHeading,
      selectedCategory,
      searchProject,
      searchprojs,
      searchinput,
      filteredProjects,
    };
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        <!-- {{ projectsHeading }} -->
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        <!-- {{ searchprojs }} -->
      </h3>
      <div
        class="flex flex-wrap justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <!-- <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span> -->
          <!-- <input
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            :placeholder="searchinput"
            aria-label="Name"
          /> -->
        </div>
        <!-- <ProjectsFilter @filter="selectedCategory = $event" /> -->
      </div>
    </div>

    <!-- Projects grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
    >
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
