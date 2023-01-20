import React, {useState} from "react";
import Billings from "./tab/panels/Billings";
import ScrollContainer from "react-indiana-drag-scroll";

const tabs = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

function Home() {
  const [tab, setTab] = useState(5);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-medium text-xl text-gray-900 mb-1">Settings</h1>
        <p className="text-gray-500">Manage your team and preferences here.</p>
      </div>
      <div>
        <div className="w-full md:w-[calc(100vw-375px)]">
          <ScrollContainer>
            <div className="group flex flex-nowrap mb-8">
              {tabs.map((value, index) => (
                <button
                  className={`font-medium text-md py-[9px] px-4 first:rounded-l-lg last:rounded-r-lg bg-white border-r first:border-l border-y border-gray-300 last:border-l-0 whitespace-nowrap ${
                    tab === index ? "text-gray-800 bg-gray-50" : "text-gray-700"
                  }`}
                  onClick={() => setTab(index)}
                  key={index}
                  type="button"
                >
                  {value}
                </button>
              ))}
            </div>
          </ScrollContainer>
        </div>
        <main>
          {tab === 5 ? (
            <Billings />
          ) : (
            <>
              <b>Empty Tab:</b> {tabs[tab]}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
