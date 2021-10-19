import tw from "tailwind-styled-components";
import propTypes from "prop-types";

const getStyle = (variant) => {
  switch (variant) {
    case "primary": {
      return "bg-blue-600 border-blue-600 hover:text-blue-600";
    }
    case "secondary": {
      return "bg-purple-600 border-purple-600 hover:text-purple-600";
    }
    case "success": {
      return "bg-green-600 border-green-600 hover:text-green-600";
    }
    case "info": {
      return "bg-blue-300 border-blue-300 hover:text-blue-300";
    }
    case "warning": {
      return "bg-yellow-600 border-yellow-600 hover:text-yellow-600";
    }
    case "danger": {
      return "bg-red-600 border-red-600 hover:text-red-600";
    }
    default:
      return "bg-gray-600 border-gray-600 hover:text-gray-600";
  }
};

const button = tw.button`
  ${(p) => getStyle(p.variant)}
  text-center
  px-1
  p-1
  m-1
  border-2
  rounded-md
  text-sm
text-white
hover:bg-white
  `;

button.propTypes = {
  variant: propTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
  ]),
};

export const ButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
};

export default button;
