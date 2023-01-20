import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../common/Logo";
import SearchField from "../../common/SearchField";
import PageItem, {type PageItemProps} from "./PageItem";

interface PageT {
  id: number;
  category: string;
  lists: PageItemProps[];
}

const pages: PageT[] = [
  {
    id: 4534,
    category: "pages",
    lists: [
      {
        id: 6767,
        icon: "/images/home.svg",
        name: "Home",
      },
      {
        id: 78967,
        icon: "/images/bar-chart-2.svg",
        name: "Dashboard",
        badge: 10,
      },
      {
        id: 21345,
        icon: "/images/3-layers.svg",
        name: "Projects",
      },
      {
        id: 74443,
        icon: "/images/check-square.svg",
        name: "Tasks",
      },
      {
        id: 1234,
        icon: "/images/flag.svg",
        name: "Reporting",
      },
      {
        id: 3423,
        icon: "/images/users.svg",
        name: "Users",
      },
    ],
  },
  {
    id: 474345,
    category: "technical",
    lists: [
      {
        id: 8555,
        icon: "/images/life-buoy.svg",
        name: "Support",
      },
      {
        id: 58564,
        icon: "/images/settings.svg",
        name: "Settings",
      },
    ],
  },
];

function Navigation() {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 flex min-h-screen flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6 px-2">
          <div className="flex">
            <Logo />
          </div>
          <div>
            <SearchField />
          </div>
          <div className="flex flex-col gap-6">
            {pages.map(({id, lists}) => (
              <div key={id} className="flex flex-col gap-1">
                {lists.map(({id, ...rest}) => (
                  <PageItem key={id} {...rest} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 rounded-lg py-5 px-4">
            <h3 className="mb-1 font-medium text-md text-gray-900">
              New features available!
            </h3>
            <p className="text-md text-gray-500 mb-4">
              Check out the new dashboard view. Pages now load faster.
            </p>
            <div
              aria-label="video player"
              style={{
                backgroundImage: `url('/images/Image.jpg')`,
              }}
              className="[aspect-ratio:215/136] rounded-md relative mb-4"
            >
              <button type="button" className="absolute bottom-3 left-3">
                <img src="/images/_Play button.svg" alt="" />
              </button>
            </div>
            <p className="font-medium text-md text-gray-500 flex gap-3 items-center">
              <span>Dismiss</span>
              <Link className="text-primary-700" to="/">
                What’s new?
              </Link>
            </p>
          </div>
          <hr className="border-t-gray-200" />
          <div className="flex gap-3" role="button">
            <img className="rounded-full" src="/images/Avatar.jpg" alt="" />
            <div className="flex flex-col">
              <strong className="font-medium text-md text-gray-900">
                Olivia Rhye
              </strong>
              <p className="text-md text-gray-500">olivia@untitledui.com</p>
            </div>
            <button type="button">
              <img src="/images/Icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
