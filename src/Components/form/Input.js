import PropType from "prop-types";
const Input = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      className={props.className}
    />
  );
};

Input.prototype = {
  id: PropType.string.isRequired,
  type: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  name: PropType.string,
  className: PropType.string,
};

export default Input;
