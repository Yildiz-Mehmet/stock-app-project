import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
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
    const BASE_URL = "http://12130.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      getStockData(url);
    } catch (error) {
      console.log("error");
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
