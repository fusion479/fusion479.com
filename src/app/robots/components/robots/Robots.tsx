import SectionTitle from "@/components/SectionTitle";
import Info from "./Info";
import Timeline from "./Timeline";

export default function Robots() {
  return (
    <div className="flex p-10 justify-between">
      <Timeline />
      <Info />
    </div>
  );
}
