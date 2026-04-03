import { InjectionToken } from "@angular/core";
import { ApiConfig } from "./modulevalue";

export const API_CONFIG=new InjectionToken<ApiConfig>('api');

export const API_CONFIG_VALUE:ApiConfig={
  productApi:'https://fakeapi.com/products',
  cartApi:'https://fakeapi.com/cart'
};