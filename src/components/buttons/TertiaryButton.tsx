import {MouseEventHandler} from 'react'

export default function TButton(props: {
  children?: any;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { children, label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className="w-full bg-blue-300 active:bg-bgGray transition duration-200 ease-in-out 
        hover:bg-blue-500 text-secondary text-sm py-2 px-4 
        rounded-xl inline-flex items-center justify-center"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
