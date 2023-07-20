<template>
    <v-checkbox class="chkbox" v-model="isToggled" @click="toggled"></v-checkbox>
</template>
<script>
export default {
    name: 'CustomCheckbox',
    props:[
        'ipAddr',
    ],
    data: function () {
            let isToggled=false
        return {
            isToggled
        }
    },
    methods:{
        toggled(){
            this.isToggled = !this.isToggled
            this.$emit('clicked', {"ipAddr":this.ipAddr,"isIncluded":this.isToggled})
             console.log(this.isToggled)
        }
    },
    mounted: function(){
        console.log(this.ipAddr)
    }
}
</script>

<style>
.chkbox{
    max-width:35px;
    margin-right:10px;
    margin-top: -10px;
}
</style>