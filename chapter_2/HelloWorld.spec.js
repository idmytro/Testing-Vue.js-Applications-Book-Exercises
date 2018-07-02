test('renders Hello, World!', () => {
    const wrapper = shallow(TestComponent);
    expect(wrapper.text()).toContain('Hello, World!');
})
