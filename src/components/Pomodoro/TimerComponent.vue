<template>
	<div class="container timer">
		<!-- Aquí se está utilizando el componente "VeProgress" que se importó desde "vue-ellipse-progress" -->
		<!-- Condicional para mostrar TimerComponent o SettingsComponent -->
		<template v-if="!showSettings">
			<!-- Timer component -->
			<ve-progress :progress="timerPercentage" :size="342"   fontSize="3rem">
				<p>{{ displayTime }}</p>
			</ve-progress>
			<div class="botones">
				<PlayButton start-button @start="startTimer"></PlayButton>
				<PauseButton pause-button @pause="pauseTimer"></PauseButton>
				<ConfigButton
					config-button
					@showSettings="showSettingsModal"
				></ConfigButton>
			</div>
		</template>
		<template v-else>
			<!-- Settings component -->
			<SettingsComponent @hideSettings="hideSettingsModal" @save="handleSave" />
		</template>
	</div>
</template>
<script>
// Importa el componente "VeProgress" desde "vue-ellipse-progress"
import { VeProgress } from "vue-ellipse-progress";
import PlayButton from "./PlayButton.vue";
import PauseButton from "./PauseButton.vue";
import ConfigButton from "./ConfigButton.vue";
import SettingsComponent from "./SettingsComponent.vue";

export default {
	// Nombre del componente
	name: "TimerComponent",
	// Lista de componentes utilizados en este componente
	components: {
		VeProgress,
		PlayButton,
		PauseButton,
		ConfigButton,
		SettingsComponent,
	},
	data() {
		return {
			// Duración del timer en segundos
			duration: 25 * 60,
			// Tiempo restante en segundos
			timeLeft: localStorage.getItem("timeLeft") || this.duration,
			// Indica si el timer está corriendo
			isRunning: false,
			// Intervalo que actualiza el tiempo restante
			interval: null,
			workOrRest: "work",
			//Tiempo de descanso
			restDuration: 5 * 60,
			showSettings: false,
		};
	},
	computed: {
		displayTime() {
			const minutes = Math.floor(this.timeLeft / 60);
			const seconds = this.timeLeft % 60;
			return `${minutes}:${seconds.toString().padStart(2, "0")}`;
		},
		timerPercentage() {
			return ((this.duration - this.timeLeft) / this.duration) * 100;
		},
	},
	methods: {
		startTimer() {
			if (this.isRunning) return;
			//Recupera el tiempo restante desde el local storage
			this.timeLeft =
				parseInt(localStorage.getItem("timeLeft")) || this.duration;
			this.duration = localStorage.getItem("workTime") * 60 || this.duration;
			const savedTimeLeft = localStorage.getItem("timeLeft");
			this.timeLeft = savedTimeLeft ? savedTimeLeft : this.duration;
			localStorage.setItem("timeLeft", this.timeLeft);
			// Establece el estado del timer en corriendo
			this.isRunning = true;
			if (this.workOrRest === "work") {
				const savedWorkTime = localStorage.getItem("workTime");
				this.duration = savedWorkTime ? savedWorkTime * 60 : 25 * 60;
				this.timeLeft = this.duration;
				this.timeLeft =
					parseInt(localStorage.getItem("timeLeft")) || this.duration;

				// Actualiza restDuration
				const savedRestDuration = localStorage.getItem("restDuration");
				this.restDuration = savedRestDuration ? savedRestDuration * 60 : 5 * 60;
			} else {
				this.duration = this.restDuration;
				this.timeLeft = this.restDuration;
				this.timeLeft =
					parseInt(localStorage.getItem("timeLeft")) || this.duration;
			}

			this.interval = setInterval(() => {
				this.timeLeft--;
				if (this.timeLeft === 0) {
					clearInterval(this.interval);
					this.isRunning = false;
					this.workOrRest = this.workOrRest === "work" ? "rest" : "work";
					this.startTimer();
				}
			}, 1000);
		},
		handleSave(payload) {
			if (this.workOrRest === "work") {
				this.duration = payload.workTime * 60;
				this.timeLeft = payload.workTime * 60;
				localStorage.setItem("workTime", payload.workTime);
			} else {
				this.duration = payload.restDuration * 60;
				this.timeLeft = payload.restDuration * 60;
			}
			this.restDuration = payload.restDuration * 60;
			localStorage.setItem("restDuration", payload.restDuration);
			this.showSettings = false;
		},
		pauseTimer() {
			if (!this.isRunning) return;
			//Almacena el tiempo restante en el LocalStorage
			localStorage.setItem("timeLeft", this.timeLeft);
			clearInterval(this.interval);
			this.isRunning = false;
		},
		showSettingsModal() {
			this.showSettings = true;
		},
		hideSettingsModal() {
			this.showSettings = false;
		},
	},
};
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.container {
	display: grid;
	place-items: center;
}

.timer{
	width: 342px;
    z-index: 0;
    height: 340px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    bottom: 50;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
}
</style>
