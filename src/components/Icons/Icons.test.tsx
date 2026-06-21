import {describe, it, expect} from 'vitest';
import {render} from '@testing-library/react';
import {ChevronLeft} from './ChevronLeft';
import {DarkMode} from './DarkMode';
import {LightMode} from './LightMode';
import {DesktopWindows} from './DesktopWindows';

describe('ChevronLeft', () => {
  it('renders an svg', () => {
    const {container: c} = render(<ChevronLeft />);
    expect(c.querySelector('svg')).not.toBeNull();
  });

  it('applies custom fill, width, height', () => {
    const {container: c} = render(
      <ChevronLeft fill="#ff0000" width={32} height={32} />
    );
    const svg = c.querySelector('svg')!;
    expect(svg.getAttribute('fill')).toBe('#ff0000');
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
  });

  it('uses default fill when not provided', () => {
    const {container: c} = render(<ChevronLeft />);
    expect(c.querySelector('svg')!.getAttribute('fill')).toBe('#e8eaed');
  });
});

describe('DarkMode', () => {
  it('renders an svg', () => {
    const {container: c} = render(<DarkMode />);
    expect(c.querySelector('svg')).not.toBeNull();
  });

  it('applies custom props', () => {
    const {container: c} = render(
      <DarkMode fill="#000" width={16} height={16} />
    );
    const svg = c.querySelector('svg')!;
    expect(svg.getAttribute('fill')).toBe('#000');
    expect(svg.getAttribute('width')).toBe('16');
  });

  it('uses defaults', () => {
    const {container: c} = render(<DarkMode />);
    expect(c.querySelector('svg')!.getAttribute('fill')).toBe('#e8eaed');
  });
});

describe('LightMode', () => {
  it('renders an svg', () => {
    const {container: c} = render(<LightMode />);
    expect(c.querySelector('svg')).not.toBeNull();
  });

  it('applies custom props', () => {
    const {container: c} = render(
      <LightMode fill="#fff" width={20} height={20} />
    );
    const svg = c.querySelector('svg')!;
    expect(svg.getAttribute('fill')).toBe('#fff');
    expect(svg.getAttribute('width')).toBe('20');
  });

  it('uses defaults', () => {
    const {container: c} = render(<LightMode />);
    expect(c.querySelector('svg')!.getAttribute('fill')).toBe('#e8eaed');
  });
});

describe('DesktopWindows', () => {
  it('renders an svg', () => {
    const {container: c} = render(<DesktopWindows />);
    expect(c.querySelector('svg')).not.toBeNull();
  });

  it('applies custom props', () => {
    const {container: c} = render(
      <DesktopWindows fill="#123" width={48} height={48} />
    );
    const svg = c.querySelector('svg')!;
    expect(svg.getAttribute('fill')).toBe('#123');
    expect(svg.getAttribute('width')).toBe('48');
  });

  it('uses defaults', () => {
    const {container: c} = render(<DesktopWindows />);
    expect(c.querySelector('svg')!.getAttribute('fill')).toBe('#e8eaed');
  });
});
