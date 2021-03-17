/* 绝对定位实现多重边框 */
<template>
    <div class="demo6">
        <button class="btn btn-primary btn-ghost btn-multiple-border-stroke">
            <div class="btn-borders-group">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
            </div>
            <div class="btn-borders-group">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
            </div>
            <div class="btn-borders-group">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
            </div>
            <span class="btn-text">Start</span>
        </button>
    </div>
</template>
<script>
export default {
    mounted () {
        console.log(1111111)
    }
}
</script>
<style lang="scss" scoped>
.demo6 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #222;
}

.btn {
    --hue: 190;
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    background-color: hsl(var(--hue), 100%, 41%);
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent;
    cursor: pointer;
    -webkit-user-select: none;
    white-space: nowrap;
    transition: 0.25s;
}
</style>