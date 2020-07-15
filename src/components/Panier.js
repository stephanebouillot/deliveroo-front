import React from "react";

const Panier = (props) => {
  let livraison = 2.5;

  // Boucle sur props.panier
  const somme = () => {
    let total = 0;
    for (let i = 0; i < props.panier.length; i++) {
      total = total + Number(props.panier[i].price) * props.panier[i].quantity;
    }
    return total;
  };

  let soustotal = somme();
  let total = soustotal + livraison;

  return (
    <div className="panier">
      <button className="boutonValidation"> Valider mon panier</button>
      {props.panier.map((product) => (
        <div className="panier-product" key={product.id}>
          <button
            className="buttonpanier"
            onClick={() => {
              props.removeProduct(product);
            }}
          >
            <i class="fa fa-minus-circle"></i>
          </button>
          <div className="panier-product-quantity">{product.quantity}</div>
          <button
            className="buttonpanier"
            onClick={() => {
              props.addProduct(product);
            }}
          >
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
          <div className="panier-product-name">{product.name}</div>
          <div className="panier-product-price">{product.price} €</div>
        </div>
      ))}
      {/* <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      /> */}
      <div className="frais">
        <div className="panier-product-frais">Sous-Total</div>
        <div className="panier-product-frais">{soustotal.toFixed(2)} </div>
      </div>
      <div className="livraison">
        <div className="panier-product-livraison">Frais de Livraison</div>
        <div className="panier-product-livraison">{livraison} € </div>
      </div>
      <div className="somme">
        <div className="total">Total:</div>
        <div className="total"> {total.toFixed(2)} €</div>
      </div>
    </div>
  );
};

export default Panier;
