import axios from "axios";
import { ApiMethods } from "@/config/constants";
import { BaseURL } from "@/config/api-routes";

type FetchParams = {
  url: string;
  method: ApiMethods;
  data?: { [key: string]: string };
  headers?: { [key: string]: string };
  queryParams?: { [key: string]: string };
};
const fetchAPI = (fetchParams: FetchParams) => {
  const { method, url, queryParams, headers, data } = fetchParams;
  return axios({
    method: method,
    url: `${BaseURL}${url}`,
    ...(headers && headers),
    ...(data && { data: JSON.stringify(data) }),
    ...(queryParams && { params: queryParams }),
  });
};

export default fetchAPI;
