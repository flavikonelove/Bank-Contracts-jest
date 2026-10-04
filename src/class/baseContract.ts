export class BaseContract {
    contractId: string
    clientName: string
    isActive: boolean

    constructor(base: { contractId: string; clientName: string; isActive: boolean}){
        this.contractId = base.contractId
        this.clientName = base.clientName
        this.isActive = base.isActive
    }

    activate(): void {
       this.isActive = true
    }

    deactivate(): void {
        this.isActive = false
    }
}