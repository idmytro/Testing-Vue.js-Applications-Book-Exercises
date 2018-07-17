/*
Write a test to check that the component below renders the Child component with the correct test-prop value of some-value
*/

import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'
import Child from './Child.vue'

test('renders Child', () => {
  const wrapper = shallow(TestComponent)
  expect(wrapper.find(Child).props().testProp).toBe('some-value')
})
