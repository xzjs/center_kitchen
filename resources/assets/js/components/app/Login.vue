<template>
    <div class="bg">
        <div class="mask">
            <div class="logo">
                <img src="/img/title.png" class="img"/>
            </div>
            <div class="title">
                <div class="words">
                    <span class="gradient">中</span><span>央</span><span>厨</span><span class="gradient">房</span>
                </div>
            </div>
            <div class="login">
                <input type="text">
                <hr>
                <input type="password"/>
                <hr>
                <el-button class="sub">登录</el-button>
                <div>
                    <span>忘记密码</span>
                    <span>|</span>
                    <span>会员注册</span>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .bg {
        background-image: url(/img/bg.png);
        background-size: cover;

        .mask {
            background-color: rgba(0, 0, 0, 0.4);
            .logo {
                text-align: center;

                .img {
                    width: 100px;
                    height: 100px;
                    margin: 50px auto;
                }
            }
            .title {
                text-align: center;
                .words {
                    margin: 0 auto;
                    color: #FFFFFF;
                    font-size: 40px;

                    .gradient {
                        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#E5D109), to(#F49A00));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
            .login {
                margin: 200px 15px;
                text-align: center;
                color: white;
                input {
                    font-size: 18px;
                    background-color: rgba(0, 0, 0, 0);
                    width: 100%;
                    height: 28px;
                    text-align: center;
                    color: white;
                }
                hr {
                    margin: 10px 0;
                    border: 1px solid rgba(255, 255, 255, 0.4);
                }
                .sub{
                    background-color: #F36100;
                    margin:10px auto;
                    width: 200px;
                    height: 35px;
                    font-size: 18px;
                    color: white;
                }
            }

        }

    }

    .bg:after {
        background-color: black;
    }
</style>