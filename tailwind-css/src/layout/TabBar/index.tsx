import { NavLink } from "react-router-dom";

export interface TabBarItemProps {
  to: string;
  title: string;
}
export interface TabBarProps {
  items: TabBarItemProps[];
}

export const TabBar = ({ items }: TabBarProps) => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="hidden md:flex justify-center">
        <div className="flex items-center gap-x-8 text-2xl mx-auto">
          {items.map((item, index) => (
            <NavLink
              key={`nav_item_${index}`}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-2"
                  : "text-gray-700 hover:text-indigo-500 pb-2"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
