import { useEffect, useState } from "react";

import "./styles.css";

export function MultiSelect({ data = ["no-data"], setData, ...props }) {
  const [currentData, setCurrentData] = useState(
    data.map((i) => i.value.toString())
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setData(currentData);
  }, []);

  const handleSelect = (value) => {
    const item = currentData.find((i) => i === value);

    let tempList = currentData.filter((i) => i !== "no-data");

    if (item) tempList = tempList.filter((i) => i !== value.toString());
    else tempList = [...tempList, value.toString()];

    if (tempList.length) setCurrentData(tempList);
    else {
      setCurrentData(["no-data"]);
    }
  };

  const toggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="select-container" {...props} onClick={toggle}>
        <div className="select-data">
          {currentData.length
            ? `${currentData.length} selecionado(s)`
            : "Selecione..."}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? "select-content-is-visible" : ""}
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="select-content">
            {data.map((item) => (
              <li
                className={`select-item ${
                  currentData.some((i) => i === item.value)
                    ? "select-item-selected"
                    : ""
                }`}
                key={item.value}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(item.value);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
                </svg>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isOpen && <div onClick={toggle} className="select-background" />}
    </>
  );
}
