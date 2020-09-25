<template>
    <div>
        <router-view></router-view>
        <ul class="tabBar-box">
            <li v-for="(item,index) in tabBarList" :key="index">
                <router-link :to="item.link">
                    <tab-item :tabInfo="item" :active="active(item.link)"></tab-item>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import TabItem from '@/components/tabBar/tabItem.vue'
    export default{
        name: "TabBar",
        components: {
            TabItem
        },
        props: {},
        data(){
            return {
                tabBarList:[
                    {
                        iconUrl: require("img/icon-home.svg"),
                        iconUrlActive:require("img/icon-home-active.svg"),
                        text:'首页',
                        link:'/home',
                    },
                    {
                        iconUrl:require("img/icon-classify.svg"),
                        iconUrlActive:require("img/icon-classify-active.svg"),
                        text:'分类',
                        link:'/classify',

                    },
                    {
                        iconUrl:require("img/icon-cart.svg"),
                        iconUrlActive:require("img/icon-cart-active.svg"),
                        text:'购物车',
                        link:'cart',
                    },
                    {
                        iconUrl:require("img/icon-my.svg"),
                        iconUrlActive:require("img/icon-my-active.svg"),
                        text:'我的',
                        link:'my',
                    },
                ]
            }
        },
        methods: {
          active(link){
            console.log("router:",this.$route)
            console.log('boolean:',this.$route.path.indexOf(link) != -1);
            return this.$route.path.indexOf(link) != -1
          }
        },
        created(){
        },
        mounted(){

        },
        computed:{
          //可以用计算属性，但是要返回一个函数来执行，上面的active(item.link)可以看做是active()(item.link)
          // active(link){
          //   console.log("router:",this.$route)
          //   console.log('boolean:',this.$route.path.indexOf(link) != -1);
          //   return (link) => {
          //     return this.$route.path.indexOf(link) != -1
          //   }
          // }
        }
    }
</script>

<style lang="less" scoped>
    .tabBar-box{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 49px;
        background: rgba(222,222,222,.5);
        box-shadow: 0 -2px 2px rgba(0,0,0,.1);
        li{
            flex:1;
            height: 100%;

        }
    }
</style>