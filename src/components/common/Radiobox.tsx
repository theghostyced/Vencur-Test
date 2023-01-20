import React, {useState} from "react";

function Radiobox() {
  const icons = ["/images/Checkbox.svg", "/images/Checkbox (1).svg"];
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

export default Radiobox;
