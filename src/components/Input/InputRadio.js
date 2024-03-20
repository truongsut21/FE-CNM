import React, { useState } from "react";

function InputRadio({ options, containerStyle, defaultValue, updateFormValue, updateType }) {
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = (val) => {
        setValue(val);
        updateFormValue({ updateType, value: val });
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            {options.map((option, i) => (
                <div key={i} className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">{option.label}</span>
                        <input
                            type="radio"
                            name={`radio-${i}`}
                            className="radio checked:bg-blue-500"
                            checked={value === option.value}
                            onChange={() => updateInputValue(option.value)}
                        />
                    </label>
                </div>
            ))}
        </div>
    );
}

export default InputRadio;
