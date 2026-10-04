import { BaseContract } from "./baseContract";

export class LoanContract extends BaseContract {
    loanAmount: number;
    monthlyPayment: number;
    loanTermMonths: number;

    constructor(base:{contractId: string; clientName: string; isActive:boolean; loanAmount: number; monthlyPayment:number; loanTermMonths:number;}) {
        super(base);
        this.loanAmount = base.loanAmount;
        this.monthlyPayment = base.monthlyPayment;
        this.loanTermMonths = base.loanTermMonths;
    }

    calculateTotalPayment(): number {
        return this.monthlyPayment * this.loanTermMonths;
    }
}