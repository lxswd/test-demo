/* 登录注册 */
<template>
    <div class="demo4">
        <div class="container right-panel-active">
            <!-- sign up -->
            <div class="container_form container-signup">
                <form action="#" class="form" id="form1">
                    <h2 class="form_title">Sign Up</h2>
                    <input type="text" placeholder="User" class="input">
                    <input type="email" placeholder="Email" class="input">
                    <input type="password" placeholder="Password" class="input">
                    <button class="btn">Sign Up</button>
                </form>
            </div>

            <!-- sign in -->
            <div class="container_form container-signin">
                <form action="#" class="form" id="form2">
                    <h2 class="form_title">Sign In</h2>
                    <input type="email" placeholder="Email" class="input">
                    <input type="password" placeholder="Password" class="input">
                    <a href="#" class="link">Forgot your password?</a>
                    <button class="btn">Sign In</button>
                </form>
            </div>

            <!-- Overlay -->
            <div class="container_overlay">
                <div class="overlay">
                    <div class="overlay_panel overlay-left">
                        <button class="btn" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay_panel overlay-right">
                        <button class="btn" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
:root {
    /* colors */
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;

    /* radiu */
    --button-radius: 0.7rem;

    /* size */
    --max-width: 758px;
    --max-height: 420px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.demo4 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/background_login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: var(--white);
    height: 100vh;
}

.form_title {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.25rem;
}

.link {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 1.5rem 0;
    text-decoration: none;
}

.container {
    background-color: var(--white);
    border-radius: var(--button-radius);
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
                0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    /* width: 100%; */
    height: var(--max-height);
    max-width: var(--max-width);
    overflow: hidden;
    position: relative;
}
</style>