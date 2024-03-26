<template>
  <div class="box" :class="{ boxfixed: fixed }">
    <p>网络遇到问题了，请检查网络连接</p>
    <p>
      <van-button class="player-btn" type="primary" @click="getNet">刷新页面</van-button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
  },
  name: "netWorkPage",
  emits: ["refreshNet"],
  setup(props, { emit }) {
    const getNet = () => {
      emit("refreshNet");
    };
    return {
      getNet,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  padding-top: 344px;
  font-size: 36px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: center;
  color: var(--cus-text-color);
  line-height: 50px;
  height: calc(100% - 344px);

  .player-btn {
    background: linear-gradient(90deg, #33ccfc, #00e236 84%);
    border-radius: 12px;
    border: none;
    width: 322px;
    height: 84px;
    margin-top: 45px;

    :deep(.van-button__text) {
      margin-left: 16px;
    }
  }
}

.boxfixed {
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  z-index: 4;
}
</style>
