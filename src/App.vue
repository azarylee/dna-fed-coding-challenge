<template>
    <div id="app">
        <section id="logo">
            <span class="logo">LOGO</span> 
            <div class="triangle"></div>   
        </section>
        <Arrivals />   
        <Lists />
        <Posts />
        <Content />
    </div>
</template>

<script>
    import Arrivals from './components/NewArrivals.vue';
    import Lists from './components/List.vue';
    import Posts from './components/Posts.vue';
    import Content from './components/Content.vue';

    export default {
        name: 'app',
        components: {
            Arrivals,
            Lists,
            Posts,
            Content
        }
    }
</script>

<style lang="scss">
    @import './assets/css/style.scss';
</style>
