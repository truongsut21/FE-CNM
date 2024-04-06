import { useEffect, useState } from "react";

function InputAreaFormik({
  type,
  name,
  onChange,
  value,
  labelTitle,
  containerStyle,
  labelStyle,
  errors,
  disabled = false,
}) {
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>

      <textarea
        value={value}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        name={name}
        onChange={onChange}
        disabled={disabled}
        cols="30"
        rows="5"
      ></textarea>
      <div className="text-rose-600">{errors}</div>
    </div>
  );
}

export default InputAreaFormik;
