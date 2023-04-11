import {Link} from 'react-router-dom'
import { IProduct } from "../models";

type Props = {
    data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data._id}`} className="block">
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>
        <img
            alt="Art"
            src="./slider1.png" style={{width:"200px"}}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <p className="mt-2 max-w-sm text-gray-700">
            {data.price}
        </p>

        <p className="mt-2 max-w-sm text-gray-700">
            {data.description}
        </p>
    </Link>
}

export default Product;