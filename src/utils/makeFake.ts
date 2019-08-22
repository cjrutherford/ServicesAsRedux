import * as faker from 'faker';

const MakeFake = (iterationsBatch, iterationsInvoice) => {
    const datafake = [];
    for(let i=0; i< iterationsBatch; i++){
        const singleBatch = {
            batchId: faker.random.uuid(),
            description: faker.lorem.words(10),
            startDate: faker.date.past(),
            endDate: faker.date.recent(),
            createdDate: faker.date.weekday(),
            status: faker.company.catchPhrase(),
            invoices: (() => {
                const invoices = []
                for(let j = 0; j < iterationsInvoice; j++ ){
                    const singleInvoice = {
                        vendor: faker.company.companyName(),
                        facility: faker.address.city(),
                        POnumber: faker.random.alphaNumeric(),
                        invoiceNumber: faker.random.alphaNumeric(),
                        invoiceAmount: faker.finance.amount(),
                        status: faker.commerce.productAdjective(),
                    }
                    invoices.push(singleInvoice);
                }
                return invoices;
            })()
        }
        datafake.push(singleBatch);
    }
    return datafake;
}

// const fk = MakeFake(10, 20);

// console.log(fk);

export default MakeFake;