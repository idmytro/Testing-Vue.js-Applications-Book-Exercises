/*
What mounting options would you need to call shallow with so that the component below mounts correctly
*/

import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'

shallow(TestComponent, {
  mocks: {
    injectedObject: {
      someProperty: 'any-value'
    }
  }
})
