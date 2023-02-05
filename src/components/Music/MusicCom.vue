<template>
    <div class="music">
      <iframe
        style="border-radius: 12px"
        :src="src"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: "MusicCom",
    data() {
      return {
        src: "https://open.spotify.com/embed/playlist/1p0duUr5S4RrbApIpwULPN?utm_source=generator&theme=0",
      };
    },
  };
  </script>