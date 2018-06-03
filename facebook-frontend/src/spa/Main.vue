<template>
    <div id="main">
        <div class="header">

        </div>
        <div class="body">
            <div class="side-bar">

            </div>
            <div class="feed-wrapper">

            </div>
            <div class="suggest">

            </div>
            <div class="contact-friends">

            </div>
        </div>
       
    </div>
</template>
<style lang="css" scoped>
    .header {
        background-color: #4267b2;
        border-bottom: 1px solid #29487d;
        color: #fff;
        height: 42px;
    }
    .body {
        display: flex; 
        flex-direction: column; 
        flex-wrap: wrap;
        height: 100vw;
        max-height: 800px;
        font-size: 0;  
    }
    .body > * {
        width: 25%;
        height: 100vw;
        border: 1px solid black;
        box-sizing: border-box;
    }
    .body .side-bar {
        height: 100vw;
    }
</style>
