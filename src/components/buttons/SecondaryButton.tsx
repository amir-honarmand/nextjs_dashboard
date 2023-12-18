import {MouseEventHandler} from 'react'

export default function SeButton(props: {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className="text-sm bg-secondary active:bg-slate-600 transition duration-200 
      ease-in-out hover:bg-slate-800 text-bgWhite py-2 px-4 rounded-xl w-fit"
    >
      <span>{label}</span>
    </button>
  );
}
