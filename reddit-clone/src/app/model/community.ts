export class Community{
    id:number;
    name:string;
    description:string;
    creationDate:Date;

    constructor(obj?:any){
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.creationDate = obj && obj.creationDate || null;
    }
}