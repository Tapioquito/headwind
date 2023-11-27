import SideBarIcon from "./SideBarIcon";
import { Fafire } from "react-icons/fa";
const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-o h-screen w-16 m-0
                flex flex-col
                bg-gray-900 text-white shadow-lg"
    >
      {/* <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i> */}
      <SideBarIcon icon={<Fafire size="28" />} />
    </div>
  );
};

export default SideBar;
