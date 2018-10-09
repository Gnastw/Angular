export class User {
    private _email: string;
    private _password: string;
    private _name: string;

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

}