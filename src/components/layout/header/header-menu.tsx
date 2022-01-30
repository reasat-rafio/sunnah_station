import Link from "@components/ui/link";
import { FaChevronDown } from "react-icons/fa";
import classNames from "classnames";
import ListMenu from "@components/common/list-menu";

interface MenuProps {
  data: NavItem[];
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      {data?.map((item) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${
            item.submenu ? "relative" : ""
          }`}
          key={item._key}
        >
          <Link
            // href={item.slug.current}
            href="/"
            className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
          >
            {item.title}
            {item.submenu && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          {item?.submenu && Array.isArray(item.submenu) && (
            <div className="subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 group-hover:opacity-100">
              <ul className="text-body text-sm py-5">
                {item.submenu.map((menu, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.submenu}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenu;
