<script lang="ts">
import { defineComponent } from 'vue'
import CwIcon from "cw-vue-component-library/components/icon/CwIcon";
import CwConfirm from "cw-vue-component-library/components/popup/CwConfirm";
import { Confirm } from "cw-vue-component-library/common/popup/Confirm";
import CwCkEditor from "cw-vue-component-library/components/forms/inputs/CwCkEditor";

export default defineComponent({
  name: "Welcome",
  components: {
    CwConfirm,
    CwIcon,
    CwCkEditor,
  },
  data() {
    return {
      message: 'Welcome Genius',
      show: false,
    }
  },
  computed: {
    confirm(): Confirm<any> {
      return new Confirm(
          'Are you sure you want to request a test API?',
          'Note: This will send a test request and print result in console',
      )
    }
  },
  methods: {
    testResource(): void {
      this.resourceService.fetch<String>('/test/resource', {key: 'test', value: 'resource'})
          .then(console.log);
      this.show = false;
    }
  }
})
</script>

<template>
  <div class="container">
    <CwConfirm :show="show" :confirm="confirm" type="info" @close="show = false" @confirm="testResource"/>
    <div class="d-flex align-items-center justify-content-center">
      <a @click="show = true" class="d-flex align-items-center justify-content-center">
        <CwIcon icon="cw-logo-symbol" class="cw-icon cw-icon-xxl"/>
        <h2 class="my-0 ml-3">Welcome to Frontend 3.0</h2>
      </a>
    </div>

    <div class="text-left">
      <label>{{ translate('please-enter-your-message') }}</label>
      <CwCkEditor v-model="message"/>
      <div class="my-3 text-center">
        <p v-safe-html="message"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
svg, h2 {
  color: #1378de;
}
.container {
  padding-top: 1.5rem;
}
</style>
