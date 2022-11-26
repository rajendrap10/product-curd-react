import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ListProduct = () => {

    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        await axios.get("/getProducts")
          .then(function (response) {

            if (response.data.data.length > 0) {
                setProductList(response.data.data);
            }
        });
    }

    useEffect(() => {
        getProducts();
    }, []);


    return(
        <div className="productlist" style={{ margin:"0 auto", width:"900px", textAlign:"center", paddingTop:"100px" }}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Add New Product</h2>
        </div>
        <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">

    {productList &&
                productList.map((product, index) => (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
            </tr>
        ))
    }
    </tbody>
    </table>
        </div>
    )
}

export default ListProduct;