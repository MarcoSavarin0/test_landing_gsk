import { connect } from "mongoose"

const conn = {
	isConnected: false,
}

export const connectMongoDB = async () => {
	if (conn.isConnected) {
		return
	}

	try {
		const db = await connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`)
		if(db.connections[0].readyState == 0) {
			conn.isConnected = true
		}
	} catch (error) {
		console.error(error)
	}
}