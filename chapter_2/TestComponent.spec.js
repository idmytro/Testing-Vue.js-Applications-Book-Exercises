import { shallow } from 'vue-test-utils';
import TestComponent from './TestComponent.vue';

test('renders Hello, World!', () => {
    const wrapper = shallow(TestComponent);
    expect(wrapper.text()).toContain('Hello, World!');
})
