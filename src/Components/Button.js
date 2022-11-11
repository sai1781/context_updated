import { useContext } from "react";
import contextTheme from "../Context";

const Button = () => {

    const {light,changeTheme} = useContext(contextTheme)
    console.log(light);
  return (
    <div>
        <button onClick={ ()=>changeTheme(!light)} >Button {light === true?"True":"False"}</button>
        </div>
  )
}

export default Button;