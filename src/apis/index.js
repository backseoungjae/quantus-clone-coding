import axios from "axios";

export const getStockList = () => axios.get("/api/stocks");
