<template>
    <v-slider name="slider" v-model="value" @mouseup="adjVolume()" @touchend="adjVolume()" />
</template>
<script>
export default {
    name:'CustomSlider',
    props:[
        'ipAddr',
    ],
    data: function () {
        let value=50
        return{ value }
    },
    methods:{
        adjVolume(){

            this.$emit('volumechange', {"ipAddr":this.ipAddr,"sliderValue":this.value})
        }
    },
    mounted: function(){
        // console.log(this.ipAddr)
    }
}
</script>