document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector("#registerForm");
    const nameInp = document.querySelector("#registerName");
    const emailInp = document.querySelector("#registerEmail");
    const passwordInp = document.querySelector("#registerPassword");

    registerForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        let newUser = {
            name: nameInp.value,
            email: emailInp.value,
            password: passwordInp.value
        };

            let response = await axios.post("http://localhost:5050/users/register", newUser);
            let token=response.headers["x-auth-token"]
            console.log(response.headers["x-auth-token"])
           if(token){
               localStorage.setItem("token",token)
               window.location.href="product.html"}
    });
})



      
   
