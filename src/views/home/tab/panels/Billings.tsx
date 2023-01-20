import React, {useState} from "react";
import Radiobox from "../../../../components/common/Radiobox";
import CreditCard, {
  CreditCardProps,
} from "../../../../components/common/CreditCard";
import Table from "../../../../components/common/table/Table";
import SearchPalette from "../../../../components/template/SearchPalette";

const cards: CreditCardProps[] = [
  {
    id: 435,
    expiry: "Expiry 06/2024",
    icon: "/images/Payment method icon (2).svg",
    title: "Visa ending in 1234",
  },
  {
    id: 785,
    expiry: "Expiry 06/2024",
    icon: "/images/Payment method icon.svg",
    title: "Mastercard ending in 1234",
  },
];

function Billings() {
  const [card, setCard] = useState(0);

  return (
    <div>
      <div className="mb-8">
        <div className="mb-5">
          <h2 className="font-medium text-lg text-gray-900 mb-1">
            Payment method
          </h2>
          <p className="text-gray-500 text-md">
            Update your billing details and address.
          </p>
        </div>
        <hr className="border-t-gray-200 block mb-6" />
        <div>
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex-1 max-w-[280px]">
              <h4 className="font-medium text-md">Contact email</h4>
              <p className="text-gray-500 text-md">
                Where should invoices be sent?
              </p>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex gap-2">
                <div>
                  <Radiobox />
                </div>
                <div>
                  <h4 className="font-medium text-md">
                    Send to my account email
                  </h4>
                  <p className="text-gray-500 text-md">olivia@untitledui.com</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Radiobox />
                </div>
                <div className="flex-grow max-w-[488px]">
                  <h4 className="font-medium text-md mb-3">
                    Send to an alternative email
                  </h4>
                  <SearchPalette>
                    <label htmlFor="alternativeemail" className="flex ">
                      <img src="/images/mail.svg" alt="" />
                    </label>
                    <input
                      type="email"
                      id="alternativeemail"
                      placeholder="Enter email address"
                      defaultValue="billing@untitledui.com"
                      className="placeholder:text-gray-500 text-gray-900 flex-grow"
                    />
                  </SearchPalette>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-gray-200 block my-5" />
        <div>
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex-1 max-w-[280px]">
              <h4 className="font-medium text-md">Card details</h4>
              <p className="text-gray-500 text-md">
                Select default payment method.
              </p>
            </div>
            <div className="flex-1 max-w-[784px]">
              <div className="flex flex-col gap-3 mb-3">
                {cards.map(({id, ...rest}, index) => (
                  <CreditCard
                    select={card === index}
                    onClick={() => setCard(index)}
                    key={id}
                    {...rest}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2" role="button">
                <img src="/images/plus.svg" alt="" />
                <p className="font-medium text-md text-gray-500">
                  Add new payment method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-6 items-center mb-6">
          <h3 className="font-medium text-lg text-gray-900">Billing history</h3>
          <div>
            <button type="button">
              <SearchPalette>
                <img src="/images/download-cloud.svg" alt="" />
                <span className="font-medium text-md text-gray-700">
                  Download all
                </span>
              </SearchPalette>
            </button>
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Billings;
