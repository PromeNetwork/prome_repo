<template>
  <div class="box-403">
    <svg-icon class-name="full-icon authorization-icon" icon-class="authorization"></svg-icon>
    <p>设备未授权，服务无法使用</p>
  </div>
</template>

<script>

export default {
  name: 'error403Page',
  components: {  },
  setup() {

    debugger
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.box-403 {
  width: 100%;
  height: 100%;
  background-color: var(--cus-body-background);
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  text-align: center;
  font-size: 28px;
  color: var(--van-tab-text-color);
  .authorization-icon{
    font-size: 100px;
  }

  p {
    padding-top: 35px;
  }
}
</style>
