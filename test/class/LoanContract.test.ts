import { LoanContract} from "../../src/class/loanContract";

describe("LoanContract Test", () => {
    let contract: LoanContract;

    beforeEach(() => {
        contract = new LoanContract({
            contractId: '№004',
            clientName: 'Anna',
            isActive: false,
            loanAmount: 2000,
            monthlyPayment: 200,
            loanTermMonths: 12,
        })
    })

    afterEach(() => {
        contract.deactivate()
        console.log(`Contract deactivated: ${contract.contractId}`)
    })

    test(`Contract is deactivated`, () => {
        expect(contract.isActive).toBe(false);
    })

    test(`Contract isActive`, () => {
        contract.activate()
        expect(contract.isActive).toBe(true);
    })

    test(`Contract ID`, () => {
        expect(contract.contractId).toBe('№004')
    })

    test(`Client name`, () => {
        expect(contract.clientName).toBe('Anna')
    })

    test(`Loan Amount`, () => {
        expect(contract.loanAmount).toBe(2000);
    })

    test(`Monthly payment`, () => {
        expect(contract.monthlyPayment).toBe(200);
    })

    test(`Loan term months`, () => {
        expect(contract.loanTermMonths).toBe(12);
    })

    test(`Calculate total payments`, () => {
        expect(contract.calculateTotalPayment()).toBe(2400);
    })
})