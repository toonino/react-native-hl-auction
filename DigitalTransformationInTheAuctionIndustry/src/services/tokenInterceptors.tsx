import React from "react";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from "../navigation/rootNavigator";
import { LOGOUT } from "../navigation/routeNames";


const defaultOptions = {
  baseURL: process.env.REACT_APP_API_PATH,
  method: "get",
  headers: {
    "Content-Type": "application/json"
  }
};

const TokenInterceptors = () => {
  // tao instance
  // @ts-ignore
  let instance = axios.create(defaultOptions);

  // set auth token cho bat ki request
  instance.interceptors.request.use(function(config) {
      const token = AsyncStorage.getItem("jwttoken");
      if (token) {
        config.headers.Authorization = token ? `Bearer ${token}` : "";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        navigate(LOGOUT, { tokenExpired: true });
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return instance;
};
export default TokenInterceptors;

