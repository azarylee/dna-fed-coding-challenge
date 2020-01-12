<template>
    <div id="product-carousel">
        <b-carousel>
            <b-carousel-item v-for="(carousel, i) in images" :key="i">
                <section>
                    <img :src="carousel" alt="watch"/>
                </section>
            </b-carousel-item>           
        </b-carousel>
    </div>
</template>

<script>

export default {
    name: 'productImg',
    props: ['images']
}
</script>

<style lang="scss">
    #product-carousel {
            position: relative;
            left: 50%;
            transform: translate(3%);
        img{
            width: 100%;
        }
    }
</style>