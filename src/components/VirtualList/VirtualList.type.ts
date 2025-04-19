import {VirtualItem, Virtualizer} from '@tanstack/react-virtual';
import {ReactNode} from 'react';

export interface VirtualListProps {
  virtualizer: Virtualizer<HTMLElement, Element>;
  items: VirtualItem[];
  children: ReactNode;
}
