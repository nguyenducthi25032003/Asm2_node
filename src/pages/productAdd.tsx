
// 1. Xây dựng giao diện form
// 2. Cần import thư viện quản lý form
// 3. Khai bao cac truong du lieu trong form va validate form
// 4. Su dung resolver de tich hop yup va react-hook-form

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import { SignupForm, addForm, addSchema, signupSchema } from '../models';
import { add } from '../api/products';



const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: addForm) => {
        try {
            const response = await add(data)
            console.log(response);
            navigate('/admin')
            
        }catch(err) {
            console.log(err);
            
        }

    }

    return <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <main
                aria-label="Main"
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    

                    <h1
                        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                    >
                        Thêm sản phẩm🦑
                    </h1>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
                        

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tên sản phẩm
                            </label>

                            <input
                                {...register('name')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.name && errors.name.message}
                            </p>
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>

                            <input
                                {...register('price')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.price && errors.price.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>

                            <input
                                type="description"
                                {...register('description')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.description && errors.description.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Thêm 
                            </button>

                           
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </section>

}

export default AddProduct
