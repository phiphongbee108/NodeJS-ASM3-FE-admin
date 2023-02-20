import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (query) => {
    const url = `https://nodejs-asm3-admin.glitch.me/api/auth/singup/`;
    return axiosClient.post(url, query);
  },
  postSignIng: (query) => {
    const url = "https://nodejs-asm3-admin.glitch.me/api/auth/logingadmin/";
    return axiosClient.post(url, query);
  },
};

export default UserAPI;
