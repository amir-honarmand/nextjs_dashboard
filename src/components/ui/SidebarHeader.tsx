import BrandIcon from "../icons/BrandIcon";

export default function SidebarHeader() {
  return (
    <>
      <div className='flex flex-row justify-center mt-7 mb-9 items-center gap-1'>
        <BrandIcon/>
        <h1 className="text-xl font-bold">لوگوی برند</h1>
      </div>
    </>
  );
}
