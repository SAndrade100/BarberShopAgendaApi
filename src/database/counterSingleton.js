import Counter from "./models/Counter.js"

async function counterSingleton() {
    try {
        const existingCounter = await Counter.findOne({ key: 'singleton' })
        if (!existingCounter) {
            await Counter.create({ value: 0 })
        } else {
            console.log('Counter já existe')
        }
    } catch(err) {
        console.error('Counter não inicializado: ', err)
    }
}

export default counterSingleton