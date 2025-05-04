<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  props: ['contacts'],
  setup() {
    const { tm } = useI18n();
    const condetails = computed(() => tm('condetails'));

    return {
      condetails,
    };
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
        {{ condetails }}
      </h2>
      <ul class="font-general-regular">
        <li
          class="flex items-center mb-4"
          v-for="contact in contacts"
          :key="contact.id"
        >
          <i
            :data-feather="contact.icon"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
          ></i>
          <div class="flex flex-col">
            <a
              href="#"
              class="block text-lg text-ternary-dark dark:text-ternary-light mb-2"
              :class="contact.icon === 'mail' || contact.icon === 'phone' ? 'hover:underline cursor-pointer' : ''"
              aria-label="Website and Phone"
            >
              {{ contact.name }}
            </a>
            <a
              v-if="contact.name2"
              href="#"
              class="block text-lg text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
              aria-label="Phone"
            >
              {{ contact.name2 }}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
