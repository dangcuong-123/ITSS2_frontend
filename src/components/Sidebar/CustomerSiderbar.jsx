import SidebarFirstContent from "./SidebarFirstContent";
import SearchIcon from "../../assets/HomePage/Search.svg";
import HomeIcon from "../../assets/HomePage/Home.svg";

const CustomerSiderbar = () => {
  return (
    <div className="fixed overflow-y-hidden min-h-screen bg-cyan-900 w-[15%] pt-[70px] left-0 bottom-0 flex flex-col justify-between">
      <div>
        <ul className="list-none">
          <li className="font-bold text-xl text-white pt-[93px] pl-5">
            NỘI DUNG
          </li>
          <SidebarFirstContent icon={HomeIcon} link="/home">
            Trang Chủ
          </SidebarFirstContent>
          <SidebarFirstContent icon={SearchIcon} link="/search-plan">
            Tìm Kiếm
          </SidebarFirstContent>
        </ul>
      </div>
    </div>
  );
};

export default CustomerSiderbar;
