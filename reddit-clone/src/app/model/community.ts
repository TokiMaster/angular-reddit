export class Community{
    name:string;
    description:string;

    constructor(obj?:any){
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
    }
}