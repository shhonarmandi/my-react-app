import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {VirtualList} from './VirtualList';
import {Virtualizer, VirtualItem} from '@tanstack/react-virtual';

function makeVirtualizer(totalSize: number): Virtualizer<HTMLElement, Element> {
  return {
    getTotalSize: () => totalSize,
  } as unknown as Virtualizer<HTMLElement, Element>;
}

function makeItems(count: number, start = 0): VirtualItem[] {
  return Array.from({length: count}, (_, i) => ({
    key: i,
    index: i,
    start: start + i * 24,
    end: start + i * 24 + 24,
    size: 24,
    lane: 0,
  }));
}

describe('VirtualList', () => {
  it('renders children', () => {
    const virtualizer = makeVirtualizer(480);
    const items = makeItems(2);
    render(
      <VirtualList virtualizer={virtualizer} items={items}>
        <div data-testid="item">item</div>
      </VirtualList>
    );
    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it('sets container height from virtualizer.getTotalSize()', () => {
    const virtualizer = makeVirtualizer(960);
    const items = makeItems(1);
    const {container} = render(
      <VirtualList virtualizer={virtualizer} items={items}>
        <span />
      </VirtualList>
    );
    const outer = container.firstElementChild as HTMLElement;
    expect(outer.style.height).toBe('960px');
  });

  it('applies translateY from first item start', () => {
    const virtualizer = makeVirtualizer(480);
    const items = makeItems(3, 48);
    const {container} = render(
      <VirtualList virtualizer={virtualizer} items={items}>
        <span />
      </VirtualList>
    );
    const inner = container.firstElementChild?.firstElementChild as HTMLElement;
    expect(inner.style.transform).toBe('translateY(48px)');
  });

  it('defaults translateY to 0 when items array is empty', () => {
    const virtualizer = makeVirtualizer(0);
    const {container} = render(
      <VirtualList virtualizer={virtualizer} items={[]}>
        <span />
      </VirtualList>
    );
    const inner = container.firstElementChild?.firstElementChild as HTMLElement;
    expect(inner.style.transform).toBe('translateY(0px)');
  });
});
