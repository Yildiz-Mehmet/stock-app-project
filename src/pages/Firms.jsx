import { Button, Typography } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

import { useEffect } from "react";

const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const getFirms = async () => {
  //   const BASE_URL = "http://12130.fullstack.clarusway.com/";
  //   dispatch(fetchStart());
  //   const url = "firms";
  //   try {
  //     const { data } = await axios(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     console.log("error");
  //     dispatch(fetchFail());
  //   }
  // };
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  );
};

export default Firms;
