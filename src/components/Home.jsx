import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const products = [
  { id: 1, name: 'Toshiba', price: 250, img: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png' },
  { id: 2, name: 'Samsung', price: 300, img: 'https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-39.png' },
  { id: 3, name: 'Acer', price: 150, img: 'https://www.freepngimg.com/thumb/technology/33524-4-toshiba-laptop.png' }
];

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container d-flex justify-content-center mt-50">
      {products.map((product) => (
        <div className="row" key={product.id}>
          <div className="col-11 mt-2">
            <div className="card">
              <div className="card-body">
                <div className="card-img-actions">
                  <img src={product.img} className="card-img img-fluid" width="96" height="100" alt={product.name} />
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <p className="text-default mb-2" data-abc="true">{product.name}</p>
                  </h6>
                </div>
                <h3 className="mb-0 font-weight-semibold">${product.price}</h3>
                <button type="button" className="btn bg-success text-white" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
