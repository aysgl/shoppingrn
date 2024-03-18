import axios from 'axios';

const BASE_URL =
  'https://gist.githubusercontent.com/aysgl/33f8808570323b545ebb14df0b759881/raw/02c959d5e83722d9e5cbd890c0a98a79f7887805/gistfile1.txt';

export async function fetchProducts() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCategory(category) {
  try {
    const response = await axios.get(
      category ? `${BASE_URL}?category=${category}` : BASE_URL,
    );
    return response.data[category];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCart() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
}
