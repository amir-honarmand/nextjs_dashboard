import Image from "next/image";

export default function SAvatar({
  src,
  alt,
  classes,
}: {
  src: string;
  alt: string;
  classes?: string;
}) {
  return <Image className={classes ? classes : "w-10 h-10 rounded-full"} src={src} alt={alt} />;
}
