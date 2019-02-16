<template>
  <h1 class="section-title">{{ title }}</h1>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang='scss' scoped>
.section-title {
  font-family: "proxima-nova",sans-serif;
  display: block;
  font-size: 28px;
  color: #444;
  text-align: center;
  line-height: 22px;
  font-style: normal;

  &:after {
    content: '';
    display: block;
    width: 100px;
    clear: both;
    margin: 20px auto 0 auto;
    border-bottom: solid 2px #444;
    left: 0;
    border-top: none;
    top: 0;
  }
}
</style>

