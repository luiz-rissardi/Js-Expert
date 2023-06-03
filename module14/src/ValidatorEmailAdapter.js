import isValidEmail from "is-email";

export default function ValidatorEmail(email) {
    return isValidEmail(email)
}