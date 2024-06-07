import { Link } from "react-router-dom";
export function ButtonInit(props) {
  const Style = {
    width: props.width,
    height: props.height,
  };
  return (
    <Link to={"/login"}>
      <button id="BT_init" style={Style}>
        <b>{props.tittle}</b>
      </button>
    </Link>
  );
}

export function ButtonRegister(props) {
  const Style = {
    width: props.width,
    height: props.height,
  };
  return (
    <Link to={"/register"}>
      <button id="BT_reg" style={Style}>
        <b>{props.tittle}</b>
      </button>
    </Link>
  );
}
