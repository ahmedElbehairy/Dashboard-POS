
export const SUCCESS = '[customer] success'
export const FATLED = '[customer] failed'
export const LOAD = '[customer] load'

export class loadCustomerAction {
    type: string = LOAD
}

export class SuccessAction {
    type: string = SUCCESS
    payload: any 
    constructor(payloead:any ) {
        this.payload = payloead
    }
}
export class erorrAction {
    type: string = FATLED
    payload:any
    constructor(payloead:any ) {
        this.payload = payloead
    }
}