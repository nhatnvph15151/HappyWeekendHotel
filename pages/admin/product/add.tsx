import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import layoutAdmin from '../../../components/Layout/layoutAdmin';
import useProducts from '../../../hook/use-product';
import { ProductType } from '../../../types/products';

type Props ={

}
 type forminput = {
    name:string,
    price : number,
    image:string,
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
      <div className="flex flex-col bg-white border rounded">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full   sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <form action="" onSubmit={handleSubmit(Submit)} className='p-4'>
                <div className='pb-4'>
                  <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
                  <input type="text" {...register("name")} name="name" className='border p-2 w-full'  placeholder="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">price</label>
                  <input type="number"{...register("price")} name="price" className='border p-2 w-full' placeholder="price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">img</label>
                  <input type="text"{...register("image")} name="image" className='border p-2 w-full' placeholder="img" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">description</label>
                  <textarea className='border p-2 w-full'{...register("description")} name="description" rows={3} defaultValue={""} />
                </div>
                <button className='rounded-full bg-pink-500 py-2 px-10 text-white text-lg'>add</button>
              </form>
            </div>
          </div>
        </div> 
    </div>
    </div>
  )
}
Addroom.Layout = layoutAdmin
export default Addroom

