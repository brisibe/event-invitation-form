import PropType from "prop-types";

const Button = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropType.string.isRequired,
  onClick: PropType.func,
};

export default Button;
