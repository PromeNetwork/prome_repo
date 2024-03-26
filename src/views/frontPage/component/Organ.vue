<!-- eslint-disable no-undef -->

<template>
  <div class="organ-container">
    <ul id="cardArea" class="card-area clearfix">
      <li class="card-item active" targetHeight="301px">
        <div class="card">
          <div class="card-content content-first ">
            <div class="content-first-content">
              <p>Users</p>
              <svg-icon class-name="t-icon" icon-class="user"></svg-icon>
            </div>
          </div>
          <div class="card-content content-second" style="height: 301px;">
            <div class="main-card">
              <div class="main-info">
                <span>Users</span>
                <h6>Passive price taker? Active market maker!</h6>
                <p>
                  Households, businesses, and even factories can utilize green energies.
                  By reducing the cost of obtaining green energy and contributing to the balance of the PROME Network
                  with
                  your green energy application, you can receive additional incentives.
                </p>
              </div>
              <svg-icon class-name="t-icon" icon-class="user"></svg-icon>
            </div>

          </div>
        </div>
      </li>
      <li class="card-item" targetHeight="283px">
        <div class="card">
          <div class="card-content content-first ">
            <div class="content-first-content">
              <p>Investors</p>
              <svg-icon class-name="t-icon" icon-class="invert"></svg-icon>
            </div>
          </div>

          <div class="card-content content-second" style="height: 283px;">
            <div class="main-card">
              <div class="main-info">
                <span>Investors</span>
                <h6>Limited cost, tremendous benefits.</h6>
                <p>Participate earlier and more fairly in large-scale renewable energy project investments, maximizing
                  capital efficiency and returns.</p>
              </div>
              <svg-icon class-name="t-icon" icon-class="invert"></svg-icon>
            </div>
          </div>
        </div>
      </li>
      <li class="card-item" targetHeight="353px">
        <div class="card">
          <div class="card-content content-first ">
            <div class="content-first-content">
              <p>Operators</p>
              <svg-icon class-name="t-icon" icon-class="operat"></svg-icon>
            </div>
          </div>

          <div class="card-content content-second" style="height: 353px;">
            <div class="main-card">
              <div class="main-info">
                <span style="letter-spacing: -2px; line-height:18px;">Operators</span>
                <h6>Expanded network brings additional rewards.</h6>
                <p>Contribute to the operation of the ecological network by operating Virtual Power Plants (VPP),
                  managing
                  equipment maintenance services, and receive rewards for expanding the network.</p>
                <p class="p-wrap">If you own land, rooftops, or have a desire to participate in the clean energy market,
                  you can join
                  Prome Network and become an operator. You will establish your own team to provide convenient and
                  accessible clean energy to users, earning income for yourself and your clients.</p>
              </div>
              <svg-icon class-name="t-icon" icon-class="operat"></svg-icon>
            </div>

          </div>
        </div>
      </li>
      <li class="card-item" targetHeight="424px">
        <div class="card">
          <div class="card-content content-first">
            <div class="content-first-content">
              <p>Contributors</p>
              <svg-icon class-name="t-icon" icon-class="contributors"></svg-icon>
            </div>
          </div>
          <div class="card-content content-second" style="height: 424px;">
            <div class="main-card">
              <div class="main-info">
                <span>Contributors</span>
                <h6>PROME Network is open to everyone.</h6>
                <p style="font-weight: 500;">Prome Network is open to everyone.</p>
                <p class="p-wrap">To achieve Sustainable, Fast, and Organic Growth, PROME Network welcomes individuals
                  and
                  entities who
                  have passion for green energy adoption.</p>
                <p class="p-wrap">You can make contributions by</p>
                <p>- being an Evangelist and inviting more participants to embrace the PROME Network.</p>
                <p>- being an active Community Developer and providing data verification service.</p>
                <p>- being a Customer Advocator and sharing investment opportunities in high-quality energy projects.
                </p>
              </div>
              <svg-icon class-name="t-icon" icon-class="contributors"></svg-icon>
            </div>

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'Organ',
  components: {},
  setup() {
    const e = {
      id: "#cardArea",
      sid: ".card-item"
    };
    const ifMobile = ref(false);
    // eslint-disable-next-line no-undef
    $.fn.cardArea = function () {
      // var t = $.extend({},
      //   e, window);
      const t = { ...e }
      return this.each(function () {
        // eslint-disable-next-line no-undef
        const e = $(t.id),
          n = e.find(t.sid);
        n.on("click",
          function () {
            // eslint-disable-next-line no-undef
            $(this).addClass("active").siblings().removeClass("active")
            // eslint-disable-next-line no-undef
            const targetHeight = $(this).context.getAttribute("targetHeight")
            // eslint-disable-next-line no-undef
            $(this).css({ "height": targetHeight }).siblings().css({ "height": "74px" })
          })
      })
    };

    onMounted(() => {
      ifMobile.value = document.getElementById('app').classList.contains('mobile-port');
      // eslint-disable-next-line no-undef
      $("#cardArea").cardArea();
    })
    return {
      ifMobile
    };
  },
};
</script>

<style lang="less">
.organ-container {
  // width: 100%;
}

.clearfix {
  display: block;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}


