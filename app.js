const container = document.querySelector(".container");
const form = document.querySelector("form");

const imgEle = document.createElement("img");

let src;
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    src = data.message;
    imgEle.src = src;
  });
// console.log(src);

container.append(imgEle);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const pass = document.querySelector('input[type="password"]').value;
  console.log(email, pass);

  const submitForm = async () => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
      AIzaSyBc3mXjf66d5m9G4nUoU5KJbbCR9vXGw8Q`,
        {
          method: "POST",
          body: JSON.stringify({ email, password: pass }),
          returnSecureToken: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log("Error :", err);
    }
  };

  submitForm();
});
