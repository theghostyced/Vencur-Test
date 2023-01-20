import React, {useState} from "react";

function Checkbox() {
  const icons = [
    "/images/_Checkbox base (3).svg",
    "/images/_Checkbox base (2).svg",
  ];
  const [checked, setChecked] = useState<0 | 1>(0);
  const toggle = () =>
    setChecked((v) => {
      return v === 0 ? 1 : 0;
    });

  return (
    <div role="button" className="inline-block" onClick={toggle}>
      <img src={icons[checked]} alt="" />
    </div>
  );
}

export default Checkbox;