.card-area {
  // margin: 0px auto 0;
  height: auto;
  width: 600px;
  position: relative;
}

.card-area .card-item {
  z-index: 4;
  transition: all .3s cubic-bezier(.4, 0, .2, 1), z-index 0s .2s;
  position: relative;
  // float: left;
  width: 100%;
  height: 74px;
  background-color: transparent;

  &:last-child .card .card-content {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
}

.card-area .card-item+.card-item {
  margin-left: -1px;
}

.card-area .card-item .card {
  transition: all .3s cubic-bezier(.4, 0, .2, 1), z-index 0s .2s;
  width: 100%;
  height: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  // background: #8EABC0;
}

.card-area .card-item .card .card-content {
  width: 100%;
  line-height: 2
}

.card-area .card-item .card .card-content.content-first {
  transition: all .2s cubic-bezier(.4, 0, .2, 1) .18s;
  z-index: 3;
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  color: #fff;
  font-size: 21px;
  font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  font-style: normal;
}

.card-area .card-item .card .card-content.content-second {
  transition: all .2s cubic-bezier(.4, 0, .2, 1) 0s;
  z-index: 2;
  opacity: 0;
  // height: 0px;
  filter: alpha(opacity=0);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
  line-height: 2;

  // color: #000;
}

.card-area .card-item .card .card-content {
  // height: 100%;
  // position: absolute;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  // top: 145px;
  top: 0;
  z-index: 1;
  width: 100%;
  position: absolute;

  .t-icon {
    font-size: 21px;
    opacity: 0.7;
  }
}

.card-area .card-item .card .card-content.content-first .content-first-content {
  display: flex;
  align-items: end;
  justify-content: space-between;
  // height: calc(100% - 42px);
  // padding: 21px;
  padding: 24px 30px 31px 21px;

  &:hover {
    text-decoration-line: underline;

    .t-icon {
      opacity: 1;
    }
  }
}

.card-area .card-item .card .card-content.content-second {
  width: 100%;
  font-size: 16px;
  // color: #000;
  text-align: left;
  display: flex;
  justify-content: space-between;
  // height: 280px;

  // padding: 21px 33px;
  .main-card {
    width: 100%;
    background: rgba(203, 203, 203, 0.2);
    backdrop-filter: blur(24px);
    margin: 40px 0px;
    padding: 28px 31px 28px 20px;
    position: relative;

    .t-icon {
      font-size: 21px;
      position: absolute;
      right: 31px;
      top: 28px;
    }
  }

  .main-info {
    width: 100%;
    color: #fff;
  }

  span {
    font-size: 28px;
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    font-style: normal;
  }

  h6 {
    font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
    font-weight: 400;
    font-size: 14px;
    color: #CFFF8B;
    line-height: 18px;
    text-align: left;
    font-style: normal;
  }

  p {
    //font-family: SFPro, SFPro;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 18px;
    text-align: left;
    font-style: normal;
  }

  span+h6 {
    margin-top: 16px;
  }

  h6+p {
    margin-top: 44px;
  }

  .p-wrap {
    margin-top: 16px;
  }
}

.card-area .card-item.active {
  z-index: 6;
  width: 100%;
  height: 302px;
}

.card-area .card-item.active .card .card-content.content-first {
  transition: all .1s cubic-bezier(.4, 0, .2, 1) 0s;
  z-index: 2;
  opacity: 0;
  // height: 0px;
  filter: alpha(opacity=0);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}

.card-area .card-item.active .card .card-content.content-second {
  transition: all 0.1s cubic-bezier(.4, 0, .2, 1) .18s;
  z-index: 3;
  opacity: 1;
  // height: auto;
  filter: alpha(opacity=100);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);

  .t-icon {
    opacity: 1;
  }
}

.mobile-port {
  .organ-container {
    margin-top: 32px;

    .card-area {
      // margin: 0px auto 0;
      height: auto;
      width: 100%;
      position: relative;


      .card-item .card .card-content.content-second {
        width: 100%;
        font-size: 11px;
        font-weight: 400;
        text-align: left;
        display: flex;
        justify-content: space-between;

        .main-card {
          width: 100%;
          background: rgba(203, 203, 203, 0.2);
          backdrop-filter: blur(24px);
          margin: 24px 0px;
          padding: 21px 16px;
          position: relative;

          .t-icon {
            font-size: 21px;
            position: absolute;
            right: 31px;
            top: 28px;
          }
        }

        .main-info {
          width: 100%;
          color: #fff;
        }

        span {
          font-size: 21px;
          font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
          line-height: 18px;
        }

        h6 {
          font-family: IBMCustom, IBMPlexMono, IBM Plex Mono;
          font-weight: 400;
          font-size: 11px;
          color: #CFFF8B;
          line-height: 18px;
          text-align: left;
          font-style: normal;
        }

        p {
          //font-family: SFPro, SFPro;
          font-weight: 400;
          font-size: 11px;
          color: #FFFFFF;
          line-height: 16px;
          text-align: left;
          font-style: normal;
        }

        span+h6 {
          margin-top: 8px;
        }

        h6+p {
          margin-top: 40px;
        }

        .p-wrap {
          margin-top: 16px;
        }
      }

    }

  }
}
</style>
