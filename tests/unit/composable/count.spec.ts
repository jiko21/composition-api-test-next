import useCount from '@/composable/count';

describe('count.spec.ts', () => {
  it('increment should work properly', () => {
    const { countValue, increment, decrement } = useCount();
    increment();
    expect(countValue.value).toEqual(1);
  });
  it('decrement should work properly', () => {
    const { countValue, increment, decrement } = useCount();
    decrement();
    expect(countValue.value).toEqual(-1);
  });
});
