<template>
    <div class="main">
        xxx
    </div>
</template>

<script>
import { Button, Slider, Progress, Steps, Step, RadioGroup, Radio } from 'element-ui';
export default {
    name: 'HelloWorld',
    components: {
        Button,
        'el-slider': Slider,




        'el-progress': Progress,
        'el-steps': Steps,
        'el-step': Step,
        'el-radio-group': RadioGroup,
        'el-radio': Radio
    },
    props: {
        msg: String
    },
    data() {
        return {
            canvasSize: {width: 338, height: 600},
            backImgSize: {width: 1024, height: 3000},
            title: "",
        }
    },
    created() {
        this.sendMsgFromPopToContent();
        this.listenMembers();


        // 初始化头像数据
        this.alla = []
        this.imageArray = [
            // 'images/pinch.png',
            // 'images/web-bear.jpg'
            // 'images/web-bear.jpg',
            // 'images/web-bear.jpg',
            // 'images/web-bear.jpg',
            // 'images/1.jpg',
            // 'images/1.jpg'
        ]
        // for (let i = 0; i < 100; i++) {
        //     this.imageArray.push('images/web-bear.jpg')
        // }
        // setTimeout(() => {
        //     this._crop();
        // },1000);

        // setTimeout(() => {
        //     this.generate(true)
        // }, 1000)
    },
    methods: {
        /**
         * 设定总数量和头像大小映射关系
         **/
        setFormParams() {
            this.form.allCount = this.imageArray.length
            let referParams = {
                0 : {size: 60, space: 10},
                1 : {size: 60, space: 8},
                2 : {size: 60, space: 6},
                3 : {size: 50, space: 6},
                4 : {size: 40, space: 5},
                5 : {size: 40, space: 5},
                6 : {size: 35, space: 5},
                7 : {size: 32, space: 5},
                8 : {size: 30, space: 5},
                9 : {size: 25, space: 5},
                10 : {size: 25, space: 5}
            }
            const key = (this.form.allCount/50).toFixed()
            this.initParams.size = referParams[key].size
            this.initParams.space = referParams[key].space
            this.form.size = referParams[key].size
            this.form.space = referParams[key].space
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "index.css";
</style>
