/*
Write a test to check that the injectedMethod is called, by using Jest fake timers.
*/
import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'

test('calls injectedMethod when mounted', () => {
  jest.useFakeTimers()

  const injectedMethod = jest.fn()

  shallow(TestComponent, {
    mocks: {
      injectedMethod
    }
  })

  jest.runTimersToTime(1000)

  jest.useRealTimers()

  expect(injectedMethod).toHaveBeenCalled()
})
