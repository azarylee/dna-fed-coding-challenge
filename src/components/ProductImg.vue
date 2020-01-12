<template>
    <div id="product-img">
        <img :src="this.image" alt="watch"/>
    </div>
</template>

<script>

export default {
    name: 'productImg',
    props: ['image'],
}
</script>

<style lang="scss">
    #product-img {
        margin-left: -4.5rem;

        img{
            width: 80%;
        }
    }
</style>