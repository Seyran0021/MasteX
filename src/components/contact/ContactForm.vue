<script>
import Button from '../reusable/Button.vue';
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';

export default {
  components: {
    Button,
  },
  setup() {
    const { tm } = useI18n();
    const contactform = computed(() => tm('contactform'));
    const fullname = computed(() => tm('fullname'));
    const yourname = computed(() => tm('yourname'));
    const email = computed(() => tm('email'));
    const Message = computed(() => tm('Message'));
    const send = computed(() => tm('send'));
    const name = ref('');
    const emailInput = ref('');
    const message = ref('');

    return {
      contactform,
      fullname,
      yourname,
      email,
      Message,
      send,
      name,
      emailInput,
      message,
    };
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        {{ contactform }}
      </p>
      <form
        action="https://formspree.io/f/mnndpyek"
        method="POST"
        class="font-general-regular space-y-7"
      >
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >{{ fullname }}</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required
            :placeholder="yourname"
            v-model="name"
            aria-label="Name"
          />
        </div>

        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >{{ email }}</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="email"
            required
            :placeholder="email"
            v-model="emailInput"
            aria-label="Email"
          />
        </div>

        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >{{ Message }}</label
          >
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            required
            v-model="message"
            aria-label="Message"
          ></textarea>
        </div>

        <div>
          <Button
            :title="$t('send')"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
