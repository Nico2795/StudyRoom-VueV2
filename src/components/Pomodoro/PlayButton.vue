<template>
	<div class="botones">
		<v-btn class="iconos" @click="startTimer" icon="mdi mdi-play"></v-btn>
		
	</div>
</template>
<script>


export default {
	// Nombre del componente
	components:{
	},
	name: "StartButton",
	data(){
	},
    methods: {
	startTimer() {
		this.$emit('start');
	},
}
    
};
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.botones{
	display: flex;
margin: 10px;
}

.iconos{
	width: 200px;
}

</style>