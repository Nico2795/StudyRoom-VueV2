<template>
	<HelloWorld msg="Welcome to Your Vue.js App" />

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";


export default {
	name: "App",
	components: {
		HelloWorld,
	},
	data() {
		return {
			images: [
				"https://i.pinimg.com/originals/c2/44/5d/c2445dd759cf52be7e37d294c62d730e.gif",
				"https://i.pinimg.com/originals/b8/83/26/b88326c5a42965963dc961057f66bbf2.gif",
        "https://i.pinimg.com/originals/20/8f/d7/208fd76468afa91714a3bb6d1c6e39b9.gif"
			],
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

body {
	background-image: url("https://i.pinimg.com/originals/20/8f/d7/208fd76468afa91714a3bb6d1c6e39b9.gif");
	background-attachment: fixed;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
}
</style>
