<template>
    <v-btn class="filter-button" v-model="isToggled" :class="(isToggled) ? 'iconOn':'iconOff' " @click="toggled">
        <slot>
            <div class="icon"  v-show="isToggled==false">
                <i class="fas fa-volume-up fa-2x "></i>
            </div>
            <div class="icon" v-show="isToggled==true">
                <i class="fas fa-volume-up fa-stack-2x "></i>
                <i class="fas fa-slash fa-stack-2x"></i>
            </div>
        </slot>
    </v-btn>
</template>

<script>

export default {
    name:'CustomButton',
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
            this.$emit('clicked', {"ipAddr":this.ipAddr,"isMute":this.isToggled})
        }
    },
    mounted: function(){
        // console.log(this.ipAddr)
    }
}
</script>
<style>
.icon{
    position: absolute;
    height:30px;
    width:30px;
}
.iconOn{
    background-color:rgb(252, 175, 160) !important;
}
.iconOff{
    background-color:rgb(166, 252, 160) !important;
}
</style>