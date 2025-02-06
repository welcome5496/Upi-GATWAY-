document.getElementById("signupForm").onsubmit = async function(event) {
    event.preventDefault();
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
    });

    let result = await response.json();
    alert(result.message);
};

document.getElementById("loginForm").onsubmit = async function(event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
    });

    let result = await response.json();
    if (result.token) {
        localStorage.setItem("token", result.token);
        window.location.href = "/frontend/dashboard.html";
    } else {
        alert("Invalid credentials");
    }
};
