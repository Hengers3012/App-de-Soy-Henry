import { useNavigate } from "react-router-dom";
import style from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container404}>
      <h1 className={style.titulo}>Error 404</h1>
      <img
        className={style.imagen}
        src="https://i.redd.it/o6px8q59yw401.jpg"
        alt=""
      />
      <button
        className={style.boton}
        onClick={() => {
          navigate("/home");
        }}
      >
        Welcome Home
      </button>
    </div>
  );
};
export default Error404;
