import { LoginService } from "./login.service.js";
import { setToken } from "../token/handler.js";
import { ValidationResult } from "../interfaces/validate";
import { TokenResponse } from "../interfaces/token";

export class LoginManager {
    loginService: LoginService;

    constructor() {
        this.loginService = new LoginService();
    }

    checkEmail(formElement: HTMLFormElement, emailErrorElement: HTMLFormElement) {
        const email: string = formElement.email.value;
        const validatedEmail: ValidationResult = this.loginService.validateEmail(email);
        this.loginService.handleEmailValidation(validatedEmail, emailErrorElement);
    }

    checkPassword(formElement: HTMLFormElement, passwordErrorElement: HTMLFormElement) {
        const password: string = formElement.password.value;
        const validatedPassword: ValidationResult = this.loginService.validatePassword(password);
        this.loginService.handlePasswordValidation(validatedPassword, passwordErrorElement);
    }

    isUserDataValid(email: string, password: string) {
        return this.loginService.validateUserData(email, password);
    }

    async loginUser(email: string, password: string) {
        try {
            const result: TokenResponse = await this.loginService.fetchToken(email, password);
            setToken(result.token);
            this.loginService.redirectToGallery();
        } catch(e) {
            alert(e);
        }
    }
}