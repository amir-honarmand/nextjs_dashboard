export default function SAvatar({
  src,
  alt,
  classes,
}: {
  src: string;
  alt: string;
  classes?: string;
}) {
  return <img className={classes ? classes : "w-10 h-10 rounded-full"} src={src} alt={alt} />;
}
