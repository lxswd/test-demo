/* js分割文本 */
<template>
    <div class="demo2">
        <p class="landIn">哼哼哼哼哼哼哼哼哼哼哈哈哈哈哈哈哈哈哈嗝哈哈哈哈哈哈哈哈哈嗝哈哈哈哈哈哈</p>
        <!-- <p class="landIn">Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.</p> -->
    </div>    
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        let landInTexts = document.getElementsByClassName('landIn');
        console.log(landInTexts);
        landInTexts.forEach(landInText => {
            let letters = landInText.textContent.split("");
            landInText.textContent = "";
            console.log(letters);
            console.log(landInText,"11");
            letters.forEach((letter,i) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.style.animation = `landIn 0.8s ease-out both`;
                span.style.animationDelay = `${ i * 0.05}s`;
                console.log(i)
                landInText.appendChild(span)
                // console.log(span.style);
            });
        });
    }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
// @import '../styles/demo2.css';

.demo2 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom , rgba(16,16,16,0.8) , rgba(16,16,16,0.5)), url('../assets/images/background_login.jpg');
    background-size: cover;
}

p {
    margin: 10px;
    font-size: 24px;
    font-weight: bold;
}

.landIn {
    display: flex;
    flex-wrap: wrap;
    line-height: 30px;
    color: #ffffff;
    font-family: 'Lora', 'serif';
    white-space: pre;
    span {
        // animation: land 0.8s ease-out both !important;
        animation: landIn 0.8s ease-out both;
    }
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>