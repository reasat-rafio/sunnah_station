import Link from "@components/ui/link";
import { IoIosArrowForward } from "react-icons/io";

interface ListMenuProps {
  dept: number;
  data: NavItem;
  hasSubMenu: NavItem[] | undefined;
  menuIndex: number;
}

const ListMenu: React.FC<ListMenuProps> = ({
  dept,
  data,
  hasSubMenu,
  menuIndex,
}) => {
  return (
    <li className="relative">
      <Link
        href={data.slug.current}
        className="flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
      >
        {data.title}
        {data.submenu && (
          <span className="text-sm mt-0.5 shrink-0">
            <IoIosArrowForward className="text-body transition duration-300 ease-in-out group-hover:text-black" />
          </span>
        )}
      </Link>
      {hasSubMenu && (
        <SubMenu dept={dept} data={data.submenu} menuIndex={menuIndex} />
      )}
    </li>
  );
};

const SubMenu: React.FC<any> = ({ dept, data, menuIndex }) => {
  dept = dept + 1;
  return (
    <ul className="subMenuChild shadow-subMenu bg-gray-200 absolute z-0 end-full 2xl:end-auto 2xl:start-full opacity-0 invisible top-4 w-56 py-3">
      {data?.map((menu: any, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.subMenu}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </ul>
  );
};

export default ListMenu;
