import {MouseEventHandler} from 'react'

export default function RButton(props: {
  children?: any;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { children, label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className=" bg-bgGray active:bg-bgGray transition duration-200 ease-in-out hover:bg-primary
       text-secondary font-bold py-3 px-3 rounded-full inline-flex items-center"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
