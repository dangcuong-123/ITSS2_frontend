import SidebarFirstContent from "./SidebarFirstContent";
import SearchIcon from "../../assets/HomePage/Search.svg";
import HomeIcon from "../../assets/HomePage/Home.svg";
import DownloadIcon from "../../assets/HomePage/Download.svg";
import HotelListIcon from "../../assets/HomePage/hotel_list.svg";
import RestaurantIcon from "../../assets/HomePage/restaurant.svg";
import AccountIcon from "../../assets/HomePage/account-box.svg";
import { useTranslation } from 'react-i18next';

const AdminSidebar = () => {
  const { t } = useTranslation()

  return (
    <div className="fixed overflow-y-hidden min-h-screen bg-cyan-900 w-[15%] pt-[70px] left-0 bottom-0 flex flex-col justify-between">
      <div>
        <ul className="list-none">
          <li className="font-bold text-xl text-white pt-5 pl-5">{t('adminSidebar.content')}</li>
          <SidebarFirstContent icon={HomeIcon} link="/home">
          {t('adminSidebar.home')}
          </SidebarFirstContent>
          <SidebarFirstContent icon={SearchIcon} link="/search-plan">
          {t('adminSidebar.search')}
          </SidebarFirstContent>
          <SidebarFirstContent icon={HotelListIcon} link="/admin/list-hotel">
          {t('adminSidebar.hotel')}
          </SidebarFirstContent>
          <SidebarFirstContent icon={RestaurantIcon} link="/admin/list-restaurant">
          {t('adminSidebar.restaurant')}
          </SidebarFirstContent>
          <SidebarFirstContent icon={DownloadIcon} link="/admin/saved">
          {t('adminSidebar.saved')}
          </SidebarFirstContent>
          <SidebarFirstContent icon={AccountIcon} link="/admin/account">
          {t('adminSidebar.account')}
          </SidebarFirstContent>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
