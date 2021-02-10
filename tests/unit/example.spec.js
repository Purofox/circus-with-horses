import { shallowMount } from '@vue/test-utils';
import Pomodoro from '@/components/Pomodoro/Pomodoro.vue';

describe('Pomodoro.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Pomodoro, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
