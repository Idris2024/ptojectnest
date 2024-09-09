export default class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    passwordHash: string;

    constructor (id:number, firstname:string, lastname: string, email: string, password: string, passwordHash: string ){
    this.id  = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.passwordHash = passwordHash

    }
}