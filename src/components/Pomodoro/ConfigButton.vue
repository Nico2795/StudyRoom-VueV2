<template>
	<div class="botones">
		<v-btn  @click ="showSettingsModal" icon="mdi mdi-timer-settings"></v-btn>
	</div>
</template>
<script>
export default {
	// Nombre del componente
	name: "ConfigButton",
    methods: {
		showSettingsModal() {
			// Aquí debes emitir un evento que notifique a la instancia padre
			// que el componente SettingsComponent debe ser mostrado
			this.$emit("showSettings");
		},
	},
}
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.botones{
	display: flex;
}
</style>