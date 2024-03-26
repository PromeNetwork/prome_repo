<template>
  <div :class="ifMobile ? 'container-box' : 'energy-container'">
    <div class="panel panel-left">
      <div class="flex-row-between wow animated animate__fadeInUp">
        <div class="line">
          <template v-if="ifMobile">
            <span>Energy_</span>
            <span>Application</span>
          </template>
          <span v-else>Energy_Application</span>
        </div>
        <div class="mask">
          <div class="energy_t energy"></div>
        </div>
      </div>
      <div class="flex-row-between wow animated animate__fadeInUp">
        <div class="line">

          <template v-if="ifMobile">
            <span>Energy_</span>
            <span>Oracle</span>
          </template>
          <span v-else>Energy_Oracle</span>
        </div>
        <div class="mask">
          <div class="energy_m energy"></div>
        </div>
      </div>
      <div class="flex-row-between wow animated animate__fadeInUp">
        <div class="line">

          <template v-if="ifMobile">
            <span>Energy_</span>
            <span>System</span>
          </template>
          <span v-else>Energy_System</span>
        </div>
        <div class="mask">
          <div class="energy_b energy"></div>
        </div>
      </div>
      <!-- <div class="mask">
          <div class="energy_m energy"></div>
        </div>
        <div class="mask">
          <div class="energy_b energy"></div>
        </div> -->

      <div class="trading flex-row-column-center wow animated animate__fadeIn" data-wow-delay='0.6s'>
        <div class="arrow-svg">
          <svg-icon class-name="arrow-line" icon-class="arrow"></svg-icon>
        </div>
        <span>trading</span>
      </div>
      <div class="mining flex-row-column-center wow animated animate__fadeIn" data-wow-delay='0.6s'>
        <div class="arrow-svg">
          <svg-icon class-name="arrow-line" icon-class="arrow"></svg-icon>
        </div>
        <span>mining</span>
      </div>
    </div>
    <div class="prome-txt">
      <div :class="`sl-panel ${ifMobile ? '' : 'flex-row-between'}`">
        <div class="title">PROME</div>
        <div class="icon-list">
          <div class="icon-item flex-column-center">
            <div class="p-icon solar"></div>
            <span>Solar</span>
          </div>
          <div class="icon-item flex-column-center">
            <div class="p-icon storage"></div>
            <span>Storage</span>
          </div>
          <div class="icon-item flex-column-center">
            <div class="p-icon blockchain"></div>
            <span>Blockchain</span>
          </div>
          <div class="icon-item flex-column-center">
            <div class="p-icon ai"></div>
            <span>Ai</span>
          </div>
          <div class="icon-item flex-column-center">
            <div class="p-icon lot"></div>
            <span>loT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'Head',
  components: {},
  setup() {
    const ifMobile = ref(false);
    onMounted(() => {
      ifMobile.value = document.getElementById('app').classList.contains('mobile-port');
    })
    return {
      ifMobile
    };
  },
};
</script>

<style lang="less">
.energy-container {
  margin: 0px auto 0;
  width: 920px;
  position: relative;

  .panel-left {
    font-size: 16px;
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 18px;
    text-align: left;
    font-style: normal;
    padding-left: 20px;

    /*  &:first-child {
      margin-top: 342px;
    }
 */
    .line {
      background: url(@/assets/images/line.png) no-repeat center;
      background-size: 100% 100%;
      width: 388px;
      height: 36px;
    }

    .line+.line {
      margin-top: 215px;
    }
  }
}

