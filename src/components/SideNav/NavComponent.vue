<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer
				v-model="drawer"
				:rail="rail"
				permanent
				@click="rail = false"
			>
				<v-list-item
					prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SekQRYJSR5MFeGNhAfO2A9k6hxcZbB_XCA&usqp=CAU"
					title="Study Room"
					nav
				>
					<template v-slot:append>
						<v-btn
							variant="text"
							icon="mdi-chevron-left"
							@click.stop="rail = !rail"
						></v-btn>
					</template>
				</v-list-item>

				<v-flex class="mt-4 mb-3"> </v-flex>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item
						prepend-icon="mdi mdi-list-status"
						title="To-Do"
						value="To-Do"
						data-toggle="modal"
						data-target="#exampleModalCenter"
					>
					</v-list-item>
					<v-list-item
						prepend-icon="mdi mdi-spotify"
						title="Musica"
						value="Musica"
						data-toggle="modal"
						data-target="#modalMusica"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi mdi-information"
						title="Acerca"
						value="users"
						data-toggle="modal"
						data-target="#modalAcerca"
					>
					</v-list-item>
				</v-list>
				<BackGround></BackGround>
			</v-navigation-drawer>
			<!-- <v-main style="height: 250px"></v-main> -->

			<MusicCom v-if="selected === 'Musica'" />
		</v-layout>
	</v-card>
</template>

<script>
import MusicCom from "../Music/MusicCom.vue";


export default {
	name: "NavComponent",
	data() {
		return {
			components: {
				
				MusicCom,
			},
			drawer: true,
			items: [
				{ title: "Musica", icon: "mdi-home-city" },
				{ title: "My Account", icon: "mdi-account" },
				{ title: "Users", icon: "mdi-account-group-outline" },
				{ title: "Nota", icon: "mdi-account-group-outline" },
			],
			rail: true,
			selected: null,
		};
	},
};
</script>
