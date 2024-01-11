import axios from "axios";

const ApiInsctance = axios.create({
  baseURL: "https://react-book-shop-2024-default-rtdb.firebaseio.com/",
});

export default ApiInsctance;
