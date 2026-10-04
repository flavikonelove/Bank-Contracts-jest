import { BaseContract } from "./baseContract";

export class InsuranceContract extends BaseContract {
    insuranceType: string;
    premium: number;
    termYears: number;

    constructor(base: { clientName: string; contractId: string; isActive: boolean; premium: number; termYears: number; insuranceType: string }) {
        super(base);
        this.insuranceType = base.insuranceType;
        this.premium = base.premium;
        this.termYears = base.termYears;
    }

    calculateTotalPremium(): number {
        return this.premium * this.termYears;
    }
}