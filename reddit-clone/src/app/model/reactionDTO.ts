export class reactionDTO{
    type:string;
    postID:number;

    constructor(type: string, postID:number){
        this.type = type;
        this.postID = postID;
    }

}