import { createStore } from "@reduxjs/toolkit";
import { cartReducers } from "../Reducers/CartReducers";

export const store = createStore(cartReducers);