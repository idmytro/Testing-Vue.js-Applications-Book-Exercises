<!-- TestComponent.vue -->
<template>
  <div>
    <child test-prop="some-value" />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: {Child}
}
</script>
