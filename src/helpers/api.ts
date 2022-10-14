import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.web3forms.com/submit"
})