import axios from "axios";

// import sessionStorage from "session";

let api = axios.create({
  baseURL: "https://api.pyrus.com/v4",
  headers: {
    Accept: "application/json",
  },
});

let access_token = process.env.access_token;

module.exports = { api, access_token };
