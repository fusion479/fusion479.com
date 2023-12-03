import { useState } from "react";
import Info from "./Info";
import Timeline from "./Timeline";

export default function Robots() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex p-10 justify-between">
      <Timeline setActive={setActive} active={active} />
      <Info active={active} />
    </div>
  );
}
