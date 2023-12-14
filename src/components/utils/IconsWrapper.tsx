import { IconContext } from "react-icons";

export default function IconsWrapper({ children }: { children: JSX.Element }) {
  return (
    <IconContext.Provider value={{ color: "red" }}>
      <div>{children}</div>
    </IconContext.Provider>
  );
}
