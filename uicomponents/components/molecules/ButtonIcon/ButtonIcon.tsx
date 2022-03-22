import React from "react";
import { Primary as Button } from "../../atoms/Button/Button.stories";
import { Primary as Icon } from "../../atoms/Icon/Icon.stories";

interface ButtonIconProps {
  icon: any;
  children?: any;
}
const ButtonIcon = ({ icon, children }: ButtonIconProps) => (
  <Button>
    {children}
    <Icon type={icon} />
  </Button>
);

export default ButtonIcon;
