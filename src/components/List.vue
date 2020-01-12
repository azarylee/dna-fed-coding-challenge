<template>
    <div id="list" class="columns">
        <section v-for="(product, index) in lists" class="column">
            <Tag v-if="product.sale"/>
            <img :src="product.image"/>
            <h3 class="title">{{product.title}}</h3>  
            <p class="list-subtitle">{{product.subtitle}}</p>   
            <p class="list-price">{{product.price}}</p>
        </section>
    </div>
</template>

<script>
import { getData } from '../api';
import Tag from './Tag';

export default {
    name: 'list',
    components: { Tag },
    data:() => ({
        lists: []
    }),
    created() {
        this.lists = getData('lists').products;
        this.lists.map( l => {
            l.title = l.title.toUpperCase();
            l.image = '../../static/images/' + l.image;
        });
    },
}
</script>

<style lang="scss">
    @import '../assets/css/mixin.scss';

    .list-subtitle {
        @include text('Open Sans', 12px, initial);
    }
    .list-price {
        margin: 32px 0;
        @include text('Roboto', 16px, 1px, bolder);
    }
</style>