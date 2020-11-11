<template>
    <div class="demo2">
        <div class="list" v-for="item in array" :key="item.id">
        <!-- <div class="list"> -->
            <div class="item">
                <div class="hexagon">
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                </div>
                <div class="hexagon">
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                </div>
            </div>
            <div class="item">
                <div class="hexagon">
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                </div>
                <div class="hexagon">
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                </div>
                <div class="hexagon">
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                    <div class="hexagon-item"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            array: [
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

.demo2 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list {
    display: flex;
    justify-content: center;
    align-items: center;

    .item {
        width: 120px;

        // margin-left: 20px;
    }
}

.hexagon {
    width: 60px;
    height: 104px;
    position: relative;
    margin: 10px;

    .hexagon-item {
        width: 100%;
        height: 100%;
        background-color: rgb(121, 224, 181);
        position: absolute;

        &:nth-child(1) {
            transform: rotate(-60deg);
        }

        &:nth-child(3) {
            transform: rotate(60deg);
        }
    }
}
</style>