<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  props: {
    select: {
      type: String,
      default: 'projects',
    },
  },

  setup() {
    const { t } = useI18n();
    const selectOptions = computed(() => [
      { key: 'webApplication', label: t('webApplication') },
      { key: 'shoppingInterface', label: t('shoppingInterface') },
      { key: 'entertainmentApp', label: t('entertainmentApp') },
    ]);

    const allProjectsLabel = computed(() => t('allprojects'));

    return {
      t,
      selectOptions,
      allProjectsLabel,
    };
  },
};
</script>

<template>
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  >
    <option value=""> {{ allProjectsLabel }} </option>
    <option
      v-for="option in selectOptions"
      :key="option.key"
      :value="option.key"
      class="sm:text-md"
    >
      {{ option.label }}
    </option>
  </select>
</template>
