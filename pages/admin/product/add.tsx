import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useProducts from '../../../hook/use-product';
import { ProductType } from '../../../types/products';

type Props ={

}
 type forminput = {
    name:string,
    price : number,
    img:string,
    description:string
 }
const Addroom = (props: Props) => { 
    const { register, handleSubmit, formState: { errors } ,reset } = useForm<forminput>();
    const { add, data, error } = useProducts()
    const router = useRouter()
    const Submit: SubmitHandler<any> = (data: any) => {
      add(data)
        reset();
         router.push("/admin/product")
    }
    console.log({...register("name")})
  return (
    <div>
         <form action="" onSubmit={handleSubmit(Submit)}>
         <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
              <input type="text" {...register("name")} name="name" className="form-control"  placeholder="name" />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">price</label>
              <input type="number"{...register("price")} name="price"  className="form-control"  placeholder="price" />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">img</label>
              <input type="text"{...register("img")} name="img"   className="form-control"  placeholder="img" />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">description</label>
              <textarea className="form-control"{...register("description")} name="description"    rows={3} defaultValue={""} />
          </div>
          <button>add</button>
          </form>
    </div>
  )
}

export default Addroom

