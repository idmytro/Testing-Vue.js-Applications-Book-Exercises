/*
Write a test to check that the <a> tag has an href with the value of https://google.com
*/

import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'

test('renders a tag with correct href', () => {
  const wrapper = shallow(TestComponent)
  expect(wrapper.find('a').attributes().href).toBe('https://google.com')
})
