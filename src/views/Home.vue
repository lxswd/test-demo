<template>
    <div class="home">
        <router-link class="demo" to="/demo1">交错动画</router-link>
        <router-link class="demo" to="/demo2">六边形</router-link>
        <router-link class="demo" to="/demo3">播放视屏</router-link>
        <router-link class="demo" to="/demo4">登录注册</router-link>
        <router-link class="demo" to="/demo5">js分割文本</router-link>
        <router-link class="demo" to="/demo6">不同位置的交错动画</router-link>
        <router-link class="demo" to="/demo7">雪(随机粒子动画)</router-link>
        <router-link class="demo" to="/demo8">按钮(伪类和伪元素)</router-link>
        <router-link class="demo" to="/demo9">按钮(绝对定位实现多重边框)</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.demo {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(57, 178, 226);
    color: #fff5f5;
    border-radius: 10px;
    margin: 10px;
    text-decoration: none;

    &:active{
        background-color: rgb(115, 142, 182);
    }
}
</style>