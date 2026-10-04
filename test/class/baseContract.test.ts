import { BaseContract } from "../../src/class/baseContract"

describe("baseContract method", () => {
    let contract: BaseContract

    beforeEach(() => {
        contract = new BaseContract({
            contractId: '№001',
            clientName: 'Stefan Strelkov',
            isActive: true
        })
    })

    afterEach(() => {
        contract.deactivate()
        console.log(`Contract ${contract.contractId} has been deactivated after testing.`)
    })

    test(`contractId`, () => {
        expect(contract.contractId).toBe('№001')
    })

    test(`clientName`, () => {
        expect(contract.clientName).toBe('Stefan Strelkov')
    })

    test(`isActive`, () => {
        expect(contract.isActive).toBe(true)
    })

    test(`isActive deactivated`, () => {
        contract.deactivate()
        expect(contract.isActive).toBe(false)
    })

    test(`deactivate and activate`, () => {
        contract.deactivate()
        contract.activate()
        expect(contract.isActive).toBe(true)
    })
})