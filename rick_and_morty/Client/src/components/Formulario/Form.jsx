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
    <div className={styles.externalDiv}>
      <div className={styles.container}>
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
          <img
            className={styles.Image_RM}
            src="https://www.pngmart.com/files/3/Rick-And-Morty-Transparent-Background.png"
            alt=""
          />
          <form className={styles.RaMLogin} onSubmit={handleSubmit}>
            <label htmlFor="">Email: </label>
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
            <div className={styles.Btn_Log}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
