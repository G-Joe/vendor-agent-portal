import { useState } from "react";
import "./Input.scss";

type InputProps = {
  label: string;
  children: React.ReactNode;
  style?: any;
  onChange?: any;
  onChangeCapture?: any;
};

const Select = (props: InputProps) => {
  const [labelStyle, setLabelStyle] = useState("#484646");
  const { label, children, style, onChange, onChangeCapture } = props;

  return (
    <div className="form-group" style={style}>
      <label style={{ color: labelStyle }} className="capitalize">
        {label}
      </label>
      <div className="input-wrapper select">
        <select
          onFocus={() => setLabelStyle("#2bd9c7")}
          onBlur={() => setLabelStyle("#484646")}
          onChange={onChange}
          onChangeCapture={onChangeCapture}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default Select;
