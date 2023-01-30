import { DeviceMobile, LadderSimple, Person } from "phosphor-react";

export function IndicatorToggle() {
  return (
    <div className="m-2 bg-gray-300">
      <div className="flex justify-around items-center">
        <Person size={32} />
        <DeviceMobile size={32} />
        <LadderSimple size={32} />
      </div>
    </div>
  )
}