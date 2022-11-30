import SidebarFirstContent from "./SidebarFirstContent";

const Sidebar = () => {
  return (
    <div className="fixed overflow-y-hidden min-h-screen bg-cyan-900 w-[15%] pt-[70px] left-0 bottom-0 flex flex-col justify-between">
      <div className=" ">
        <ul className="list-none">
          <li className="font-bold text-xl text-white pt-[93px] pl-5">
            CONTENTS
          </li>
          <SidebarFirstContent link="/home">Home page</SidebarFirstContent>
          <SidebarFirstContent link="/search-plan">
            Search plan
          </SidebarFirstContent>
          <SidebarFirstContent link="/soved">Soved</SidebarFirstContent>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
