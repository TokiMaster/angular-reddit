export class User{
    name:string;
    email:string;
    username:string;
    password:string;

    constructor(obj?: any){
        this.name = obj && obj.name || null;
        this.email = obj && obj.email || null;
        this.username = obj && obj.username || null;
        this.password = obj && obj.password || null;
    }
}