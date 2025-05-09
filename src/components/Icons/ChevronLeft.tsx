import {IconProps} from './Icon.types';

export function ChevronLeft(props: Readonly<IconProps>) {
  const {fill = '#e8eaed', width = 24, height = 24} = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill as string}>
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}
