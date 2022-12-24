import mongoose from 'mongoose'

/* 
 * 0 = Disconnected
 * 1 = Connected
 * 2 = Connecting
 * 3 = Disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if (mongoConnection.isConnected === 1) { 
        console.log('DB Connected')
        return 
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState
        if (mongoConnection.isConnected === 1) {
            console.log('Usando conexion anterior')
            return 
        }
        await mongoose.disconnect()
    }

    await mongoose.connect('....')
    mongoConnection.isConnected = 1
    console.log('Conectado a Mongo DV', '....')
}

export const disconnect = async () => {
    if (mongoConnection.isConnected !== 0) return 
    await mongoose.disconnect()
    console.log('Desonectado de Mongo DB')
}