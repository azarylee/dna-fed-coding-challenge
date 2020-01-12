<template>
    <div id="discover">
        <div id="discover-label">
            <div class="label-container">
                <div class="label-hr"></div>
                <span class="label"> {{this.label}} </span>
            </div>
        </div>
        <p class="sub-title">{{this.suptitle}}</p>
        <h3>{{this.title}}</h3>
        <a class="discover-button">
            <span>{{this.button}}</span>
            <div class="triangle-arrow"></div>
        </a>  
    </div>
</template>

<script>
import Label from './Label';

export default {
    name: 'discover',
    props: ['label', 'title', 'suptitle', 'price', 'sale', 'button'],
    components: { Label },
}
</script>

<style lang="scss">
    @import '../assets/css/mixin.scss';

    #discover {
        display: flex;
        flex-direction: column;
        padding: 10rem 0;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;

        #discover-label{
            display: flex;
            justify-content: center;
            margin-bottom: 5rem;
        }

        h3{
            @include text('Roboto', 36px, 5px, bolder);
            width: 80%;
            line-height: 1.2;
            margin-top: 2.5rem;
            margin-bottom: 5px;
        }

        #label{ 
            top: 0;
        }

        @media (max-width: 812px) { 
            h3{
                @include text('Roboto', 18px !important, 5px, bolder);
            }
        }
    }

    
</style>