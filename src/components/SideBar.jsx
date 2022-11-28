import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouseUser, faMagnifyingGlass, faUser, faDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faHouseUser, faMagnifyingGlass, faUser, faDownload);
const SideBar = () => {
  return (   
    
    <aside class="w-64" aria-label="Sidebar">
       <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul class="space-y-2">
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <FontAwesomeIcon icon="fa-solid fa-house-user" />
                   <span class="flex-1 ml-3 whitespace-nowrap">Home Page</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <FontAwesomeIcon icon="fa-solid fa-download" />
                   <span class="flex-1 ml-3 whitespace-nowrap">Saved</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />                   
                  <span class="flex-1 ml-3 whitespace-nowrap">Search Plans</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <FontAwesomeIcon icon="fa-solid fa-user" />
                   <span class="flex-1 ml-3 whitespace-nowrap">Account</span>
                </a>
             </li>
          </ul>
       </div>
    </aside>
  )
}

export default SideBar;