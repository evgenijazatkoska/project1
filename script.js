function validateForm() {
    const form = document.getElementById('myForm');
    let formValid = true;

    form.querySelectorAll('input, select').forEach((element) => {
        const errorDiv = element.nextElementSibling;
        if (element.value === "") {
            formValid = false;
            element.classList.add("is-invalid");
            errorDiv.textContent = "Полето е задолжително.";
            errorDiv.style.color = "red";
        } else {
            element.classList.remove("is-invalid");
            errorDiv.textContent = "";
        }
    });

    if (formValid) {
        form.submit(); 
    }
}


