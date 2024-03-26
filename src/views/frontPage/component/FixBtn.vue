<!-- eslint-disable no-undef -->

<template>
  <div class="fix-container">
    <div class="fix-btn">
      <div class="page-btn">
        <span id="thirdbg"></span>
        <div class="btns" id="pagebtn">
          <div class="active" type="1" @click="onProme0">PROME</div>
          <div type="2" @click="onExplore0">Explore</div>
        </div>
      </div>
      <!-- <div class="join-btn flex-center">Join Airdrop</div> -->
    </div>
    <div class="follw-btn flex-center" @click="openTwitter">
      <svg-icon class-name="close-x-icon" icon-class="close_x"></svg-icon>
      <div style="position:relative">
        <span class="text">Follow us on</span>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { useStore } from 'vuex';
// import { useRouter } from "vue-router";
import customEvent, { EVENT_TYPE } from '@/utils/emitEvent';

export default {
  name: 'FixBtn',
  components: {},
  emits: ["promeEvent", "exploreEvent"],
  setup(props, { emit }) {
    const videoRef = ref(null);
    let btnKey = ref("1");
    let slide = null;
    let btnOffset = 6;

    var Slideicon = function (element, options) {
      this.element = element;
      this.options = {
        cover: options.cover,
        index: options.index,
        callback: options.callback
      };
      this.init();
    };
    Slideicon.prototype.resize = function () {
      var _this = this;
      // eslint-disable-next-line no-undef
      const dom = $(this.element).find(".active")[0];
      // eslint-disable-next-line no-undef
      var width = $(dom).innerWidth();
      // eslint-disable-next-line no-undef
      var left = ($(dom).index()) * width;
      // eslint-disable-next-line no-undef
      // const params = $(dom).attr('type');
      // const leftOffset = params === "1" ? btnOffset : 0;
      _this.options.cover.attr("style", "left:" + (left + btnOffset) + "px; width:" + width + "px");
    }
    Slideicon.prototype.init = function () {
      var _this = this;
      _this.resize();
      this.element.on('click', 'div', function () {
        // eslint-disable-next-line no-undef
        $(this).nextAll().removeClass('active');
        // eslint-disable-next-line no-undef
        $(this).prevAll().removeClass('active');
        // eslint-disable-next-line no-undef
        var width = $(this).innerWidth();
        // eslint-disable-next-line no-undef
        var left = ($(this).index()) * width;
        // eslint-disable-next-line no-undef
        const params = $(this).attr('type');
        btnKey.value = params;
        // const leftOffset = params === "1" ? btnOffset : 0;
        _this.options.cover.attr("style", "left:" + (left + btnOffset) + "px; width:" + width + "px");
        // eslint-disable-next-line no-undef
        $(this).addClass("active");
        _this.options.callback(params)
      });
    };
    Slideicon.prototype.setDiv = function (dom) {
      var _this = this;
      // eslint-disable-next-line no-undef
      $(dom).nextAll().removeClass('active');
      // eslint-disable-next-line no-undef
      $(dom).prevAll().removeClass('active');
      // eslint-disable-next-line no-undef
      var width = $(dom).innerWidth();
      // eslint-disable-next-line no-undef
      var left = ($(dom).index()) * width;
      // eslint-disable-next-line no-undef
      // const params = $(dom).attr('type');
      // const leftOffset = params === "1" ? btnOffset : 0;
      _this.options.cover.attr("style", "left:" + (left + btnOffset) + "px; width:" + width + "px");
      // eslint-disable-next-line no-undef
      $(dom).addClass("active");
    }
    function setBtn(type) {
      // eslint-disable-next-line no-undef
      const dom = $("#pagebtn").children(["type"]).filter(".active")[0];
      // eslint-disable-next-line no-undef
      const dom1 = $("#pagebtn").children(["type"]).not(".active")[0];
      const currentType = dom.getAttribute("type");
      if (type !== currentType) {
        slide.setDiv(dom1)
      }

    }
    function openTwitter() {
      window.open("https://twitter.com/PROME_En");
    }

    onMounted(() => {
      const ifMobile = document.getElementById('app').classList.contains('mobile-port');
      if (ifMobile) {
        btnOffset = 4;
      }
      // eslint-disable-next-line no-undef
      slide = new Slideicon($("#pagebtn"), {
        index: 0,
        // eslint-disable-next-line no-undef
        cover: $("#thirdbg"),
        callback: function (data) {
          if (data === "1") {
            emit("promeEvent")
          } else {
            emit("exploreEvent")
          }
        }
      });
      customEvent.on(EVENT_TYPE.WINDOW_RESIZE, () => {
        slide.resize();
      })
    })
    return {
      videoRef,
      setBtn,
      btnKey,
      openTwitter
    };
  },
};
</script>

