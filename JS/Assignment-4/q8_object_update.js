<<<<<<< HEAD
let user = { name: "John", email: "john@mail.com", age: 21 };

updateForm.addEventListener("submit", e => {
    e.preventDefault();
    user.name = name.value;
    user.email = email.value;
    user.age = age.value;
    output.textContent = JSON.stringify(user, null, 2);
});
=======
let user = { name: "John", email: "john@mail.com", age: 21 };

updateForm.addEventListener("submit", e => {
    e.preventDefault();
    user.name = name.value;
    user.email = email.value;
    user.age = age.value;
    output.textContent = JSON.stringify(user, null, 2);
});
>>>>>>> c2b317ebf8ef8febcb1e0c33420d57a9509ce0da
