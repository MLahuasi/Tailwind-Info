import { NavLink } from "react-router-dom";

export interface SideBarItemProps {
  id: string;
  title: string;
}

export interface SideBarProps {
  items: SideBarItemProps[];
}

export const SideBar = ({ items }: SideBarProps) => {
  return (
    <>
      <aside className="w-48 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold p-4 border-b border-gray-200">
          Temas
        </h2>
        <div className="flex flex-col">
          {items.map((post) => (
            <div key={post.id}>
              <NavLink
                to={`/post/${post.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 bg-indigo-100 text-indigo-700 font-medium"
                    : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                }
              >
                {post.title}
              </NavLink>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
