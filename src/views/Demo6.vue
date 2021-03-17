/* 不同位置的交错动画 */
<template>
    <div class="demo3">
        <div class="reveal">sword art online</div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        // let duration = 0.8;
        let delay = 0.3;
        let revealText = document.getElementsByClassName("reveal")
        let letters = revealText[0].textContent.split("");
        console.log(letters);
        console.log(revealText[0].textContent);
        revealText[0].textContent = "";
        let middle = letters.filter(e => e !== "").length/2;
        letters.forEach((letter,i) => {
            let span = document.createElement("span");
            revealText[0].appendChild(span)
            span.textContent = letter;
            // span.style.opacity = `0`;
            // span.style.transform = `scale(0)`;
            // span.style.animation = `fadeIn 2.4s forwards`
            span.style.animationDelay = `${delay + Math.abs(i-middle) * 0.1}s`
        })

    }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
// @import '../styles/demo3.css';

.demo3 {
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #222;
}

.reveal {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;
    
    // span {
    //     opacity: 0;
    //     transform: scale(0);
    //     animation: fadeIn 2.4s forwards;
    // }

    &::before,
    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        width: 2px;
        // height: 100%;
        background: #fff;
        opacity: 0;
        transform: scale(0);
    }

    &::before {
        left: 50%;
        animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }

    &::after {
        right: 50%;
        animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
}

// @keyframes fadeIn {
//     to {
//         opacity: 1;
//         transform: (1);
//     }
// }

@keyframes slideLeft {
    to {
        left: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}

@keyframes slideRight {
    to {
        right: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}
</style>