<template>
  <div>
    <Logo></Logo>
    <div class="slidersContainer">
        <div class="chkAll">
            <v-checkbox v-model="isChkAll" :click="ChkAll">Check All</v-checkbox>
        </div>

        <div class="deviceLocation">
            <span>Office</span>
            <div class="mySlider" id="ipAddr198" ref="mySlider1">
                <custom-button name="mute" :ipAddr="198" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="198" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="198" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Room 1</span>
            <div class="mySlider" id="ipAddr204" ref="mySlider1">
                <custom-button name="mute" :ipAddr="204" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="204" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="204" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Room 2 / Bath</span>
            <div class="mySlider" id="ipAddr209" ref="mySlider1">
                <custom-button name="mute" :ipAddr="209" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="209" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="209" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>2nd</span>
            <div class="mySlider" id="ipAddr207" ref="mySlider1">
                <custom-button name="mute" :ipAddr="207" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="207" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="207" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Prep Room</span>
            <div class="mySlider" id="ipAddr206" ref="mySlider1">
                <custom-button name="mute" :ipAddr="206" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="206" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="206" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Pool</span>
            <div class="mySlider" id="ipAddr203" ref="mySlider1">
                <custom-button name="mute" :ipAddr="203" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="203" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="203" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Rooftop</span>
            <div class="mySlider" id="ipAddr211" ref="mySlider1">
                <custom-button name="mute" :ipAddr="211" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="211" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="211" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Basement</span>
            <div class="mySlider" id="ipAddr208" ref="mySlider1">
                <custom-button name="mute" :ipAddr="208" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="208" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="208" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

        <div class="deviceLocation">
            <span>Garage</span>
            <div class="mySlider" id="ipAddr212" ref="mySlider1">
                <custom-button name="mute" :ipAddr="212" @clicked="Mute" ref="mute"></custom-button>
                <custom-slider :ipAddr="212" @volumechange="adjVolume" ref="slider"></custom-slider>
                <custom-checkbox name="chkbox" :ipAddr="212" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
            </div>
        </div>

    </div>

    <!-- <v-slider name="slider" v-model="value" @mouseup="adjVolume($event)" @touchend="adjVolume($event)" ref="slider" /> -->

    <button @click="barixStatus">Status</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import { createVuetify } from 'vuetify'
// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

import CustomButton from './button.vue'
import CustomSlider from './slider.vue'
import CustomCheckbox from './checkbox.vue'
import Logo from './logo.vue'
//import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'Audio',
    // props: {
    //     msg: String
    // },
    components: {
            Logo,
        CustomButton,
        CustomSlider,
        CustomCheckbox,
    },
    data() {
        return {
            value: 50,
            isChkAll: false,
            sliderEvent:{},
            isMute: false
        }
    },
    methods:{
        getParent(){
            console.log(this)
        },
        ChkAll(){
            console.log(this.isChkAll)
        },
        IncludeDevice(isIncluded){
            console.log(isIncluded)
        },
        Mute(isMute) {
            if(isMute.isMute==false){
                this.adjVolume({"ipAddr":this.$refs.slider.ipAddr,"sliderValue":this.$refs.slider.value})
            }
            console.log(this.$refs.slider)
            fetch('http://192.168.100.'+ isMute.ipAddr +'/rc.cgi?c=8', {mode:"no-cors"})
            .then(msg => console.log(msg))
            console.log(isMute) // someValue
        },
        adjVolume(sliderEvent){
            console.log(sliderEvent)

console.log(this.$refs.mute)
console.log(this.$refs.slider)
// console.log(this.$refs.chkbox) // ck.$.props.ipAddr

            if(this.$refs.mute.isToggled==false){
                let ipAddr = sliderEvent.ipAddr
                let level = parseInt(sliderEvent.sliderValue).toString()



                fetch('http://192.168.100.'+ipAddr+'/rc.cgi?V='+level, {mode:"no-cors"})
                .then(msg => console.log(msg))
            }
        },
        volUp(){
            fetch('http://192.168.100.198/rc.cgi?c=19', {mode:"no-cors"})
            .then(msg => console.log(msg))
        },
        volDn(){
            fetch('http://192.168.100.198/rc.cgi?c=20', {mode:"no-cors"})
            .then(msg => console.log(msg))
        },
        vol50(){
            fetch('http://192.168.100.198/rc.cgi?V=50', {mode:"no-cors"})
            .then(msg => console.log(msg))
        },
        barixStatus(){
            toast.info('Current Status')
            fetch('http://192.168.100.198/realtime_status.txt', {mode:"no-cors"})
            .then(msg => console.log(msg))
        }
    }
}

//console.log(nLevel)
// console.log(this.$refs.el)
// let adjustment = this.$refs.el
// let level = adjustment.modelValue
// let ipAddr = adjustment.id.substr(6,3)

// let ipAddr = sliderEvent.currentTarget.parentElement.id.substr(6,3)
// let level=parseInt(sliderEvent.currentTarget.parentElement.childNodes[1].textContent).toString()

// console.log(sliderEvent.currentTarget.parentElement.id)
// console.log(sliderEvent.currentTarget.parentElement.childNodes[1].textContent)
// console.log(sliderEvent.currentTarget.parentElement.childNodes[0])

// console.log(sliderEvent.currentTarget.parentElement.childNodes[0].attributes.id.value)
// console.log(sliderEvent.currentTarget.parentElement.childNodes[0].attributes.modelvalue.value)

// when slider is moved the following exposes the parent container
// these are attributes in the order listed on the element (excluding ref which does not exist here?)
// sliderEvent.currentTarget.parentElement.attributes[0] == class="mySlider"
// sliderEvent.currentTarget.parentElement.attributes[1].value == ipAddr198
// sample html
// <div class="mySlider" id="ipAddr198" ref="mySlider1">
//     <custom-button name="mute" :ipAddr="198" @clicked="Mute" ref="mute"></custom-button>
//     <v-slider name="slider" v-model="value" @mouseup="adjVolume($event)" @touchend="adjVolume($event)" ref="slider" />
//     <custom-checkbox name="chkbox" :ipAddr="198" @clicked="IncludeDevice" ref="chkbox"></custom-checkbox>
// </div>
// now is the chkbox checked
// ck = this.$refs.chkbox
// ck.$.props.ipAddr == 198



</script>

<style>
.slidersContainer{
    display:flex;
    flex-direction: column;
    padding:20px;
}
.deviceLocation{
    display:flex;
    flex-direction: column;
}
.mySlider{
    display:flex;
    height:70px;
    width:100%;
}
.chkAll{
    display:flex;
    justify-content: flex-end;
    width:100%;
}
</style>


