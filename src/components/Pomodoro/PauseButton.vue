<template>
	<div class="botones">
		<v-btn @click="pauseTimer" icon="mdi mdi-pause"></v-btn>
	</div>
</template>
<script>
export default {
	// Nombre del componente
	name: "PauseButton",
    methods: {
	pauseTimer() {
		this.$emit('pause');
	},
}
    
};
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.botones{
	display: flex;
}
</style>