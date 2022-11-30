const SidebarFirstContent = ({ link, icon, children }) => {
  return (
    <li className="font-bold text-base pt-4 pb-[15px] hover:bg-neutral-900">
      <a
        href={link}
        className="text-white no-underline pl-[10px] flex flex-row"
      >
        <img src={icon} alt="" />
        <span className="pl-4">{children}</span>
      </a>
    </li>
  );
};

export default SidebarFirstContent;
