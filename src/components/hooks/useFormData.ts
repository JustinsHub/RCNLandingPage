import { useState, ChangeEvent } from "react"

const useFormData = (init: any) => { //Change type to correct input parameter
    const [formData, setFormData] = useState(init)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((state: {})=> ({...state, [name]: value}))
    }
    return [formData, handleChange]
}

export default useFormData
