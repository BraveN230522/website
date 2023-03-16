import { renderHook, act } from '@testing-library/react-hooks';
import useSelection from './useSelection';

const mockItems = ['item 1', 'item 2'];

describe('useSelection', () => {
  test('Returns the first item as active when no activeIndex is informed', () => {
    const { result } = renderHook(() => useSelection({ items: mockItems }));

    expect(result.current[0]).toBe('item 1');
    expect(result.current[1]).toBe(0);
  });

  test('Changes the active item when changeActiveItem is called', () => {
    const { result } = renderHook(() => useSelection({ items: mockItems }));
    const changeActiveItem = result.current[2];

    act(() => {
      changeActiveItem(1);
    });

    expect(result.current[0]).toBe('item 2');
    expect(result.current[1]).toBe(1);
  });
});
