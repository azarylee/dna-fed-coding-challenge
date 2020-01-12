<template>
    <div id="label">
        <div class="label-container">
            <div class="label-hr"></div>
            <span class="label"> {{this.labelTitle}} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'labels',
    props: ['labelTitle'],
    data:() => ({
        
    }),
    mounted() {
        
    },
}
</script>

<style lang="scss">
    @import '../assets/css/label.scss';
</style>