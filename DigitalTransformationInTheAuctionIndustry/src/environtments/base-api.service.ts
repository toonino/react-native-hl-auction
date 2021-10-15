import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {environment} from './environment';

export class BaseApiService {

  getToken = async () => {
    let a = null;
    a = await AsyncStorage.getItem('jwttoken').then(item => {
      return item;
    });
    return a;
  };
  async setToken() {
    let token = await this.getToken();
    if (token!=null) {
       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       return true;
    }
    else {
      return false;
    }
    
  }
  constructor() {
      axios.defaults.headers.common['Authorization'] = `Bearer `;
  }
  post(url: string, body?: any) {
    return axios.post(`${environment.apiUrl}/${url}`, body);
  }
  get(url: string, params?: any) {
    return axios.get(`${environment.apiUrl}/${url}`, {params: params});
  }
}
