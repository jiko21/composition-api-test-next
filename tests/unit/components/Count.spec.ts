import { mount, VueWrapper } from '@vue/test-utils';
import Count from '@/components/Count.vue';
import * as composable from '@/composable/count';

describe('Count.vue', () => {
  let wrapper: VueWrapper<any>;
  let incrementMock: jest.Mock;
  let decrementMock: jest.Mock;

  beforeEach(() => {
    jest.mock('../../../src/composable/count');
    incrementMock = jest.fn();
    decrementMock = jest.fn();
    // ここがミソ。refはそのまま渡してやる。ただし、anyで型チェックを無効にする必要あり
    jest.spyOn(composable, 'default').mockReturnValue({
      countValue: 0 as any,
      increment: incrementMock,
      decrement: decrementMock,
    });
    wrapper = mount(Count);
  });

  it('correctly renders initial html', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('call increment when plus buttons is clicked', () => {
    wrapper.find('button.plus').trigger('click');
    expect(incrementMock).toHaveBeenCalled();
  });

  it('call increment when minus buttons is clicked', () => {
    wrapper.find('button.minus').trigger('click');
    expect(decrementMock).toHaveBeenCalled();
  });
});
