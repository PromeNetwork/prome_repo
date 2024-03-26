<template>
    <div :class="!!ifMobile ? '' : 'flex-row-between'">
        <div :class="`operates-lef ${!!ifMobile ? '' : 'operates-sticky'}`">
            <h6 class="index-tit">Power Your Future:<br> Storage, Solar, Blockchain</h6>
            <p>Mine</p>
        </div>
        <div class="operates-rig">
            <video v-if="!ifMobile" v-show="showVideo" ref="netVideoRef" muted id="net-video" webkit-playsinline='true'
                playsinline='true' x5-video-player-type="h5">
                <source src="@/assets/video/hardware.mp4" type="video/mp4">
            </video>
            <div class="operates-info">
                <p>Storage makes it possible to commoditize renewable energy. <br />
                    With storage, you are a market maker, not only a price taker.</p>
                <div class="operates-info-line"></div>
                <h6 class="index-tit">Be_a </h6>
                <h6 class="large-tit">Prosumer </h6>
                <span>"You can easily utilize and sell green energy. Typically, you can benefit from green energy,
                    commodify
                    electronic assets to maximize their value, and earn additional contribution rewards from the PROME
                    network. Even in the worst-case scenario, your invested capital may only result in a reduction of
                    electricity costs without generating additional returns."</span>

                <div class="operates-info-line"></div>
                <!-- <h6 class="index-tit">Power Your Future</h6>
                <div class="operates-tit">
                    <a>Storage</a>
                    <span></span>
                    <a>Solar </a>
                    <span></span>
                    <a>Blockchain</a>
                </div>
                <div class="operates-info-line"></div> -->
            </div>
            <video v-if="ifMobile" ref="netVideoRef" muted id="net-video" :key="rex">
                <source src="@/assets/video/hardware.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <!-- <div class="operates-lef operates-bot">
        <h6 class="index-tit">How_the_Prome_Network_Operates</h6>
        <p>Use</p>
    </div> -->
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import scrRev from "@/utils/scrollreveal"

export default {
    name: 'Operates',
    components: {},
    setup() {
        const state = reactive({
            showVideo: true,
            currentTime: 0,
            rex: 0,
            totalTime: 0
        })

        const ifMobile = ref(false);
        const netVideoRef = ref(null);
        let timeInterval = null;
        let perBoundY = null;

        function backPlay() {
            const targetTime = state.currentTime - 0.08;
            if (targetTime < 0) {
                if (timeInterval) {
                    clearInterval(timeInterval);
                    timeInterval = null;
                }
                return;
            }
            state.currentTime = targetTime;
            netVideoRef.value.currentTime = targetTime;
        }

        onMounted(() => {
            ifMobile.value = document.getElementById('app').classList.contains('mobile-port');
            scrRev("#net-video", {
                distance: '0px',
                opacity: 1,
                viewOffset: {  // 计算元素可见性时，展开/收缩视口的活动边界。
                },
                beforeReveal: function (el) {
                    el.currentTime = 0;
                    el.play();
                },
                afterReset: function () { },
            })
            netVideoRef.value.addEventListener('loadedmetadata', () => {
                state.totalTime = netVideoRef.value.duration;
                state.currentTime = netVideoRef.value.currentTime = netVideoRef.value.duration;
            });

            document.addEventListener('scroll', function () {
                let bounding = netVideoRef.value.getBoundingClientRect();
                if (bounding.y <= document.documentElement.clientHeight && -bounding.y <= bounding.height) {
                    if (!perBoundY) {
                        perBoundY = bounding.y;
                        return;
                    }
                    if (bounding.y - perBoundY > 0 && bounding.y > (document.documentElement.clientHeight / 2 - 330)) { //页面往上
                        // console.log(">超出下半部 继续出");
                        if (netVideoRef.value.paused == true) {
                            if (timeInterval) {
                                clearInterval(timeInterval);
                                timeInterval = null;
                            }
                            state.currentTime = netVideoRef.value.currentTime;
                            timeInterval = setInterval(backPlay, 100);
                        }
                    } else if (bounding.y - perBoundY < 0 && bounding.y < (document.documentElement.clientHeight / 2 - 330)) {//页面往下
                        // console.log("<");
                        if (netVideoRef.value.paused == true) {
                            if (timeInterval) {
                                clearInterval(timeInterval);
                                timeInterval = null;
                            }
                            state.currentTime = netVideoRef.value.currentTime;
                            timeInterval = setInterval(backPlay, 100);
                        }
                    } else if (bounding.y - perBoundY > 0 && bounding.y < (document.documentElement.clientHeight / 2 - 330)) {
                        // console.log(">还在上半部 继续页面往上");
                        if (netVideoRef.value.paused == true && netVideoRef.value.currentTime < netVideoRef.value.duration) {
                            if (timeInterval) {
                                clearInterval(timeInterval);
                                timeInterval = null;
                            }
                            netVideoRef.value.play();
                        }

                    } else if (bounding.y - perBoundY < 0 && bounding.y > (document.documentElement.clientHeight / 2 - 330)) {
                        if (netVideoRef.value.paused == true && netVideoRef.value.currentTime < netVideoRef.value.duration) {
                            if (timeInterval) {
                                clearInterval(timeInterval);
                                timeInterval = null;
                            }
                            netVideoRef.value.play();
                        }
                    }
                    perBoundY = bounding.y;
                } else {
                    if (timeInterval) {
                        clearInterval(timeInterval);
                        timeInterval = null;
                    }
                }
            }, true)
        })
        return {
            ...toRefs(state),
            netVideoRef,
            ifMobile
        };
    },
};
</script>

