<template>
    <div id="arrivals">
        <Label :label-title="this.label"/>
        <section class="columns">
            <div class="column details">
                <ProductInfo 
                    :title="this.title" 
                    :subtitle="this.subtitle" 
                    :price="this.price"
                    :sale="this.sale"
                    :button="this.buttonText"
                />
            </div>
            <div class="column bgColor">
                <ProductImg :image="this.image" />
            </div>
        </section>
    </div>
</template> 

<script>
import { getData } from '../api';
import Label from './Label';
import ProductInfo from './ProductInfo';
import ProductImg from './ProductImg';

export default {
    name: "arrivals",
    components: { Label, ProductInfo, ProductImg },
    data:()=>({
        label: '',
        title: '',
        image: '',
        subtitle: '',
        price: '',
        sale: '',
        buttonText: ''
    }),
    created() {
        let newArrivals = getData('new_arrivals');
        this.label = newArrivals.label.toUpperCase();
        this.title = newArrivals.title.toUpperCase();
        this.subtitle = newArrivals.subtitle;
        this.price = newArrivals.price;
        this.sale = newArrivals.sale;
        this.buttonText = newArrivals.button.toUpperCase();
        this.image = '../../static/images/' + newArrivals.image;
    }
}
</script>