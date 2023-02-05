<template>
	<div class="componentes">
		<div class="texto">
			<h4 for="work-time">Tiempo de trabajo:</h4>
			<input type="number" id="work-time" v-model="workTime" />
			<br />
			<br />
			<h4 for="rest-time">Tiempo de descanso:</h4>
			<input type="number" id="rest-time" v-model="restDuration" />
			<br />
		</div>
	</div>
	<div class="botones">
		<v-btn @click="handleSave">Guardar</v-btn>
		<v-btn @click="$emit('hideSettings')">Volver</v-btn>
	</div>
</template>
<script>
export default {
	name: "SettingsComponent",
	data() {
		return {
			workTime: localStorage.getItem("workTime") || 25,
			restDuration: localStorage.getItem("restDuration") || 5,
		};
	},
	methods: {
		handleSave() {
			localStorage.setItem("workTime", this.workTime);
			localStorage.setItem("restDuration", this.restDuration);
			localStorage.setItem("timeLeft", this.timeLeft);
			this.$emit("save", {
				workTime: this.workTime,
				restDuration: this.restDuration,
				timeLeft: this.timeLeft,
			});
		},
	},
};
</script>

<style scoped>
.botones {
	margin-top: 10px;
	margin-left: 20px;
	gap: 50px;
}

.componentes {
	margin-top: 0px;
border: solid 15px;
	width: 340px;
	height: 344px;
	border-radius: 200px;
}

.texto {
	margin-top: 60px;
	gap: 50px;
}

input[type=number], select {
  width: 50%;
  padding: 12px 20px;

  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
