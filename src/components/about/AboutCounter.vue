<script>
import counter from 'vue3-autocounter';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
export default {
  components: {
    counter,
  },
  setup() {
    const { tm } = useI18n();
    const experienceTitle = computed(() => tm('years'));
    const feedbackTitle = computed(() => tm('feedback'));
    const projectsTitle = computed(() => tm('complprojs'));

    return {
      experienceTitle,
      feedbackTitle,
      projectsTitle,
    };
  },
};
</script>

<template>
  <div
    class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"
  >
    <!-- About me counters -->
    <div
      class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
    >
      <!-- Years of experience counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="2"
          :duration="2"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
          aria-label="About Status Counter"
        />
        <span
          class="block text-md text-ternary-dark dark:text-ternary-light"
        >
          {{ experienceTitle }}
        </span>
      </div>

      <!-- GitHub stars counter -->
      <!-- <div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="20"
					:duration="1"
					suffix="k+"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ githubTitle }}</span
				>
			</div> -->

      <!-- Positive feedback counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="98"
          :duration="2"
          suffix="%"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span
          class="block text-md text-ternary-dark dark:text-ternary-light"
        >
          {{ feedbackTitle }}
        </span>
      </div>

      <!-- Projects completed counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="18"
          :duration="2"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span
          class="block text-md text-ternary-dark dark:text-ternary-light"
        >
          {{ projectsTitle }}
        </span>
      </div>
    </div>
  </div>
</template>
