import React from "react";
import Checkbox from "../Checkbox";
import Avatars from "./elements/Avatars";

const table = {
  columns: [
    {
      name: "Invoice",
      sorting: "/images/arrow-down.svg",
    },
    {
      name: "Amount",
    },
    {
      name: "Date",
    },
    {
      name: "Status",
    },
    {
      name: "Users on plan",
    },
  ],
};

function Table() {
  return (
    <div className="">
      <div className="overflow-x-auto w-full md:w-[calc(100vw-375px)]">
        <div
          className="shadow-200 relative overflow-hidden rounded-md border border-gray-200"
          style={{
            minWidth: 900,
          }}
        >
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-lelft">
                  <div className="py-3 flex justify-center pl-1">
                    <Checkbox />
                  </div>
                </th>
                {table.columns.map(({name, sorting}, index) => (
                  <th className="text-left" key={index}>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm text-gray-500">
                        {name}
                      </span>
                      {sorting && (
                        <img className="cursor-pointer" src={sorting} alt="" />
                      )}
                    </div>
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((value, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td>
                    <div className="flex justify-center pl-1">
                      <Checkbox />
                    </div>
                  </td>
                  <td>
                    <p className="font-medium text-md text-gray-900">
                      Basic Plan – Dec 2022
                    </p>
                  </td>
                  <td>
                    <p className="text-md text-gray-500">USD $10.00</p>
                  </td>
                  <td>
                    <p className="text-md text-gray-500">USD $10.00</p>
                  </td>
                  <td>
                    <div className="bg-success-50 rounded-2xl inline-flex items-center gap-1 py-0.5 px-2">
                      <img src="/images/check.svg" alt="" />
                      <span className="text-sm font-medium text-success-700">
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="py-6">
                      <Avatars
                        srcset={[
                          "/images/Avatar.svg",
                          "/images/Avatar (1).svg",
                          "/images/Avatar (2).svg",
                          "/images/Avatar (3).svg",
                          "/images/Avatar (4).svg",
                        ]}
                      />
                    </div>
                  </td>
                  <td>
                    <button type="button">
                      <img src="/images/Button.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
