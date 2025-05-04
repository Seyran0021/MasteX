<script>
import AboutClientSingle from './AboutClientSingle.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  components: {
    AboutClientSingle,
  },
  setup() {
    const { tm } = useI18n();

    const companies = computed(() => tm('aboutmetext.companies'));
    const clientsHeading = computed(() => companies.value[0]);

    const clients = [
      {
        id: 2,
        title: 'Sony',
        img: require('@/assets/images/brands/fulllearning.png'),
      },
      {
        id: 6,
        title: 'SAMSUNG',
        img: require('@/assets/images/brands/ekey.png'),
      },
      {
        id: 7,
        title: 'CANON',
        img: require('@/assets/images/brands/profit.png'),
      },
      {
        id: 8,
        title: 'PUMA',
        img: require('@/assets/images/brands/upwork.png'),
      },
    ];

    return {
      companies,
      clientsHeading,
      clients,
    };
  },
};
</script>


<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
