/*
Write a test to check that the <p> tag has a color style with the value of red
*/

import {shallow} from 'vue-test-utils'
import TestComponent from './TestComponent.vue'

test('renders p tag with correct style', () => {
  const wrapper = shallow(TestComponent)
  expect(wrapper.find('p').element.style.color).toBe('red')
})
