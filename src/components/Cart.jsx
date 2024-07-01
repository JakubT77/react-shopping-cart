import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

function Cart() {
  const { cart, incrementItem, decrementItem, removeItem } = useContext(CartContext);

  return (
    <div className="container mt-5">
      {cart.length === 0 ? (
        <h2>Twój koszyk jest pusty</h2>
      ) : (
        cart.map((item) => (
          <div className="row mb-4" key={item.id}>
            <div className="col-12">
              <div className="card d-flex flex-row align-items-center p-3">
                <img src={item.img} className="img-fluid mr-3" width="96" height="100" alt={item.name} />
                <div className="flex-grow-1">
                  <h6 className="font-weight-semibold mb-2">
                    <p className="text-default mb-2" data-abc="true">{item.name}</p>
                  </h6>
                  <h3 className="mb-0 font-weight-semibold">${item.price}</h3>
                </div>
                <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-danger text-white mr-2" onClick={() => decrementItem(item.id)}>-</button>
                  <p className="mb-0">{item.quantity}</p>
                  <button type="button" className="btn btn-success text-white ml-2" onClick={() => incrementItem(item.id)}>+</button>
                  <button type="button" className="btn btn-danger text-white ml-2" onClick={() => removeItem(item.id)}>Usuń</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
