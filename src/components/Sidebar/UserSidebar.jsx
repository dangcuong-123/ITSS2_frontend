import SidebarFirstContent from "./SidebarFirstContent";
import SearchIcon from "../../assets/HomePage/Search.svg";
import HomeIcon from "../../assets/HomePage/Home.svg";
import DownloadIcon from "../../assets/HomePage/Download.svg";
import accountIcon from "../../assets/HomePage/account-box.svg";
import { useTranslation } from "react-i18next";

const UserSidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed overflow-y-hidden min-h-screen bg-cyan-900 w-[15%] pt-[70px] left-0 bottom-0 flex flex-col justify-between">
      <div>
        <ul className="list-none">
          <li className="font-bold text-xl text-white pt-[93px] pl-5">
            {t("userSidebar.content")}
          </li>
          <SidebarFirstContent icon={HomeIcon} link="home">
            {t("userSidebar.home")}
          </SidebarFirstContent>
          <SidebarFirstContent icon={SearchIcon} link="search-plan">
            {t("userSidebar.search")}
          </SidebarFirstContent>
          <SidebarFirstContent icon={accountIcon} link="profile">
            {t("userSidebar.account")}
          </SidebarFirstContent>
          <SidebarFirstContent icon={DownloadIcon} link="saved">
            {t("userSidebar.saved")}
          </SidebarFirstContent>
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
