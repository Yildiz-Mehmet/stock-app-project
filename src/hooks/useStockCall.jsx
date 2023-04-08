import { useDispatch, useSelector } from "react-redux";

import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getStockData = async (url) => {
    // const BASE_URL = "http://12130.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosWithToken(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
