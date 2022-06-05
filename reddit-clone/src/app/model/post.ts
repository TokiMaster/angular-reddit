export class Post {
    id:number;
    communityId:number;
    username:string;
    title:string;
    text:string;
    creationDate:Date;

    constructor(obj?: any){
        this.id = obj && obj.id || null;
        this.communityId = obj && obj.communityId || null;
        this.username = obj && obj.username || null;
        this.title = obj && obj.title || null;
        this.text = obj && obj.text || null;
        this.creationDate = obj && obj.creationDate || null;
    }
}
