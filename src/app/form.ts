import axios from 'axios'

export default class Form {
    private id: number = 0;
    private apiUrl?: string;
    private form?: HTMLElement;

    // Events
    private onBeforeSubmit?: Function; // Executes before submit request is openned
    private onRequestComplete?: Function; // Executes when the request gets response

    constructor() {
    }

    public setEntityId(id: number): void {
        this.id = id;
    }

    public setApiUrl(url: string): void {
        this.apiUrl = url;
    }

    public onSubmit(event: any): void {
        const formData: object = {};

        this.form = event.target;

        // If 'id' is set, it's an update so use PUT method, otherwise it's a create request, then use POST
        if (this.id) {
            this.openPutRequest(formData);
        }
        else {
            this.openPostRequest(formData);
        }
    }

    private getFormUrl(): string {
        if (!this.apiUrl) {
            throw new Error('Api url not set');
        }

        const action = this.form?.getAttribute('action');

        if (!action) {
            throw new Error('Form\'s action is not defined');
        }

        return this.apiUrl + '/' + action;
    }

    private openPostRequest(data: object): void {
        this.openApiRequest('POST', this.getFormUrl(), data);
    }

    private openPutRequest(data: object): void {
        this.openApiRequest('GET', this.getFormUrl(), data);
    }

    private showFormMessage(message: string, isError: boolean = false): void {
        
    }

    private hideFormMessage(): void {

    }

    private openApiRequest(method: string, url: string, data: object): void {
        console.log('open request', method, url, data);
    }

    public bindOnBeforeSubmit(callback: Function): void {
        this.onBeforeSubmit = callback;
    }

    public bindOnRequestComplete(callback: Function): void {
        this.onRequestComplete = callback;
    }
}

class RequestResponse {
    public id: number = 0;
    public status: boolean = true;
    public erros: Array<string> = [];

    public getId(): number {
        return this.id;
    }

    public getStatus(): boolean {
        return this.status;
    }

    public hasErrors(): boolean {
        return !!this.erros.length;
    }

    public getErrors(): Array<string> {
        return this.erros;
    }
}