import React, {Component, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
const apiUrl = 'https://sheltered-anchorage-60344.herokuapp.com';
const apiEndpointProvince = apiUrl + '/province';
const apiEndpointDistrict = apiUrl + '/district/?idProvince=';
const apiEndpointCommune = apiUrl + '/commune/?idDistrict=';

async function getProvide() {
  try {
    let response = await fetch(apiEndpointProvince);
    let response = await response.json();
    return responseJson.data; //ListProvince
  } catch (error) {
    // console.error('Error is : ${error}');
  }
}
export {getProvide};
