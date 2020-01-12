<template>
    <div id="content">
        <b-tabs v-model="activeTab">
            <b-tab-item label="Pictures">
                Lorem ipsum dolor sit amet.
            </b-tab-item>

            <b-tab-item label="Music">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>

            <b-tab-item :visible="showBooks" label="Books">
                What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
            </b-tab-item>

            <b-tab-item label="Videos" disabled>
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
import { getData } from '../api';

export default {
    name: 'content',
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
        console.log(getData());
        console.log(getData('tabs'));
        let tabs = getData('tabs');
    },
    methods: {

    },
}
</script>  

<style lang="scss">
    #content {
        padding: 118px 108px;
    }
</style>