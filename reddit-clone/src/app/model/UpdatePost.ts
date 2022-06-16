export class UpdatePost{
    id:number;
    text: string;
    constructor(obj?: any){
        this.id = obj && obj.id || null;
        this.text = obj && obj.text || null;
    }
}