<style lang="less">
.fix-container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;

  .fix-btn {
    position: fixed;
    bottom: 48px;
    display: flex;

    .page-btn {
      position: relative;
      height: 45px;
      background: rgba(203, 203, 203, 0.2);
      border-radius: 23px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(24px);
      display: flex;
      align-items: center;
      color: #fff;
      justify-content: space-around;
      padding: 0px 6px;

      span {
        display: inline-block;
        position: absolute;
        left: 8px;
        // top: 8px;
        transition: left .4s;
        -webkit-transition: left .4s;
        -moz-transition: left .4s;
      }

      #thirdbg {
        width: 78px;
        height: 33px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 23px;
        backdrop-filter: blur(24px);
      }

      .btns {
        width: 100%;
        display: flex;
        justify-content: space-around;

        //font-family: SFPro, SFPro;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 16px;
        text-align: center;
        font-style: normal;
        z-index: 999;

        div {
          width: auto;
          padding: 8px 14px 9px 14px;
          // padding-top: 11px;
          border-radius: 23px;
        }
      }
    }

    .join-btn {
      margin-left: 21px;
      width: 161px;
      height: 60px;
      background: #CFFF8B;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(24px);
      font-size: 19px;
      //font-family: SFPro, SFPro;
      font-weight: 500;
      color: #000000;
      line-height: 21px;
    }
  }

  .follw-btn {
    cursor: pointer;
    position: fixed;
    bottom: 48px;
    display: flex;
    right: 32px;
    width: 45px;
    height: 45px;
    border-radius: 30px;
    background: rgba(203, 203, 203, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(24px);
    transition: transform 1s ease;

    .text {
      position: absolute;
      white-space: nowrap;
      color: #fff;
      font-size: 14px;
      //font-family: SFPro, SFPro;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 16px;
      transform: translate(-100%, -50%);
      opacity: 0;
      pointer-events: none;
      animation: doIn 0.5s ease-out 0s 1 forwards;
      text-align: right;
      font-style: normal;
    }

    &:hover {
      background-color: #8EABC0;

      .text {
        animation: doOut 0.5s ease 0s 1 forwards;
      }
    }

    .close-x-icon {
      font-size: 17px;
    }
  }
}

.fix-blur {
  .fix-btn {
    filter: blur(4px);
    opacity: 0.5;
  }

  .follw-btn {
    filter: blur(4px);
    opacity: 0.5;
  }
}

@keyframes doOut {
  0% {
    left: 0px;
    opacity: 0;
  }

  100% {
    left: -42px;
    opacity: 1;
  }
}

@keyframes doIn {
  0% {
    left: -42px;
    opacity: 1;
  }

  30% {
    left: 0px;
    opacity: 0;
  }

  100% {
    left: 0px;
    opacity: 0;
  }
}


.mobile-port {
  .fix-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;

    .fix-btn {
      position: fixed;
      bottom: 6.25%;
      display: flex;

      .page-btn {
        position: relative;
        height: 36px;
        background: rgba(203, 203, 203, 0.2);
        border-radius: 23px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(24px);
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: space-around;
        padding: 0px 4px;

        span {
          display: inline-block;
          position: absolute;
          left: 8px;
          // top: 8px;
          transition: left .4s;
          -webkit-transition: left .4s;
          -moz-transition: left .4s;
        }

        #thirdbg {
          width: 78px;
          height: 28px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 23px;
          backdrop-filter: blur(24px);
        }

        .btns {
          width: 100%;
          display: flex;
          justify-content: space-around;

          //font-family: SFPro, SFPro;
          font-weight: 500;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 14px;
          text-align: center;
          font-style: normal;

          div {
            width: auto;
            padding: 7px 10px;
            // padding-top: 11px;
            border-radius: 23px;
          }
        }
      }

      .join-btn {
        margin-left: 21px;
        width: 161px;
        height: 60px;
        background: #CFFF8B;
        border-radius: 30px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(24px);
        font-size: 19px;
        //font-family: SFPro, SFPro;
        font-weight: 500;
        color: #000000;
        line-height: 21px;
      }
    }

    .follw-btn {
      cursor: pointer;
      position: fixed;
      bottom: 6.25%;
      display: flex;
      right: 6.36%;
      width: 36px;
      height: 36px;
      border-radius: 30px;
      background: rgba(203, 203, 203, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(24px);
      transition: transform 1s ease;

      .text {
        position: absolute;
        white-space: nowrap;
        color: #fff;
        font-size: 14px;
        //font-family: SFPro, SFPro;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 16px;
        transform: translate(-100%, -50%);
        opacity: 0;
        pointer-events: none;
        animation: doIn 0.5s ease-out 0s 1 forwards;
        text-align: right;
        font-style: normal;
      }

      .close-x-icon {
        font-size: 15px;
      }
    }
  }

}
</style>
