<template>
  <!-- <div class="header-container"> -->
  <div class="video-panel">
    <video ref="videoRef" class="head-video" autoplay loop muted preload="auto" playsinline='true'
      x5-video-player-type="h5">
      <source src="@/assets/video/headmv.webm" type="video/mp4" data-wf-ignore="true">
    </video>
    <img class="head-video" v-if="!isVideoLoaded" src="@/assets/images/videobak.jpg" alt="">
  </div>

  <div class="header-log">
    <svg-icon class-name="logo-left-icon" icon-class="prome"></svg-icon>
    <svg-icon class-name="logo-middle-icon" icon-class="head_middle"></svg-icon>
    <div class="right-btn" @click="openTwitter">
      <span>Follow us on</span>
      <svg-icon class-name="logo-right-icon" icon-class="close_x"></svg-icon>
    </div>
  </div>
  <div class="type-content">
    <div><span id="type-d"> </span></div>
    <div style="transform: translate(11px, 0);"><span id="type-d1"> </span></div>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Head',
  components: {},
  setup() {
    const videoRef = ref(null);
    const isVideoLoaded = ref(false);
    function onEnd() {
      document.querySelector(".typed-cursor").style.display = "none";
      var options = {
        strings: ["decarbonization"],
        startDelay: 0,
        typeSpeed: 120,
        loop: false,
        showCursor: true,
        cursorChar: '&#9611;',
        autoInsertCss: true,
      };
      // eslint-disable-next-line no-undef
      new Typed('#type-d1', options);
    }
    function openTwitter() {
      window.open("https://twitter.com/PROME_En");
    }
    onMounted(() => {
      const ifMobile = document.getElementById('app').classList.contains('mobile-port');

      var options = {
        strings: ifMobile ? ['Accelerating'] : [
          'Accelerating_decarbonization',
        ],
        startDelay: 2000,
        typeSpeed: 120,
        loop: false,
        showCursor: true,
        cursorChar: '&#9611;',
        autoInsertCss: true,
        // onComplete: onEnd,
        preStringTyped: () => {
          document.querySelector(".typed-cursor").style.display = "inline";
        }
      };
      if (ifMobile) {
        options.onComplete = onEnd
      }
      // eslint-disable-next-line no-undef
      new Typed('#type-d', options);
      document.querySelector(".typed-cursor").style.display = "none";

      videoRef.value.addEventListener('loadedmetadata', () => {
        isVideoLoaded.value = true;
      });
    })
    return {
      videoRef,
      openTwitter,
      isVideoLoaded
    };
  },
};
</script>

<style lang="less">
.header-container {
  position: relative;
  display: flex;
  color: #fff;

  .video-panel {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .header-log {
    z-index: 1;
  }

  .type-content {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 42px;
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    font-weight: 400;
    // padding-top: 512px;

    justify-content: center;

    #type-d {
      color: #FFFFFF;
      line-height: 55px;
      white-space: pre;
      text-align: center;
    }

    .typed-cursor {
      margin-left: 5px;
    }
  }

  .logo-left-icon {
    position: absolute;
    left: 9.03%;
    top: 22px;
    font-size: 85px;
  }

  .logo-middle-icon {
    position: absolute;
    font-size: 49px;
    left: 50%;
    top: 48px;
    transform: translate(-50%, 0);
  }

  .right-btn {
    position: absolute;
    display: flex;
    align-items: center;
    right: 9.03%;
    top: 59px;
    font-size: 14px;
    cursor: pointer;

    .logo-right-icon {
      margin-left: 8px;
      font-size: 14px;
    }
  }

  .head-video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
}

.mobile-port {
  .header-container {
    position: relative;
    display: flex;
    color: #fff;

    .video-panel {
      position: relative;
      height: 100vh;
      width: 100%;
    }

    .header-log {
      z-index: 1;
    }

    .type-content {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 28px;
      font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
      font-weight: 400;
      line-height: 37px;
      // padding-top: 512px;

      justify-content: center;

      #type-d {
        color: #FFFFFF;
        line-height: 55px;
        white-space: pre;
        text-align: center;
      }

      .typed-cursor {
        margin-left: 5px;
      }
    }

    .logo-left-icon {
      position: absolute;
      left: 6.11%;
      top: 5.47%;
      width: 61px;
      height: 10px;
      // font-size: 85px;
    }

    .logo-middle-icon {
      position: absolute;
      font-size: 33px;
      left: 50%;
      top: 3.75%;
      transform: translate(-50%, 0);
    }

    .right-btn {
      position: absolute;
      //font-family: SFPro, SFPro;
      font-weight: 400;
      line-height: 12px;
      text-align: right;
      font-style: normal;
      display: flex;
      align-items: center;
      right: 9.03%;
      top: 5.47%;
      font-size: 10px;
      cursor: pointer;

      .logo-right-icon {
        margin-left: 6px;
        font-size: 14px;
      }
    }

    .head-video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
