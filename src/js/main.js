// contact form validation

const nameLoc = document.querySelector("#name");
const mailLoc = document.querySelector("#mail");
const messageLoc = document.querySelector("#message");
const agreementLoc = document.querySelector("#agreement");

const nameErrLoc = document.querySelector("#name-error");
const mailErrLoc = document.querySelector("#mail-error");
const mailErrLoc2 = document.querySelector("#mail-error2");
const messageErrLoc = document.querySelector("#message-error");
const agreementErrLoc = document.querySelector("#agreement-error");

const buttonLoc = document.querySelector('input[type="submit"]');

let validationPass = true;

const validateEmpty = (e) => {
    input = e.target;
    validateEmptyAll(input);
};

const validateEmptyAll = (input) => {
    if (input.value.length === 0) {
        input.nextElementSibling.classList.add("active");
        validationPass = false;
        if (input.id === "mail") {
            mailErrLoc2.classList.remove("active");
        }
        input.classList.add("error");
    } else {
        input.nextElementSibling.classList.remove("active");
        input.classList.remove("error");
    }
};

const validateCheckbox = (e) => {
    checkbox = e.target;
    validateCheckboxAll(checkbox);
};

const validateCheckboxAll = (checkbox) => {
    if (!checkbox.checked) {
        agreementErrLoc.classList.add("active");
        validationPass = false;
    } else {
        agreementErrLoc.classList.remove("active");
    }
};

const validateAll = (e) => {
    validationPass = true;
    e.preventDefault();
    validateEmptyAll(nameLoc);
    validateEmptyAll(mailLoc);
    validateEmptyAll(messageLoc);
    validateCheckboxAll(agreementLoc);
    validateEmailAll(mailLoc);
    if (validationPass) {
        alert("Walidacja prawidłowa! :)");
    } else {
        alert("Walidacja nieprawidłowa! :(");
    }
};

const validateEmail = (e) => {
    input = e.target;
    validateEmpty(e);
    validateEmailAll(input);
};

const validateEmailAll = (emailLoc) => {
    if (
        !String(emailLoc.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    ) {
        if (emailLoc.value !== "") {
            mailErrLoc2.classList.add("active");
            validationPass = false;
            mailLoc.classList.add("error");
        } else {
            mailErrLoc2.classList.remove("active");
            validationPass = false;
            mailLoc.classList.add("error");
        }
    } else {
        if (emailLoc.value !== "") {
            mailErrLoc2.classList.remove("active");
            mailLoc.classList.remove("error");
        } else {
            mailErrLoc2.classList.remove("active");
            validationPass = false;
            mailLoc.classList.add("error");
        }
    }
};

try {
    nameLoc.addEventListener("blur", validateEmpty);
    nameLoc.addEventListener("keyup", validateEmpty);
    mailLoc.addEventListener("blur", validateEmail);
    mailLoc.addEventListener("keyup", validateEmpty);
    messageLoc.addEventListener("blur", validateEmpty);
    messageLoc.addEventListener("keyup", validateEmpty);

    agreementLoc.addEventListener("click", validateCheckbox);

    buttonLoc.addEventListener("click", validateAll);
} catch (e) {}

// mobile menu

const subMenuTitleLoc = document.querySelector(".parent-sub-menu");
const subMenuLoc = document.querySelector(".sub-menu");
const hamburgerLoc = document.querySelector(".hamburger");
const mobileMenuLoc = document.querySelector("header nav > ul");
const closeMobileMenuBtnLoc = document.querySelector(".close-btn");
const closeMobileMenuBarsLoc = document.querySelector(".close-btn .bars");
const hamburgerBarsLoc = document.querySelector(".hamburger .bars");

subMenuTitleLoc.addEventListener("click", () => {
    subMenuLoc.classList.toggle("active");
});

hamburgerLoc.addEventListener("click", () => {
    mobileMenuLoc.classList.toggle("show");
    closeMobileMenuBarsLoc.classList.remove("ham");
    subMenuLoc.classList.remove("active");
    hamburgerBarsLoc.classList.toggle("ham");
});

closeMobileMenuBtnLoc.addEventListener("click", () => {
    mobileMenuLoc.classList.remove("show");
    closeMobileMenuBarsLoc.classList.add("ham");
    subMenuLoc.classList.remove("active");
    hamburgerBarsLoc.classList.add("ham");
});
