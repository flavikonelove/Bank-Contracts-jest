import {BaseContract} from "./baseContract";

export class DepositContract extends BaseContract {
    amount: number;
    interestRate: number;

    constructor(base: {contractId:string; clientName: string; isActive: boolean; amount: number, interestRate: number}) {
        super(base);
        this.amount = base.amount;
        this.interestRate = base.interestRate;
    }

    calculateInterest(): number {
       return (this.amount * this.interestRate) / 100;
    }
}