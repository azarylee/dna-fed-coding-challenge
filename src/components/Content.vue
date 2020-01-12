<template>
    <div id="contents">
        <b-tabs v-model="activeTab" expanded>
            <b-tab-item v-for="(tab, index) in tabs" :key="index":label="tab.title.toUpperCase()">
                <p>{{tab.statement}}</p>
                <p class="disclaimer">{{tab.disclaimer}}</p>
            </b-tab-item>
        </b-tabs>
        
    </div>
</template>

<script>
import { getData } from '../api';

export default {
    name: 'contents',
    data:()=>({
        tabs: [],
        activeTab: 0,
    }),
    created() {
        console.log(getData());
        console.log(getData('tabs'));
        this.tabs = getData('tabs').tabs;
    }
}
</script>  

<style lang="scss">
@import '../assets/css/mixin.scss';

    #contents {
        padding: 118px 108px;

        p {
            @include text('Open Sans');
            text-align: justify;
        }

        .disclaimer {
            @include text('Open Sans', 10px, 1px, 500, $grey);
            margin-top: 2rem;
        }
    }
    @media (max-width: 812px) { 
        #contents{
            padding: 1rem;

            .tabs {
                font-size: 10px;
            }
        }
    }
</style>