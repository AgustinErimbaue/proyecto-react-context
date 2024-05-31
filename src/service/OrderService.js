import axios from "axios";
const API_URL = "http://localhost:3000/orders";

const createOrder = async (cart) => {
  const arrayIds = cart.map((item) => {
    return item.id;
  });

  console.log(arrayIds);
  const token = localStorage.getItem("token");
  await axios.post(
    API_URL,
    { products: arrayIds },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

const orderService = {
  createOrder,
};

export default orderService;
