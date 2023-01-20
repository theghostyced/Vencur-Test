import React from "react";
import { Link } from "react-router-dom";

export interface PageItemProps {
  id?: number;
  icon: string;
  name: string;
  badge?: number;
}

function PageItem(props: PageItemProps) {
  const { icon, name, badge } = props;

  return (
    <Link
      to="/"
      className="flex items-center group justify-between py-2 px-3 rounded-md bg-white hover:bg-gray-50 hover:no-underline"
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt="" />
        <span className="font-medium text-gray-700 group-hover:text-gray-900">
          {name}
        </span>
      </div>
      {badge && (
        <span className="text-gray-700 font-medium text-md mix-blend-multiply py-0.5 px-2.5 bg-gray-100 rounded-2xl">
          {badge}
        </span>
      )}
    </Link>
  );
}

export default PageItem;
