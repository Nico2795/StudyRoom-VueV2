<template>
	<div>
		<v-btn @click="changeBackground" icon="mdi mdi-image-area"></v-btn>
	</div>
</template>
<script>
export default {
    name:"BackGround",
	data() {
		return {
			index: 0,
			images: [
				"https://i.pinimg.com/originals/c2/44/5d/c2445dd759cf52be7e37d294c62d730e.gif",
				"https://i.pinimg.com/originals/b8/83/26/b88326c5a42965963dc961057f66bbf2.gif",
                "https://i.pinimg.com/originals/20/8f/d7/208fd76468afa91714a3bb6d1c6e39b9.gif"
			],
		};
	},
	methods: {
		changeBackground() {
			this.index = (this.index + 1) % this.images.length;
			document.body.style.backgroundImage = `url(${this.images[this.index]})`;
		},
	},
};
</script>
