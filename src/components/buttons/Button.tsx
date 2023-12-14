import {MouseEventHandler} from 'react'

export default function SButton(props: {
  children?: any;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { children, label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className="active:bg-bgGray transition duration-200 ease-in-out hover:bg-primary
       text-secondary font-bold py-2 px-4 rounded-xl inline-flex items-center"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
