function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass = document.getElementById("password").value;
      const confirm = document.getElementById("confirmPassword").value;
      if (pass !== confirm) {
        alert("Passwords do not match!");
      } else {
        alert("Registration successful!");
        window.location.href = "index.html";
      }
    });
  }
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful! (Dummy)");
    });
  }
});