interface Dictionary<T> {
    [Key: string]: T;
}

interface DOMElement extends Element {
    value: any
}

import axios, { type AxiosStatic } from 'axios'
import { useAuthStore } from './store';
import { computed, type Ref } from 'vue'

export default class Form {
    private id: number = 0;
    private form?: HTMLElement;
    private axios: AxiosStatic;

    // Events
    private onBeforeSubmit?: Function; // Executes before submit request is openned
    private onRequestComplete?: Function; // Executes when the request gets response
    private onRequestSuccess?: Function; // Executes when request response is successfull
    private onRequestError?: Function; // Executes when request response is not successfull

    // Auth
    private authToken?: Ref<string>;

    constructor() {
        this.axios = axios;

        // This method will be called here when token is being set at login
        // For now it is being set on 'setApiUrl'
        //this.getAuthToken();
    }

    private getAuthToken(): void {
        const store = useAuthStore();

        this.authToken = computed(() => store.token);

        // Temporary way of getting token
        if (!store.token) {
            this.axios.post('sanctum/token', {
                email: 'admin@example.com',
                password: 'password',
                token_name: 'front-vue'
            })
            .then(data => {
                // This automatically sets token value to this.autoToken
                store.token = data.data;
                this.axios.defaults.headers["Authorization"] = `Bearer ${this.authToken?.value}`;
            });
        }
    }

    public setEntityId(id: number): void {
        this.id = id;
    }

    public setApiUrl(url: string): void {
        this.axios.defaults.baseURL = url;

        // Temporary get token
        this.getAuthToken();
    }

    public onSubmit(event: any): void {
        this.form = event.target;

        // If 'id' is set, it's an update so use PUT method, otherwise it's a create request, then use POST
        if (this.id) {
            this.openPutRequest();
        }
        else {
            this.openPostRequest();
        }
    }

    private getFormUrl(): string {
        const action = this.form?.getAttribute('action');

        if (!action) {
            throw new Error('Form\'s action is not defined');
        }

        return action;
    }

    private getFormData(): Dictionary<any> {
        const formElements = this.form?.querySelectorAll('input[name]:not(disabled), select[name]:not(disabled)');
        let data:Dictionary<any> = {};

        formElements?.forEach(element => {
            let type = element.getAttribute('type'),
                name = element.getAttribute('name');

            if (name) {
                if (type === 'radio' || type === 'checkbox') {

                }
                else {
                    // I came up with this solution cause 'value' was unknow for type Element. Not sure if it's the best way but it works.
                    data[name] = (element as DOMElement).value;
                }
            }
        });

        return data;
    }

    private openPostRequest(): void {
        this.openApiRequest('POST', this.getFormUrl(), this.getFormData());
    }

    private openPutRequest(): void {
        this.openApiRequest('GET', this.getFormUrl(), this.getFormData());
    }

    private showFormMessage(message: string, isError: boolean = false): void {
        
    }

    private hideFormMessage(): void {

    }

    private openApiRequest(method: string, url: string, data: object): void {
        console.log('open request', method, url, data);

        this.axios({
            url: url,
            data: data,
            method: method,
        })
        .then(this.handleRequestSuccess)
        .catch(this.handleRequestError);
    }

    public bindOnBeforeSubmit(callback: Function): void {
        this.onBeforeSubmit = callback;
    }

    public bindOnRequestComplete(callback: Function): void {
        this.onRequestComplete = callback;
    }

    public bindOnRequestSuccess(callback: Function): void {
        this.onRequestSuccess = callback;
    }

    public bindOnRequestError(callback: Function): void {
        this.onRequestError = callback;
    }

    private handleRequestSuccess(data: object): void {
        console.log('request success', data);
    }

    private handleRequestError(error: any): void {
        console.log('request error', error);
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