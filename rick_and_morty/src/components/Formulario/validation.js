// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
export const validate = (inputs) => {
  // inputs --. {userName: "Hengers", password :"12345678"}
  const errors = {};
  if (!regexEmail.test(inputs.userName)) {
    errors.userName = "Debe escribir un email valido";
  }
  if (!inputs.userName) {
    errors.userName = "Debe completar este cambo";
  }
  if (inputs.userName.length > 40) {
    errors.userName = "Este campo no puede contener mas de 40 caracteres";
  }
  if (!validLettersAndNumbers.test(inputs.password)) {
    errors.password = "Debe contener como minimo un numero";
  }
  if (inputs.password.length < 8 || inputs.password.length > 12) {
    errors.password = "Debe tener entre 8 y 12 caracteres";
  }
  return errors;
  // errors = {userName= ""}
};
