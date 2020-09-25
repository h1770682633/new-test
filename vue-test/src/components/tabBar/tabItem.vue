<template>
    <div>
        <div class="tab-item" :class="active?'active':''">
            <img :src="tabInfo.iconUrl" alt="" v-if="!active">
            <img :src="tabInfo.iconUrlActive" alt="" v-else>
            <p>{{tabInfo.text}}</p>
        </div>
    </div>
</template>

<script>

    export default{
        name: "TabItem",
        components: {},
        props: {
            tabInfo:{
                type:Object,
                default:{},
            },
            active:'',
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {},
        created(){

        },
        mounted(){

        },
    }
</script>

<style lang="less" scoped>
    .tab-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        height: 49px;
        img{
            height: 16px;
        }
        p{
            font-size: 12px;
            margin-top: 3px;
        }
        &.active{
            p{
                color: red;
            }
        }
    }
</style>