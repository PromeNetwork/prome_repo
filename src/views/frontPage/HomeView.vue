<template>
  <div>
    <div class="header-container" ref="header">

      <Head></Head>
    </div>
    <div class="introduce flex-center">
      <span class="container-box">
        PROME Network is a decentralized peer-to-peer green energy network that leverages blockchain and tokenization to
        create a sustainable future for everyone.
      </span>
    </div>
    <div class="network">
      <div class="container">
        <NetWork ref="netmap" />
      </div>
    </div>
    <div class="operates" ref="operates">
      <div class="container-box">
        <Operates />
      </div>
      <!-- use -->

    </div>
    <div class="pawel">
      <div class="organ">
        <div :class="`container-box ${!!ifMobile ? '' : 'flex-row-between'}`">
          <span>Use</span>
          <Organ />
        </div>
      </div>
      <img v-if="ifMobile" src="../../assets/images/index_pawel_mobile.png" alt="">
      <img v-else src="../../assets/images/index_pawel.png" alt="">
    </div>
    <div class="prome">
      <Energy />
    </div>
    <div class="contact flex-column-center">
      <p>Still_have_questions?</p>
      <span>Contact us for more information.</span>
      <a target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfLcvYF2uZxm4ZIK3lHj88XskWAMajcm0bx_iZZQMUZpLPisQ/viewform?usp=sf_link">Contact</a>
    </div>
    <FixBtn ref="fixBtnRef" @promeEvent="onProme" @exploreEvent="onExplore" />

    <div class="footer">
      <ul class="foot-list">
        <li><img src="../../assets/images/footlogo.png" alt=""></li>
        <template v-if="ifMobile">
          <li><svg-icon class-name="footer-icon" icon-class="close_x"></svg-icon>
          </li>
          <li>© 2024 Prome. All rights reserved.</li>
        </template>

        <template v-else>
          <li>© 2024 Prome. All rights reserved.</li>
          <li>
            <a target="_blank" href="https://twitter.com/PROME_En"><svg-icon class-name="footer-icon"
                icon-class="close_x">
              </svg-icon></a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import Head from './component/Head.vue'
import NetWork from './component/NetWork.vue'
import Operates from './component/Operates.vue'
import FixBtn from './component/FixBtn.vue'
import Organ from './component/Organ.vue'
import Energy from './component/Energy.vue'

export default {
  name: 'HomeView',
  components: { Head, NetWork, Operates, FixBtn, Organ, Energy },
  setup() {
    const ifMobile = ref(false);
    const header = ref(null);
    const operates = ref(null);
    const netmap = ref(null);
    const fixBtnRef = ref(null);
    let pawelUrl = ref("../../assets/images/index_pawel.png")
    const state = reactive({
      topValue: 0,
      ifScroll: false
    })

    window.wow = null;
    let interval = null;

    var lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    function getPawUrl() {
      return ifMobile.value ? '../../assets/images/index_pawel_mobile.png' : '../../assets/images/index_pawel.png'
    }

    function onExplore() {
      state.ifScroll = true;
      operates.value.scrollIntoView({ behavior: 'smooth' });
    }

    function onProme() {
      state.ifScroll = true;
      header.value.scrollIntoView({ behavior: 'smooth' });
    }

    function handleScroll() {
      if (interval == null)// 未发起时，启动定时器，1秒1执行
        interval = setInterval(scrollTimer, 100);
      state.topValue = document.documentElement.scrollTop || document.body.scrollTop;;
    }

    function scrollTimer() {
      const operateDom = document.getElementById('net-video');
      // const netvideo = document.getElementById('net-video');
      // const fixbtn = document.querySelector('.fix-container');
      const headProme = document.querySelector('.header-container');
      state.topValue = document.getElementById("app").scrollTop;

      // 若两者相等则表示停止滚动
      if (state.topValue === lastScrollPosition) {
        // console.log("停止滚动");
        // if (fixbtn) {
        //   fixbtn.classList.remove('fix-blur')
        // }
        state.ifScroll = false;
        clearInterval(interval);
        interval = null;
        // 这里可以写其他需要执行的操作或调用其他函数
      } else {
        // if (fixbtn) {
        //   fixbtn.classList.add('fix-blur');
        // }
        if (operateDom && window.wow?.isVisible(operateDom) && !state.ifScroll) {
          fixBtnRef.value.setBtn("2")
        }
        if (headProme && window.wow?.isVisible(headProme) && !state.ifScroll) {
          fixBtnRef.value.setBtn("1")
        }
      }
      // 将当前滚动位置保存为上次滚动位置
      lastScrollPosition = state.topValue;
    }


    onMounted(() => {
      ifMobile.value = document.getElementById('app').classList.contains('mobile-port');
      window.addEventListener("scroll", handleScroll, true);
    })
    return {
      ifMobile,
      operates,
      onExplore,
      onProme,
      header,
      handleScroll,
      fixBtnRef,
      netmap,
      pawelUrl,
      getPawUrl
    };
  },
};
</script>

