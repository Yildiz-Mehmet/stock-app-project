import React from "react";
import { useDispatch } from "react-redux";

const useStockCall = () => {
  const getStockData = async (url) => {
    const BASE_URL = "http://12130.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      const { data } = await axios(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };

  return { getStockData };
};

export default useStockCall;
