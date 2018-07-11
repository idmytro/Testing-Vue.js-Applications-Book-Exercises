<template>
  <div>
    <child testProp="some-value" />
  </div>
</template>

<script>
// TestComponent.vue

import Child from './Child.vue'
export default {
  components: { Child }
}
</script>

