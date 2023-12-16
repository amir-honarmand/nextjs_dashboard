import {MouseEventHandler} from 'react'

export default function PButton(props: {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { label, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className="bg-primary active:bg-bgWhite transition duration-200 ease-in-out hover:bg-bgGray
       text-secondary font-bold py-2 px-4 rounded-xl w-fit"
    >
      <span>{label}</span>
    </button>
  );
}
