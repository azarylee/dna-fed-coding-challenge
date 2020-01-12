<template>
    <div id="posts">
        <section class="columns">
            <div class="column bgColor">
                <Carousel :images="this.images" />
            </div>
            <div class="column details">
                <Discover
                    :label="this.label" 
                    :title="this.title" 
                    :suptitle="this.suptitle" 
                    :price="this.price"
                    :sale="this.sale"
                    :button="this.buttonText"
                />
            </div>
        </section>
    </div>
</template> 

<script>
import { getData } from '../api';
import Discover from './Discover';
import Carousel from './Carousel';

export default {
    name: "arrivals",
    components: { Discover, Carousel },
    data:()=>({
        label: '',
        title: '',
        images: [],
        suptitle: '',
        price: '',
        sale: '',
        buttonText: ''
    }),
    created() {
        let post = getData('post');
        this.label = post.label.toUpperCase();
        this.title = post.title.toUpperCase();
        this.suptitle = post.suptitle;
        this.price = post.price;
        this.sale = post.sale;
        this.buttonText = post.button;
        post.images.map(i=> {
            this.images.push('../../static/images/' + i.image);
        });
    },
    methods: {

    },
}
</script>