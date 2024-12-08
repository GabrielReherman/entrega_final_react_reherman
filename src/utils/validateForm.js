import { object, string, mixed } from "yup"

let userSchema = object({
  fullname: string().required("el campo nombre es requerido"),
  phone: mixed().required("el campo telefono es requerido"),
  email: string().email("el campo email no tiene el formato correcto").required("el campo email es requerido")
})

const validateForm = async(dataForm) => {

  try{
    await userSchema.validate(dataForm)
    return { status: "success" }
  }catch(error){
    return { status: "error", message: error.message }
  }

}

export default validateForm