export default class Form {
    private id: number = 0;

    constructor() {
    }

    public setEntityId(id: number): void {
        this.id = id;
    }

    public onSubmit(event: any): void {
        console.log('submit', event);
    }
}