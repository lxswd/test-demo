/* 交错动画 */
<template>
    <div class="demo1">
        <div class="loading">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.demo1 {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

.loading {
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    display: flex;
    animation-delay: 1s;

    .dot {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 20px;
        border-radius: 50%;

        &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: inherit;
            animation: wave 2s ease-out infinite;
        }

        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
                background: nth($colors, $i);

                &::before {
                    animation-delay: $i * 0.2s;
                }
            }
        }
    }

}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>