.panel {
  position: relative;
  // width: 100%;

  .flex-row-between {
    align-items: center;
    position: relative;

    .line {
      margin-top: 57px;
    }

    &:first-child {
      padding-top: 129px;
      z-index: 3;
    }

    &:nth-child(2) {
      z-index: 2;
    }

    &:last-child {
      z-index: 1;
    }
  }

  .mask {
    height: 317px;
    width: 496px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-row-between+.flex-row-between {
    margin-top: -120px;
  }

  .arrow-line {
    width: 9px !important;
    height: 132px !important;
    // font-size: 176px;
  }

  .arrow-svg {
    position: relative;
  }

  /*   .arrow-svg::before {
    content: "";
    position: absolute;
    height: 10px; // 流体的宽度，可以适当宽一些，但是注意位置偏移
    width: 1px; // 流体路线长度，最好与线保持一致
    left: 50%;
    transform: translate(-50%, 0px);
    background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.8)); // 流体样式，这里是渐变
    animation: fade-left 2s linear infinite; //使用fade-left动画
    box-shadow: 0px 0px 17px 5px #8EABC0; // 外发光
  } */



  .arrow-svg+span {
    margin-left: 9px;
  }

  .trading {
    position: absolute;
    left: 425px;
    top: 320px;
    font-size: 12px;
    //font-family: SFPro, SFPro;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    line-height: 18px;
  }

  .mining {
    position: absolute;
    left: 425px;
    top: 517px;
    font-size: 12px;
    //font-family: SFPro, SFPro;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    line-height: 18px;
  }

}

.prome-txt {
  color: #fff;
  padding-top: 89px;
  padding-bottom: 200px;

  .sl-panel {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 27px 46px 24px 48px;
    align-items: center;

    .title {
      font-size: 16px;
      font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 18px;
    }

    .icon-list {
      display: flex;
      font-size: 11px;
      //font-family: SFPro, SFPro;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.4);
      line-height: 18px;

      /* .icon-item:hover {
        span {
          color: #fff;
        }

        .solar {
          background: url(@/assets/images/solar_h.png) no-repeat center;
          background-size: 100% 100%;
        }

        .storage {
          background: url(@/assets/images/storage_h.png) no-repeat center;
          background-size: 100% 100%;
        }

        .blockchain {
          background: url(@/assets/images/blockchain_h.png) no-repeat center;
          background-size: 100% 100%;
        }

        .ai {
          background: url(@/assets/images/ai_h.png) no-repeat center;
          background-size: 100% 100%;
        }

        .lot {
          background: url(@/assets/images/lot_h.png) no-repeat center;
          background-size: 100% 100%;
        }
      } */

      .solar {
        background: url(@/assets/images/solar.png) no-repeat center;
        background-size: 100% 100%;
      }

      .storage {
        background: url(@/assets/images/storage.png) no-repeat center;
        background-size: 100% 100%;
      }

      .blockchain {
        background: url(@/assets/images/blockchain.png) no-repeat center;
        background-size: 100% 100%;
      }

      .ai {
        background: url(@/assets/images/ai.png) no-repeat center;
        background-size: 100% 100%;
      }

      .lot {
        background: url(@/assets/images/lot.png) no-repeat center;
        background-size: 100% 100%;
      }
    }

    .p-icon {
      width: 56px;
      height: 56px;
      margin-bottom: 3px;
    }

    .icon-item+.icon-item {
      margin-left: 30px;
    }

  }
}

.energy {
  position: absolute;
  width: 496px;
  height: 496px;
}

.energy_t {
  background: url(@/assets/images/energy_t.png) no-repeat center;
  background-size: 100% 100%;
  background-origin: padding-box;
  background-clip: border-box;
  z-index: 3;

  &:hover {
    background: url(@/assets/images/energy_t_h.png) no-repeat center;
    background-size: 100% 100%;
    background-origin: padding-box;
    background-clip: border-box;
  }
}

.energy_m {
  background: url(@/assets/images/energy_m.png) no-repeat center;
  background-size: 100% 100%;
  background-origin: padding-box;
  background-clip: border-box;
  z-index: 2;

  &:hover {
    background: url(@/assets/images/energy_m_h.png) no-repeat center;
    background-size: 100% 100%;
    background-origin: padding-box;
    background-clip: border-box;
  }
}

.energy_b {
  background: url(@/assets/images/energy_b.png) no-repeat center;
  background-size: 100% 100%;
  background-origin: padding-box;
  background-clip: border-box;
  z-index: 1;

  &:hover {
    background: url(@/assets/images/energy_b_h.png) no-repeat center;
    background-size: 100% 100%;
    background-origin: padding-box;
    background-clip: border-box;
  }
}

@keyframes fade-left {
  0% {
    bottom: 0px;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    bottom: calc(100% - 16px); // 到达终点时位置要减去自身的长度
    opacity: 0;
  }
}


.mobile-port {
  .container-box {
    margin: 0px auto 0;
    position: relative;

    .panel-left {
      font-size: 11px;
      font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 18px;
      // padding-left: 20px;

      .line {
        background: transparent;
        position: absolute;
        left: 0px;

        span {
          display: block;
        }
      }
    }
  }

  .energy {
    position: absolute;
    width: calc(87.78vw - 54px);
    height: calc(87.78vw - 54px);
  }

  .panel {
    position: relative;

    .flex-row-between {
      align-items: normal;
      position: relative;
      justify-content: center;

      .line {
        margin-top: 6%;
      }

      &:first-child {
        padding-top: 94px;
      }

    }

    .mask {
      height: calc((87.78vw - 54px)* 0.640);
      width: calc(87.78vw - 54px);
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flex-row-between+.flex-row-between {
      margin-top: calc((87.78vw - 54px)* -0.242);
    }

    .arrow-line {
      height: calc((87.78vw - 54px)*0.27) !important;
    }

    .trading {
      left: calc(87.78vw - 54px);
      top: calc((87.78vw - 54px)*0.38 + 94px);
      font-size: 10px;
    }

    .mining {
      left: calc(87.78vw - 54px);
      top: calc((87.78vw - 54px)*0.778 + 94px);
      font-size: 10px;
    }
  }

  .prome-txt {
    color: #fff;
    padding-top: 78px;
    padding-bottom: 96px;

    .sl-panel {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 12px 15px 19px 15px;
      align-items: center;
      overflow: hidden;

      .title {
        font-size: 11px;
        font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 18px;
        margin-bottom: 15px;
        margin-left: 1px;
      }

      .icon-list {
        display: flex;
        font-size: 11px;
        //font-family: SFPro, SFPro;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
        line-height: 18px;
        overflow-y: auto;
      }

      .p-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
      }

      .icon-item+.icon-item {
        margin-left: 25px;
      }

    }

    @media screen and (min-width: 445px) {
      .icon-list {
        justify-content: space-between;
      }
    }
  }
}
</style>
