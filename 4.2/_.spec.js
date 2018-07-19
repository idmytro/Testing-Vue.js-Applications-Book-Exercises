/*
Write a test to check that the injectedMethod is called when the component is mounted.
*/
import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'

test('calls injectedMethod when mounted', () => {
  const injectedMethod = jest.fn()
  shallow(TestComponent, {
    mocks: {
      injectedMethod
    }
  })
})