<style lang="less">
.operates-sticky {
    position: sticky;
    height: 208px;
    top: 10px;
    // margin-bottom: 20px;
}

.operates-lef {
    font-size: 32px;
    color: #fff;
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    line-height: 42px;
    text-align: left;
    font-style: normal;


    h6 {
        font-size: 14px;
        font-weight: 400;
    }
}

.operates-rig {
    position: relative;

    #net-video {
        mix-blend-mode: lighten;
        background-color: transparent;
        color: transparent;
        width: 880px;
        height: 660px;
        position: absolute;
        right: -177px;
        pointer-events: none;
    }

    .operates-info {
        width: 600px;
        margin-top: 680px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
        //font-family: SFPro, SFPro;
        line-height: 18px;

        .index-tit {
            margin-top: 16px;
            font-size: 14px;
            font-weight: 400;
            font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
        }

        .large-tit {
            margin-top: 5px;
            font-weight: 500;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            line-height: 18px;
            text-align: left;
            font-style: normal;
            text-transform: uppercase;
        }

        span {
            color: rgba(255, 255, 255, 0.4);
            margin-top: 12px;
            display: inline-block;
            font-weight: 400;
        }

        &-line {
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.4);
            margin: 23px 0 0px;
        }

        .operates-tit {
            margin-top: 25px;

            a {
                font-size: 28px;
                line-height: 33px;
                color: #fff;
            }

            span {
                width: 1px;
                height: 33px;
                display: inline-block;
                background: rgba(255, 255, 255, 0.4);
                margin: 0 55px;
            }
        }
    }
}

.operates-bot {
    margin-top: 100px;
}


.mobile-port {

    .operates-sticky {
        position: sticky;
        height: 208px;
        top: 10px;
        // margin-bottom: 20px;
    }

    .operates-lef {
        font-size: 21px;
        color: #fff;
        font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
        line-height: 28px;

        h6 {
            font-size: 11px;
            line-height: 14px;
            font-weight: 400;
        }
    }

    .operates-rig {

        #net-video {
            mix-blend-mode: lighten;
            background-color: transparent;
            color: transparent;
            width: 100vw;
            height: calc(100vw / 4* 3);
            position: absolute;
            right: calc((100% - 100vw) / 2);
            top: 0;
        }

        .operates-info {
            width: 100%;
            padding-top: calc(100vw / 4* 3 + 35px);
            margin-top: 0px;
            font-size: 11px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            //font-family: SFPro, SFPro;
            line-height: 18px;

            .index-tit {
                font-size: 11px;
                font-weight: 400;
                font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
            }

            .large-tit {
                margin-top: 4px;
                font-weight: 500;
                font-size: 18px;
                color: rgba(255, 255, 255, 0.9);
                line-height: 18px;
                text-align: left;
                font-style: normal;
                text-transform: uppercase;
            }

            span {
                color: rgba(255, 255, 255, 0.4);
                margin-top: 12px;
                display: inline-block;
                line-height: 16px;
                margin-bottom: 6px;
                font-weight: 400;
            }

            &-line {
                width: 100%;
                height: 1px;
                background: rgba(255, 255, 255, 0.4);
                margin: 16px 0px;
            }

            .operates-tit {
                margin-top: 25px;

                a {
                    font-size: 28px;
                    line-height: 33px;
                    color: #fff;
                }

                span {
                    width: 1px;
                    height: 33px;
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.4);
                    margin: 0 55px;
                }
            }
        }
    }
}
</style>