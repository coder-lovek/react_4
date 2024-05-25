import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
function Form() {
    const onSubmit=(data)=>{
        console.log(data)
        
    }
    const schema=yup.object().shape({
        fullname:yup.string().required("your name is required"),
        email:yup.string().required(),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(4).max(20).required(),
        confirmpass:yup.string().oneOf([yup.ref("password"),null]).required()
        
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: yupResolver(schema)
    }
    )
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"  placeholder='Fullname' {...register("fullname")} />
        <p>{errors.fullname?.message}</p>
        <br />
        <input type="text" placeholder='Email'{...register("email")}/>        <br />

        <input type="text"  placeholder='Age' {...register("age")}/>        <br />

        <input type="text" placeholder='Password'{...register("password")}/>        <br />

        <input type="text" placeholder='confirm password'{...register("confirmpass")}/>        <br />

        <input type="submit" />        

    </form>

    

    )
}

export default Form