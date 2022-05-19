export class UserLoginDTO{
    username:string;
    password:string;
    
    constructor(obj?: any){
        this.username = obj && obj.username || null;
        this.password = obj && obj.password || null;
    }
}