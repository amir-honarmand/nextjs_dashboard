import { MouseEventHandler } from "react";
import SAvatar from "../avatars/Avatar";
import { IoIosArrowBack } from "react-icons/io";
import AvatarIcon from "../icons/AvatarIcon";

export default function LiButton(props: {
  title: string;
  subTitle: string;
  imageSrc: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { title, subTitle, imageSrc, ...otherProps } = props;
  const avatarClasses = "w-9 h-9 rounded-full";

  return (
    <button
      {...otherProps}
      type="button"
      className="w-full bg-bgGray text-secondary p-2 rounded-xl inline-flex items-center 
       transition duration-200 ease-in-out active:bg-bgGray hover:bg-primary"
    >
      <div className="flex items-center w-full gap-2">
        {imageSrc ? (
          <SAvatar alt="user avatar" src={imageSrc} classes={avatarClasses} />
        ) : (
          <AvatarIcon classes={`${avatarClasses} bg-bgWhite`} />
        )}
        <div className="flex flex-col flex-grow items-start gap-1">
          <span className="text-sm">{title}</span>
          <span className="text-xs">{subTitle}</span>
        </div>
        <div className="flex items-center w-5 h-5">
          <IoIosArrowBack />
        </div>
      </div>
    </button>
  );
}
