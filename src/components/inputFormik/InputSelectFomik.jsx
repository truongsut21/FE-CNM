import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function InputSelectFomik({
  type,
  labelTitle,
  defaultValue,
  updateFormValue,
  updateType,
  options,
  placeholder = "",
  errors,
  containerStyle,
  labelStyle,
  formik,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val) => {
    setValue(val);
    console.log("val:", val);
    console.log("val.value:", val.value);
    const value = val.map((item) => item.value);
    formik.setFieldValue(updateType, value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const colourStyles = {
    container: (styles) => ({ ...styles, width: "100%", height: "2rem" }),
    control: (styles) => ({
      ...styles,
      width: "100%",
      backgroundColor: "white",
      height: "3rem",
    }),
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <Select
        isMulti
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={updateInputValue}
        styles={colourStyles}
      />
      <div className="text-rose-600 mt-4">{errors}</div>
    </div>
  );
}
