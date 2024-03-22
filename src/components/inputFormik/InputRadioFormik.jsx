import React from "react";

function InputRadioFormik({
  name,
  onChange,
  value,
  labelTitle,
  containerStyle,
  labelStyle,
  errors,
  disabled = false,
  options,
}) {
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      {options.map((option, i) => (
        <div key={i} className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">{option.label}</span>
            <input
              type="radio"
              name={name}
              className="radio checked:bg-blue-500"
              checked={value === option.value}
              onChange={onChange}
              value={option.value}
            />
          </label>
        </div>
      ))}
      <div className="text-rose-600">{errors}</div> {/* Assuming errors is a string */}
    </div>
  );
}

export default InputRadioFormik;
