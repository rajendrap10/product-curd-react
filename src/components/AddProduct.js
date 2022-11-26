import { React, useState } from "react";
import axios from 'axios';

const AddProduct = () => {

    const [productName, setProductName] = useState('ABC');
    const [productPrice, setProductPrice] = useState('300');
    const [productQuantity, setProductQuantity] = useState('40');
    const [productDescription, setProductDescription] = useState('Lorem Isupmoas dasdfasdfo3 23 askd fasdf asdfa s23423 4');

    const submitProduct = async (e) => {
          e.preventDefault();

          let newProduct = {
        	  "name": productName,
            "price": productPrice,
            "quantity": productQuantity,
            "description": productDescription
          }
          
          await axios.post('/addProduct/', newProduct)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Add New Product</h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" className="sr-only">Name</label>
          <input id="email-address" name="text" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label for="password" className="sr-only">Price</label>
          <input id="password" name="price" type="text" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label for="password" className="sr-only">Quantity</label>
          <input id="email-address" name="quantity" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label for="password" className="sr-only">Description</label>
          <input id="email-address" name="description" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={submitProduct}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

    )
}

export default AddProduct;