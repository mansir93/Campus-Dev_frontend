import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../utils/Config";
import Swal from "sweetalert2";

export function useAxios() {
  const token = getCookie("_auth");

  const config = {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const ApiRequest = async (path, method, body) => {
    // console.log("after", ...body.entries());
    setIsLoading(true);
    const url = `${process.env.REACT_APP_BASEURL}${path}`;

    try {
      const response = await axios({
        method,
        url,
        data: body,
        ...config,
      });

      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        setError(null);
      } else {
        setError(new Error(`Request failed with status ${response.status}`));
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      Swal.fire("Done", `Successful`, "success");
      console.log(data);
    }
    if (error) {
      Swal.fire("Failed ", `${error.message}`, "error");
    }
  }, [data, error]);

  return { data, error, isLoading, ApiRequest };
}
