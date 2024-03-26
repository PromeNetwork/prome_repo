<template>
  <div class="container-box">
    <div :class="ifMobile ? '' : 'flex-row-between'">
      <p class="network-top-left">Revolutionize<br />
        Energy_for_Everyone</p>
      <div class="network-top-rig">
        <p>No longer just being passive consumers, everyone can switch into an active participant in the green energy
          landscape.</p>
        <p>Prome provides efficient and sustainable solutions utilizing distributed networks and solar energy storage
          systems to democratize clean energy adoption.</p>
      </div>
    </div>
  </div>
  <div class="map-img">
    <img class="bottom-img" src="@/assets/images/map-top.png" alt="">
    <div class="top-img-content" id="mask">
      <img class="top-img" src="@/assets/images/map-bottom.png" alt="">
    </div>

  </div>
  <div class="container-box">
    <h6 v-if="ifMobile" class="index-tit">Missions</h6>
    <ul class="network-list">
      <li>Make green energy universally accessible</li>
      <li>Utilize blockchain technologies to achieve Net-Zero</li>
      <!-- <li>Accelerate global decarbonization</li> -->
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import scrRev from "@/utils/scrollreveal"

export default {
  name: 'NetWork',
  components: {},
  setup() {
    const videoRef = ref(null);
    const ifMobile = ref(false);

    onMounted(() => {
      ifMobile.value = document.getElementById('app').classList.contains('mobile-port');


      scrRev("#mask", {
        distance: '0px',
        opacity: 1,
        beforeReveal: function (el) {
          el.classList.add("show");
        },
        afterReset: function (el) {
          el.classList.remove("show");
        },
      })
    })
    return {
      videoRef,
      ifMobile
    };
  },
};
</script>

<style lang="less">
.network-top-left {
  font-size: 32px;
  line-height: 42px;
  color: #fff;
  font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
}

.network-top-rig {
  p {
    width: 430px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.4);
    // margin-bottom: 16px;
    text-align: left;
    font-style: normal;
  }

  p+p {
    margin-top: 16px;
  }
}

.map-img {
  width: 100%;
  height: 512px;
  margin: 56px 0 129px;
  position: relative;

  .bottom-img {
    position: absolute;
    width: 100%;
    height: 504px;
    left: 0px;
  }

  .top-img-content {
    height: 512px;
    background-repeat: no-repeat;
    mask-image: url(@/assets/images/linewipe-mask.png);
    -webkit-mask-image: url(@/assets/images/linewipe-mask.png);
    mask-size: 400% 300%;
    -webkit-mask-size: 400% 300%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: 0px 200%;
    -webkit-mask-position: 0px 200%;

  }

  .top-img-content.show {
    transition: -webkit-mask-position 1.5s linear 0s;
    -webkit-transition: -webkit-mask-position 1.5s linear 0s;
    /*实现mask移动动画，从而达到line wipe动画效果*/
    mask-position: center;
    -webkit-mask-position: center;
  }

  .top-img {
    width: 928px;
    height: 471px;
    position: absolute;
    left: 8px;
    top: 41px;

  }
}

.network-list {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  li {
    width: 430px;
    height: 130px;
    padding: 24px 0;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    font-size: 21px;
    color: #fff;
    line-height: 25px;
    text-align: left;
    font-style: normal;
  }

}


.mobile-port {
  .network-top-left {
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    font-weight: 400;
    font-size: 21px;
    color: #FFFFFF;
    line-height: 28px;
    text-align: left;
    font-style: normal;
  }

  .network-top-rig {
    p {
      width: 100%;
      font-size: 11px;
      line-height: 16px;
      color: rgba(255, 255, 255, 0.4);
      text-align: left;
      font-style: normal;
      //font-family: SFPro, SFPro;
      font-weight: 400;

      &:first-child {
        margin-top: 24px;
      }
    }

    p+p {
      margin-top: 12px;
    }
  }

  .map-img {
    width: 100%;
    height: calc(100vw / 393 * 236);
    margin: 61px 0 41px;
    position: relative;

    .bottom-img {
      position: absolute;
      width: 100%;
      height: calc(100vw / 393 * 206);
      left: 0px;
    }

    .top-img-content {
      height: calc(100vw / 393* 236);
      background-repeat: no-repeat;
      mask-image: url(@/assets/images/linewipe-mask.png);
      -webkit-mask-image: url(@/assets/images/linewipe-mask.png);
      mask-size: 400% 300%;
      -webkit-mask-size: 400% 300%;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-position: 0px 200%;
      -webkit-mask-position: 0px 200%;

    }

    .top-img-content.show {
      transition: -webkit-mask-position 1.5s linear 0s;
      -webkit-transition: -webkit-mask-position 1.5s linear 0s;
      /*实现mask移动动画，从而达到line wipe动画效果*/
      mask-position: center;
      -webkit-mask-position: center;
    }

    .top-img {
      // width: 380px;
      width: calc(380 / 393 * 100vw);
      // height: 193px;
      height: calc(193 * 100vw / 393);
      position: absolute;
      left: 0.825%;
      top: 7.198%;
    }
  }

  .network-list {
    margin-top: 17px;
    display: block;
    width: 70%;
    // justify-content: space-between;

    li {
      width: 100%;
      height: 83px;
      //font-family: SFPro, SFPro;
      padding: 13px 0;
      font-weight: 400;
      box-sizing: border-box;
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 16px;
      color: #fff;
      line-height: 19px;
      text-align: left;
      font-style: normal;
    }

  }
}
</style>
