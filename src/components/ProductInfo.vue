<template>
    <div id="product-info">
        <h3>{{this.title}}</h3>
        <p>{{this.subtitle}}</p>
        <section>
            <span class="price">{{this.price}}</span>
            <span class="sale">{{this.sale}}</span>
        </section>
        <a class="cart-button">
            <span>{{this.button}}</span>
            <div class="triangle-arrow"></div>
        </a>  
    </div>
</template>

<script>
export default {
    name: 'productInfo',
    props: ['title', 'subtitle', 'price', 'sale', 'button'],
    mounted() {
        
    },
}
</script>

<style lang="scss">
    @import '../assets/css/mixin.scss';

    #product-info {
        display: flex;
        flex-direction: column;
        padding: 15rem 0;
        justify-content: center;
        align-items: center;

        h3{
            @include text('Roboto', 72px, 9px, bolder);
            line-height: 1;
            margin-bottom: 5px;
        }

        section {
            margin: 45px 0;
        }
    }
</style>