<style lang="less">
.introduce {
  width: 100%;
  height: 219px;
  background: #CFFF8B;

  span {
    font-size: 24px;
    //font-family: SFPro, SFPro;
    font-weight: 400;
    color: #000000;
    line-height: 29px;
    text-align: left;
    // letter-spacing: -2px;
  }
}

.network {
  width: 100%;
  background: linear-gradient(180deg, rgba(25, 25, 25, 1) 50%, rgba(25, 25, 25, 0.85) 100%);
  padding: 146px 0 160px;
}

.operates {
  background: #191919;
  padding: 96px 0 199px;


}

.pawel {
  background: #191919;
  width: 100%;
  height: 753px;
  position: relative;

  .organ {
    position: absolute;
    width: 100%;
    top: -27px;
  }

  .container-box {
    span {
      font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
      font-weight: 400;
      font-size: 32px;
      color: #FFFFFF;
      line-height: 42px;
      text-align: left;
      font-style: normal;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.prome {
  width: 100%;
  background: #191919;
  // padding: 10px 0 260px;
}

.contact {
  width: 100%;
  padding: 72px 0 60px;
  background: #CFFF8B;
  font-size: 32px;
  color: #000;
  font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
  line-height: 42px;
  text-align: center;
  font-style: normal;

  span {
    font-size: 14px;
    display: block;
    margin-top: 10px;
    //font-family: SFPro, SFPro;
    line-height: 18px;
  }

  a {
    width: 93px;
    height: 40px;
    border: 1px solid #000;
    //font-family: SFPro, SFPro;
    border-radius: 20px;
    font-size: 14px;
    line-height: 40px;
    color: #000;
    text-align: center;
    display: block;
    margin-top: 40px;
    font-weight: 500;

    &:hover {
      background: #000000;
      border-radius: 20px;
      border: 1px solid #000000;
      color: #CFFF8B;
    }
  }
}

.footer {
  background-color: #252A1E;
  height: 267px;
  display: flex;
  justify-content: center;
  align-items: center;

  .foot-list {
    width: 1180px;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    li {
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      padding-top: 23px;

      //font-family: SFPro, SFPro;
      font-weight: 400;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4);
      line-height: 14px;
      text-align: left;
      font-style: normal;

      &:first-child,
      &:last-child {
        width: 280px;
      }

      &:nth-child(2) {
        width: 580px;
      }
    }

    img {
      width: 156px;
      height: 41px;
    }

    .footer-icon {
      font-size: 18px;
      opacity: 0.9;
    }
  }
}



.mobile-port {
  .introduce {
    width: 100%;
    height: calc(100vw / 393* 236);
    background: #CFFF8B;

    span {
      font-size: 16px;
      //font-family: SFPro, SFPro;
      font-weight: 400;
      color: #000000;
      line-height: 19px;
      text-align: left;
      // letter-spacing: 0px;
    }
  }

  .network {
    width: 100%;
    background: linear-gradient(180deg, rgba(25, 25, 25, 1) 50%, rgba(25, 25, 25, 0.85) 100%);
    padding: 70px 0 128px;
  }

  .operates {
    background: #191919;
    padding: 50px 0 199px;


  }

  .pawel {
    background: #191919;
    width: 100%;
    height: 743px;
    position: relative;

    .organ {
      position: absolute;
      width: 100%;
      top: -55px;
    }

    .container-box {
      span {
        font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
        font-weight: 400;
        font-size: 21px;
        color: #FFFFFF;
        line-height: 28px;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .contact {
    width: auto;
    padding: 64px 24px 62px 24px;
    background: #CFFF8B;
    font-size: 21px;
    color: #000;
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    line-height: 28px;
    text-align: center;

    span {
      font-size: 11px;
      display: block;
      margin-top: 8px;
      //font-family: SFPro, SFPro;
      line-height: 18px;
    }

    a {
      width: 74px;
      height: 36px;
      border: 1px solid #000;
      //font-family: SFPro, SFPro;
      border-radius: 23px;
      font-size: 14px;
      line-height: 36px;
      color: #000;
      text-align: center;
      display: block;
      margin-top: 20px;
      font-weight: 500;

      &:hover {
        background: #000000;
        border-radius: 23px;
        border: 1px solid #000000;
        color: #CFFF8B;
      }
    }
  }

  .footer {
    background-color: #252A1E;
    height: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    .foot-list {
      width: 87.78%;
      margin: 0 auto;
      display: block;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      li {
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        padding-top: 16px;

        //font-family: SFPro, SFPro;
        font-weight: 400;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.4);
        line-height: 13px;
        text-align: left;
        font-style: normal;
        width: 100%;

        &:first-child {
          margin-top: 36px;
        }

        &:last-child {
          margin-top: 21px;
          padding-bottom: 64px;
        }

        &:nth-child(2) {
          margin-top: 43px;
          border-top: none;
        }
      }

      img {
        width: 125px;
        height: 33px;
      }

      .footer-icon {
        font-size: 18px;
        opacity: 0.9;
      }
    }
  }

}
</style>
