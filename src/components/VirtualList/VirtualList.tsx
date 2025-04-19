import {VirtualListProps} from './VirtualList.type';
import * as Styled from './VirtualList.styled';

export function VirtualList(props: Readonly<VirtualListProps>) {
  const {virtualizer, items, children} = props;

  return (
    <Styled.Container
      style={{
        height: virtualizer.getTotalSize(),
      }}>
      <Styled.Content
        style={{
          transform: `translateY(${items[0]?.start ?? 0}px)`,
        }}>
        {children}
      </Styled.Content>
    </Styled.Container>
  );
}
