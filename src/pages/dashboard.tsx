import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getAll } from "../api/products"
import { IProduct } from "../models"
import axios from "axios"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const removeProduct =(id: string)=>{
        axios.delete(`http://localhost:8080/api/products/${id}`)
        .then((respone)=>{
            const newData = products.filter((product)=>product._id!=id)
            setProducts(newData)
        })
    }

    return <>
    <div className="flex justify-between items-center ml-1">
        <h2>Product list</h2>
        <a href="{`/admin/productAdd`}" className="bg-blue-600 text-white rounded-md p-2">Add</a>
    </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Mô tả
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr key={product._id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product._id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.description}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[80%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <button onClick={()=>removeProduct(product._id)} className="bg-red-600 text-white rounded-md p-2">Xoá</button>
                                <a href={`/admin/updateProduct/${product._id}`} className="bg-blue-600 text-white rounded-md p-2">Update</a>
                                <a href={`/admin/product`} className="bg-blue-600 text-white rounded-md p-2" >Add</a>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard
