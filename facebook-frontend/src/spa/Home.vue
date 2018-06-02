<template>
    <div id="home">
        <div class="header">
            <div class="brand">
                <img src="../assets/facebook-logo.png" alt="facebook">
            </div>
            <div class="login-wrapper">
                <div class="inputs">
                    <label for="user-id">Email or Phone</label>
                    <input id="user-id" type="text">
                </div>
                <div class="inputs">
                    <label for="user-pw">Password</label>
                    <input id="user-pw" type="password">
                    <a href="#">Forgot account?</a>
                </div>
                <button>Log In</button>
            </div>
        </div>
    </div>
</template>

<style>
    #home {
        background-color: #edf0f5;
        min-width: 980px;

    }
    .header {
        position: relative;
        height: 82px;
        background-color: #3b5998;
        background-image: linear-gradient(#4e69a2, #3b5998 50%);

        padding: 18px 10%;
        box-sizing: border-box;
        color: #fff;
    }
    .header .brand {
        display: inline-block;
        height: 100%;
    }
    .header .brand img {
        position: absolute;
        width: 200px;
        bottom: 12px;
    }
    .header .login-wrapper {
        float: right;
    }
    .header .login-wrapper .inputs {
        display: inline-block;
        margin: 0 8px;
        vertical-align: top;

    }
    .header .login-wrapper .inputs label {
        display: block;
        font-size: 12px;
        margin: 0 0 6px 0;
    }
    .header .login-wrapper .inputs input {
        border: 1px soild #000;
        height: 15px;
    }
    .header .login-wrapper .inputs input:focus {
        outline: none;
    }
    .header .login-wrapper .inputs a {
        display: block;
        color: rgba(179, 179, 179, 0.76);
        text-decoration: none; 
        font-size: 12px;
        margin: 2px 0;
    }
    .header .login-wrapper button {
        background-color: #476bb9;
        border: 1px solid #293d69;
        color: rgba(255, 255, 255, 0.877);
        padding: 5px 10px;
        border-radius: 3px;
        margin: 20px 0 ;
        cursor: pointer;
    }
    .header .login-wrapper button:hover {
        background-color: #375594;
    }
    .header .login-wrapper button:active {
        background-color: #2b4275;
    }
    .header .login-wrapper button:focus {
        outline: none;
    }
 
</style>
