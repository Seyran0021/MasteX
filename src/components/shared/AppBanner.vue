<script>
import feather from 'feather-icons';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  name: 'Home',
  setup() {
    const { tm } = useI18n();
    const hi = computed(() => tm('hi'));
    const fullstack = computed(() => tm('fullstack'));
    const gar1 = computed(() => tm('gar1'));

    return {
      hi,
      fullstack,
      gar1,
    };
  },
  data: () => {
    return {
      theme: '',
    };
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem('theme') || 'light';
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        {{ hi }}
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ fullstack }}
      </p>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ gar1 }}
      </p>
      <!-- <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ gar2 }}
      </p> -->
    </div>
    <br />

    <!-- Banner right illustration -->
    <div
      class="w-full md:w-2/3 flex justify-center text-right float-right"
    >
      <img
        v-if="theme === 'light'"
        src="@/assets/images/developer-dark.png"
        alt="Developer"
      />
      <img
        v-else
        src="@/assets/images/developer-dark.png"
        alt="Developer"
      />
    </div>
  </section>
</template>

<style scoped></style>
