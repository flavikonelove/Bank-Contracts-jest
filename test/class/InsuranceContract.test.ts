import {InsuranceContract} from "../../src/class/insuranceContract";

describe(`InsuranceContract`, () => {
    let contract: InsuranceContract;

    beforeEach(() => {
        contract = new InsuranceContract({
            insuranceType: 'Tervise Kindlustus',
            clientName: 'Rostislav',
            contractId: '№003',
            isActive: true,
            premium: 1000,
            termYears: 3
        })
    })

    afterEach(() => {
        contract.deactivate()
        console.log(`Contract ${contract.contractId} is deactivated after testing.`)
    })

    test(`Insurance Type`,() => {
        expect(contract.insuranceType).toBe('Tervise Kindlustus');
    })

    test(`Client name`, () => {
        expect(contract.clientName).toBe('Rostislav');
    })

    test(`Contract Id`, () => {
        expect(contract.contractId).toBe('№003')
    })

    test(`Is Active`, () => {
        expect(contract.isActive).toBe(true)
    })

    test(`Is Active disabled`, () => {
        contract.deactivate()
        expect(contract.isActive).toBe(false)
    })

    test(`Premium`, () => {
        expect(contract.premium).toBe(1000)
    })

    test(`TermYears`, () => {
        expect(contract.termYears).toBe(3)
    })

    test(`Calculate total Premium`, () => {
        expect(contract.calculateTotalPremium()).toBe(3000)
    })
})