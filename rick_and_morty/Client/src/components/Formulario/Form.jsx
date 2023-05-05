import styles from "./Form.module.css";
import { useState } from "react";
import { validate } from "./validation";
//import FormImage from "../../Image/Form-2.jpg";
export default function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // userName : Hengers, password: "12345678"
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {/* <img src={FormImage} alt="Not found" /> */}
      {/* <br /> */}

      <div className={styles.containerFondo}>
        <div className={styles.RaMFondo}>
          <img
            className={styles.Image_Fondo}
            src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-Transparent-Images.png"
            alt=""
          />
        </div>
      </div>

      <div className={styles.containerLogin}>
        <div className={styles.RaMLogin}>
          <div>
            <img
              className={styles.Image_RM}
              src="https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/logoburnedinleft?size=600x181&format=png&partner=hbomaxcom&host=art-gallery.api.hbo.com&language=es-es&w=600"
              alt=""
            />
          </div>

          <label htmlFor="">Nombre: </label>
          <input
            type="text"
            value={userData.userName}
            name="userName"
            onChange={handleChange}
            className={errors.userName && styles.warning}
          />
          {errors.userName ? (
            <p style={{ color: "red" }}>{errors.userName}</p>
          ) : null}
          <br />
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
            className={errors.password && styles.warning}
          />
          {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          <br />
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
