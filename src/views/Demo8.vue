/* 伪类和伪元素实现的按钮 */
<template>
    <div class="demo5">
        <button data-text="Start" class="btn btn-primary btn-ghost btn-border-stroke btn-text-float-up">
            <div class="btn-borders">
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
        console.log(222222)
    }
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

.demo5 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #222;
}

.btn {
    --hue: 190;
    --ease-in-duration: 0.25s;
    --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    --ease-out-duration: 0.65s;
    --ease-out-delay: var(--ease-in-duration);
    --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);

    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none; //文本修饰，默认标准文本
    background-color: hsl(var(--hue), 100%, 41%);  //hsl(hue, saturation, lightness)  hue:色相（(0-360) 0是红色 120是绿色 240是蓝色） stauration：饱和度 lightness：亮度 
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent; //按钮的外边框为透明色
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none; //元素和子元素的文本将无法被选中
    white-space: nowrap; //文本不会换行
    transition: 0.25s;

    &:hover {
        background: hsl(var(--hue), 100%, 31%);
        background: transparent;
    }

    &-primary {
        --hue: 171;
    }

    &-ghost {
        color: hsl(var(--hue), 100%, 41%);
        background-color: transparent;
        border-color: hsl(var(--hue), 100%, 41%);

        &:hover {
           color: white; 
        }
    }

    &-border-stroke {
        border-color: hsla(var(--hue), 100%, 41%, 0.35);
        
        .btn-borders {
            position: absolute;
            top: 0;
            left: 0;
            width :100%;
            height: 100%;

            .border-top {
                position: absolute;
                top: 0;
                width: 100%;
                height: 1px;
                background: hsl(var(--hue), 100%, 41%);
                transform: scaleX(0);
                transform-origin: left;
            }

            .border-right {
                position: absolute;
                right: 0;
                width: 1px;
                height: 100%;
                background: hsl(var(--hue), 100%, 41%);
                transform: scaleY(0);
                transform-origin: bottom;
            }

            .border-bottom {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: hsl(var(--hue), 100%, 41%);
                transform: scaleX(0);
                transform-origin: left;
            }

            .border-left {
                position: absolute;
                left: 0;
                width: 1px;
                height: 100%;
                background: hsl(var(--hue), 100%, 41%);
                transform: scaleY(0);
                transform-origin: bottom;
            }

            .border-left {
                transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
            }

            .border-top {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
            }

            .border-bottom {
                transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
            }

            .border-right {
                transition: var(--ease-in-duration) var(--ease-in-exponential);
            }


           
        }
        
        &:hover {
            color: hsl(var(--hue), 100%, 41%);
            background: transparent;

            .border-top,
            .border-bottom {
                transform: scaleX(1);
            }

            .border-left,
            .border-right {
                transform: scaleY(1);
            }

            .border-left {
                transition: var(--ease-in-duration) var(--ease-in-delay) var(--ease-in-exponential);
            }

            .border-top {
                transition: var(--ease-out-duration) var(--ease-out-exponential);
            }

            .border-bottom {
                transition: var(--ease-in-duration) var(--ease-in-delay) var(--ease-in-exponential);
            }

            .border-right {
                transition: var(--ease-out-duration) var(--ease-out-exponential);
            }
        }
    }

    &-text-float-up {
        &::after {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            content: attr(data-text);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translateY(35%);
            transition: 0.25s ease-out;
        }

        .btn-text {
            display: block;
            transition: 0.75s 0.1s var(--ease-out-exponential);
        }

        &:hover {
            .btn-text {
                opacity: 0;
                transform: translateY(-25%);
                transition: 0.25s ease-out;
            }

            &::after {
                opacity: 1;
                transform: translate(0);
                transition: 0.75s 0.1s var(--ease-out-exponential);
            }
        }
    }
}
</style>