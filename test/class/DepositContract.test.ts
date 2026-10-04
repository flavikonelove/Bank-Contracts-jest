import {DepositContract} from "../../src/class/depositContract";

describe(`DepositContract`, () => {
    let contract: DepositContract

    beforeEach(() => {
        contract = new DepositContract({
            amount: 10000,
            clientName: 'Vital',
            contractId: '№002',
            interestRate: 25,
            isActive: true
        })
    })

    afterEach(() => {
        contract.deactivate()
        console.log(`Contract ${contract.contractId} is deactivated after testing.`)
    })

    test(`contractId`, () => {
        expect(contract.contractId).toBe('№002')
    })

    test(`clientName`, () => {
        expect(contract.clientName).toBe('Vital')
    })

    test(`amount`, () => {
        expect(contract.amount).toBe(10000)
    })

    test(`isActive`, () => {
        expect(contract.isActive).toBe(true)
    })

    test(`deactivated`, () => {
        contract.deactivate()
        expect(contract.isActive).toBe(false)
    })

    test(`interestRate`, () => {
        expect(contract.interestRate).toBe(25)
    })

    test(`calculate interest`, () => {
        expect(contract.calculateInterest()).toBe(2500)
    })
})