export class Post {
    username:string;
    title:string;
    text:string;
    creationDate:Date;

    constructor(obj?: any){
        this.username = obj && obj.username || null;
        this.title = obj && obj.title || null;
        this.text = obj && obj.text || null;
        this.creationDate = obj && obj.creationDate || null;
    }
}
