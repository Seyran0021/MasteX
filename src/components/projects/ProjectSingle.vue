<script>
import { useI18n } from 'vue-i18n';

export default {
  props: ['project'],
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<template>
  <div
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="t(project.title)"
        class="rounded-t-xl border-none object-cover w-full h-full"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ t(project.title) }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
      >
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
