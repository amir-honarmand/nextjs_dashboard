export default function SAvatar({ src, alt }: { src: string; alt: string }) {
  return <img className="w-10 h-10 rounded-full" src={src} alt={alt} />;
}
