export class User{
    displayName:string;
    email:string;
    username:string;
    password:string;

    constructor(obj?: any){
        this.username = obj && obj.username || null;
        this.password = obj && obj.password || null;
        this.email = obj && obj.email || null;
        this.displayName = obj && obj.displayName || null;
    }
}