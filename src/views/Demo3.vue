<template>
    <div class="demo3">
        <div class="container">
            <video 
            class="video"
            src="../assets/pv.mp4"
            autoplay
            controls
            muted
            ></video>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        this.control();
    },
    methods: {
        control () {
            const videoControl = document.getElementsByClassName("video")[0];  
            console.log(videoControl)
            videoControl.play();
            videoControl.muted = !videoControl.muted; 
            console.log(videoControl.muted)
        }
    }
    
}
</script>
<style lang="scss" scoped>
.demo3 {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    .video {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
}
</style>