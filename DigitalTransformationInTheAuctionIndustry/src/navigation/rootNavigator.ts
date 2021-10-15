import React from "react";

// @ts-ignore
export const navigationRef = React.createRef(null);

export const navigate = (name: any, params: any) => {
  if (navigationRef.current) {
    // @ts-ignore
    navigationRef.current.navigate(name, params);
  }
};
export const goBack = () => {
  if (navigationRef.current) {
    // @ts-ignore
    navigationRef.current.goBack();
  } 
};


