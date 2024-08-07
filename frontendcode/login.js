document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#loginForm");
    const emailInp = document.querySelector("#loginEmail");
    const passwordInp = document.querySelector("#loginPassword");
    
    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        let newUser = {
            email: emailInp.value,
            password: passwordInp.value
        };

            let response = await axios.post("http://localhost:5050/users/login", newUser);
            let token=response.headers["x-auth-token"]
            console.log(response.headers["x-auth-token"])
           if(token){
               localStorage.setItem("token",token)
               window.location.href="product.html"}
    });
})

