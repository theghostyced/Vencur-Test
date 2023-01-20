import React from "react";

export interface CreditCardProps {
  id?: number;
  icon: string;
  title: string;
  expiry: string;
  select?: boolean;
  onClick?: () => void;
}

function CreditCard(props: CreditCardProps) {
  const {expiry, icon, title, select, onClick} = props;

  return (
    <div>
      <div
        onClick={onClick}
        className={`flex justify-between gap-3 border rounded-lg p-4 ${
          select
            ? "border-primary-300 bg-primary-50"
            : "border-gray-200 bg-white"
        }`}
        role="button"
      >
        <div>
          <img src={icon} alt="" />
        </div>
        <div className="flex-grow">
          <strong
            className={`font-medium text-md ${
              select ? "text-primary-800" : "text-gray-700"
            }`}
          >
            {title}
          </strong>
          <p
            className={`text-md mb-2 ${
              select ? "text-primary-600" : "text-gray-500"
            }`}
          >
            {expiry}
          </p>
          <p className="flex items-center gap-3">
            <span
              className={`font-medium text-md ${
                select ? "text-primary-500" : "text-gray-500"
              }`}
            >
              Set as default
            </span>
            <button
              type="button"
              className="font-medium text-md text-primary-700"
            >
              Edit
            </button>
          </p>
        </div>
        <div>
          <img
            src={
              select
                ? "/images/_Checkbox base (1).svg"
                : "/images/_Checkbox base.svg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
