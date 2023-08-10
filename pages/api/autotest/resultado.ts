import type {NextApiRequest, NextApiResponse} from 'next'
import {connectMongoDB} from "../../../libs/mongodb"
import Autotest from "../../../models/autotest"

type Resultado = {
	conocimiento: string
	edad: string
	enfermedad: string
	inmune: string
}

export default async function POST(req: NextApiRequest, res: NextApiResponse<Resultado>) {
	const { conocimiento, edad, enfermedad, inmune } = await req.body
	await connectMongoDB()
	await Autotest.create({ conocimiento, edad, enfermedad, inmune })

	res.status(200).json({
		conocimiento,
		edad,
		enfermedad,
		inmune
	})
}