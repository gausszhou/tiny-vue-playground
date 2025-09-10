<template>
  <div>
    <h2>下拉面板可搜索</h2>
    <div>场景 1：单选</div>
    <br />
    <tiny-select v-model="value" :searchable="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 2：多选</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" multiple>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 3：多选 + 保留搜索关键字</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" reserve-keyword multiple>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyOption } from '@opentiny/vue'
import { createOptions } from '@/utils'

const options = ref(createOptions());
const value = ref('')
const multivalue = ref([])
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
