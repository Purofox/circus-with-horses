import { shallowMount } from '@vue/test-utils';
import Pomodoro from '@/components/Pomodoro/Pomodoro.vue';

describe('Pomodoro.vue', () => {
  it('отображает корректную разметку', () => {
    const wrapper = shallowMount(Pomodoro)
    expect(wrapper.html()).toContain('<span class="minute">25</span>')
  });
  it('Нажатие кнопки сбрасывает имя сессии', () => {
    const wrapper = shallowMount(Pomodoro)
    const button = wrapper.find('.control--reset')
    button.trigger('click')
    expect(wrapper.vm.sessionName).toBe('Work')
  });
});
