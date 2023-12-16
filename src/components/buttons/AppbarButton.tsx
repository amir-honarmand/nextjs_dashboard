import {MouseEventHandler} from 'react'

export default function AButton(props: {
  children?: any;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { children, label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className="border-2 active:bg-bgGray transition duration-200 ease-in-out hover:bg-primary
       text-gray-600 font-bold py-2 px-3 rounded-xl inline-flex items-center"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
