<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Armenia, Yerevan',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'szhamkochyan1@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+374 77 431177',
					name2: '+374 93 549472',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<ContactForm />

		<ContactDetails :contacts="contacts" />
	</div>
</template>
