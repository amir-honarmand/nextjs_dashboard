export default function SBox({
  bgColor,
  title,
  amount,
  desc,
  children,
}: {
  bgColor: string;
  title: string;
  amount: string;
  desc: string;
  children: JSX.Element;
}) {
  return (
    <div
      className={`flex flex-grow flex-col max-w-full min-w-[14rem] p-4 rounded-3xl ${bgColor}`}
    >
      <div className="flex flex-row gap-1 items-center">
        {children}
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className="flex flex-col items-center mt-5 mb-3 mx-7 gap-1">
        <h6 className="font-bold text-lg max-w-[13rem] truncate">{amount}</h6>
        <p className="text-center text-base max-w-[13rem] truncate">{desc}</p>
      </div>
    </div>
  );
}
