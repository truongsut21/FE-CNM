import { useEffect, useState } from "react";

function InputTextFormik({
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
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="input  input-bordered w-full "
      />
      <div className="text-rose-600">{errors}</div>
    </div>
  );
}

export default InputTextFormik;
