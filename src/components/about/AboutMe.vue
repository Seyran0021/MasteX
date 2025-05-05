<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { tm } = useI18n();
const bios = computed(() => tm('aboutmetext.bios'));

</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="@/assets/images/profile.webp"
        class="rounded-xl w-96"
        alt=""
      />
    </div>

    <!-- About details -->
   <div class="w-full  sm:w-3/4 text-left">
      <p
        v-for="(bio, index) in bios"
        :key="index"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio }}
      </p>
    </div>
  </div>
</template>
