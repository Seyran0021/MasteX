<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: 'MasterX',
      author: 'Seyran Zhamkochyan',
    };
  },
  setup() {
    const { tm } = useI18n();
    const byme = computed(() => tm('byme'));

    return {
      byme,
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://www.masterx.am/"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ projectName }}
      </a>
      . {{ byme }}
      <a
        href="https://www.linkedin.com/in/seyran-zhamkochyan-226563305/"
        target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
