import React from "react";

const useStockCall = () => {
  const getFirms = async () => {
    const BASE_URL = "http://12130.fullstack.clarusway.com/";
    dispatch(fetchStart());
    const url = "firms";
    try {
      const { data } = await axios(`${BASE_URL}stock/firms/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };
  const getSales = async () => {
    const BASE_URL = "http://12130.fullstack.clarusway.com/";
    dispatch(fetchStart());
    const url = "sales";
    try {
      const { data } = await axios(`${BASE_URL}stock/sales/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };
  return <div>useStockCall</div>;
};

export default useStockCall;
