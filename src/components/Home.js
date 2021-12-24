// import { CartState } from "../context/Context";
// import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import API from '../context/API/data.json'

const Home = () => {
  // const {
  //   // state: { products },
  //   productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  // } = CartState();

  let sortedProducts = API;
  // const transformProducts = () => {

  //   if (sort) {
  //     sortedProducts = sortedProducts.sort((a, b) =>
  //       sort === "lowToHigh" ? a.price - b.price : b.price - a.price
  //     );
  //   }

  //   if (!byStock) {
  //     sortedProducts = sortedProducts.filter((prod) => prod.inStock);
  //   }

  //   if (byFastDelivery) {
  //     sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
  //   }

  //   if (byRating) {
  //     sortedProducts = sortedProducts.filter(
  //       (prod) => prod.ratings >= byRating
  //     );
  //   }

  //   if (searchQuery) {
  //     sortedProducts = sortedProducts.filter((prod) =>
  //       prod.name.toLowerCase().includes(searchQuery)
  //     );
  //   }

  //   return sortedProducts;
  // };

  return (
    <div className="home">
      {/* <Filters /> */} 
      <div className="productContainer">
        {sortedProducts.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;