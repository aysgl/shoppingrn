import {axiosClient} from './instance';

export async function getRequest(URL, params) {
  const response = await axiosClient.get(URL, {params: params});
  return response.data;
}

export async function postRequest(URL, payload) {
  const response = await axiosClient.post(URL, payload);
  return response.data;
}

export async function putRequest(URL, payload) {
  const response = await axiosClient.put(URL, payload);
  return response.data;
}

export async function patchRequest(URL, payload) {
  const response = await axiosClient.patch(URL, payload);
  return response.data;
}

export async function deleteRequest(URL, {params}) {
  const response = await axiosClient.delete(URL, {params});
  return response.data;
}
