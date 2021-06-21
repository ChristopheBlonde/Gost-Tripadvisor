document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document.querySelector("#contact").addEventListener("click", () => {
    document.querySelector("#modale").classList.remove("hidden");
  });

  document.querySelector("#cross").addEventListener("click", () => {
    document.querySelector("#modale").classList.add("hidden");
  });

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      const response = await axios.post(
        "https://tripadvisor-ghost.herokuapp.com/contact",
        data
      );
      document.querySelector("#modale").classList.add("hidden");
      if (response.status === 200) {
        alert("Le message a bien été envoyé");
      } else {
        alert("Oups il y a eu un problème le message n'est pas parti");
      }
    });
  document.querySelector("#openModal").addEventListener("click", () => {
    document.querySelector("#modale").classList.remove("hidden");
  });
});
