import Cookies from "js-cookie";

const BASE_API_URL = "http://localhost:3000/api";

const fetchAuthenticated = async (url, method, body = null) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching data.");
  }
};

//--------------------- LOGIN------------------

export const login = async (formData) => {
  const url = `${BASE_API_URL}/login`;
  return fetchJSON(url, "POST", formData);
};

//--------------------- REGISTER------------------

export const registerNewUser = async (formData) => {
  const url = `${BASE_API_URL}/register`;
  return fetchAuthenticated(url, "POST", formData);
};

//--------------------- PRODUCT------------------

export const addNewProduct = async (formData) => {
  const url = `${BASE_API_URL}/add-product`;
  return fetchWithHeaders(url, "POST", formData);
};

export const getAllAdminProducts = async () => {
  const url = `${BASE_API_URL}/all-products`;
  return fetchWithHeaders(url, "GET");
};

export const updateAProduct = async (formData) => {
  const url = `${BASE_API_URL}/update-product`;
  return fetchWithHeaders(url, "PUT", formData);
};

export const deleteAProduct = async (id) => {
  const url = `${BASE_API_URL}/delete-product?id=${id}`;
  return fetchWithHeaders(url, "DELETE");
};

export const productByCategory = async (id) => {
  const url = `${BASE_API_URL}/product-by-category?id=${id}`;
  return fetchWithHeaders(url, "GET");
};

export const productById = async (id) => {
  const url = `${BASE_API_URL}/product-by-id?id=${id}`;
  return fetchWithHeaders(url, "GET");
};

//------------------ Address---------------------------------

export const addNewAddress = async (formData) => {
  const url = `${BASE_API_URL}/address/add-new-address`;
  return fetchAuthenticated(url, "POST", formData);
};

export const fetchAllAddresses = async (id) => {
  const url = `${BASE_API_URL}/address/get-all-address?id=${id}`;
  return fetchAuthenticated(url, "GET");
};

export const updateAddress = async (formData) => {
  const url = `${BASE_API_URL}/address/update-address`;
  return fetchAuthenticated(url, "PUT", formData);
};

export const deleteAddress = async (id) => {
  const url = `${BASE_API_URL}/address/delete-address?id=${id}`;
  return fetchAuthenticated(url, "DELETE");
};

//------------------ Cart---------------------------------

export const addToCart = async (formData) => {
  const url = `${BASE_API_URL}/cart/add-to-cart`;
  return fetchAuthenticated(url, "POST", formData);
};

export const getAllCartItems = async (id) => {
  const url = `${BASE_API_URL}/cart/all-cart-items?id=${id}`;
  return fetchAuthenticated(url, "GET");
};

export const deleteFromCart = async (id) => {
  const url = `${BASE_API_URL}/cart/delete-from-cart?id=${id}`;
  return fetchAuthenticated(url, "DELETE");
};

//------------------ Order--------------------------------

export const createNewOrder = async (formData) => {
  const url = `${BASE_API_URL}/order/create-order`;
  return fetchAuthenticated(url, "POST", formData);
};

export const getAllOrdersForUser = async (id) => {
  const url = `${BASE_API_URL}/order/get-all-orders?id=${id}`;
  return fetchAuthenticated(url, "GET");
};

export const getOrderDetails = async (id) => {
  const url = `${BASE_API_URL}/order/order-details?id=${id}`;
  return fetchAuthenticated(url, "GET");
};

export const getAllOrdersForAllUsers = async () => {
  const url = `${BASE_API_URL}/admin/orders/get-all-orders`;
  return fetchAuthenticated(url, "GET");
};

export const updateStatusOfOrder = async (formData) => {
  const url = `${BASE_API_URL}/admin/orders/update-order`;
  return fetchAuthenticated(url, "PUT", formData);
};
