import React, { PropTypes } from "react";
import styles from "./Radio.css";

const isChecked = (value, chosenValue) => value === chosenValue;

const isDisabled = (disabled, allDisabled) => (disabled === true || allDisabled === true);

const mapOptions = (name, options, chosenValue, allDisabled, onChange) => ( options.map(
  ({text, value, disabled = false}) => (
    <label className={styles[isDisabled(disabled, allDisabled) ? "disabledLabel" : "label"]} key={value}>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        value={value}
        checked={isChecked(value, chosenValue)}
        disabled={isDisabled(disabled, allDisabled)}
        onChange={onChange}
      />
      { text ? text : value }
    </label>
  )
));

const RadioGroup = ({
  disabled = false,
  name,
  onChange,
  options,
  value,
}) => (
  <div>
    { mapOptions(name, options, value, disabled, onChange) }
  </div>
);

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string,
};

export default RadioGroup;