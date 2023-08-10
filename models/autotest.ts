import {Schema, model, models} from "mongoose"

const autotestSchema = new Schema({conocimiento: String, edad: String, enfermedad: String, inmune: String}, {timestamps: true})
const Autotest = models.Autotest || model("autotest", autotestSchema)

export default Autotest