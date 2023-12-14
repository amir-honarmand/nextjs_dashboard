export default function SButton(props: {children: any, label: string}) {
  return (
    <button
      type="button"
      className="active:bg-bgGray transition duration-200 ease-in-out hover:bg-primary
       text-secondary font-bold py-2 px-4 rounded-xl inline-flex items-center"
    >
      {props.children}
      <span>{props.label}</span>
    </button>
  );
}
