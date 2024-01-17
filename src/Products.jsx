
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "./App";

const useImageURL = (ID) => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + ID, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then(json => setImageURL(json.image))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = ({imgID}) => {
  const { imageURL, error, loading } = useImageURL(imgID);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};


const Products = () => {

    function handleClick(event) {

        products.forEach(element => {
            //console.log(element.getID())
            //console.log(event.target.className)
            if (element.getID() == event.target.className) {
                addToCart(element)
            }
        });

    }


    const { products, addToCart, } = useContext(ShopContext);

    return (
        <>
            <div>Products Page</div>
            <div className="products-container">
                {products.map((info, index) => {
                    let imageID = info.getID()
                    return(
                    <div className="product">
                        <Image key={index} imgID={imageID}/>
                        <button className={index + 1} type="button" onClick={(event) => handleClick(event)}>Add to Cart</button>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products