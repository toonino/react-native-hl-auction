import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { BaseApiService } from "../environtments/base-api.service";
import TokenInterceptors from "./tokenInterceptors";
import {listAPi} from '../shared/listAPi';
import axios from 'axios';
export class LoginService  {
  constructor(username: any) {
  }
  valid = false;
  login(body?: any) {
    const method = new BaseApiService;
    return method.post(listAPi.authenticate, body).then(async (res) => {
      try {
        await AsyncStorage.setItem("jwttoken", res.data.data.JwtInfo.jwttoken);
        this.valid=true;
        TokenInterceptors();
      } catch (error) {
        this.valid=false;
      }
    })
  }
  test(){
    const method = new BaseApiService;
    return method.get(`test`);
}
}