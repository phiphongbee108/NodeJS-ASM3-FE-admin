import axiosClient from "./axiosClient";

const HistoryAPI = {
  getHistoryAPI: (query) => {
    const url = `https://nodejs-asm3-admin.glitch.me/api/product/search?product=${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `/histories/${id}`;
    return axiosClient.get(url);
  },
  getDelete: (query, id) => {
    const url = `https://nodejs-asm3-admin.glitch.me/api/product/delete/${query}?p=${id}`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
