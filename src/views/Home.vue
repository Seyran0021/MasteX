<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  name: 'Home',
  components: {
    AppBanner,
    ProjectsGrid,
    Button,
  },
  setup() {
    const { tm } = useI18n();
    const companies = computed(() => tm('AboutMe'));

    return {
      companies,
    };
  },
};
</script>


<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8" />

    <!-- Projects -->
    <ProjectsGrid />

    <!-- Load more projects button -->
    <div class="mt-10 sm:mt-20 flex justify-center">
      <router-link
        to="/about"
        class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-custom-gray hover:bg-custom-gray-dark focus:ring-1 focus:ring-gray-700 text-white text-lg sm:text-xl duration-300"
        aria-label="More Projects"
      >
        <Button :title="$t('AboutMe')" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
