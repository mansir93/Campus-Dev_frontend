import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./Cookie";
import Swal from "sweetalert2";

export function useAxios() {
  const navigate = useNavigate();
  const token = getCookie("_auth");

  const config = {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };

  const [method, setMethod] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const ApiRequest = async (path, method, body) => {
    setIsLoading(true);
    setMethod(method);
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
      if (!token) {
        navigate("/home");
      }
    } finally {
      setIsLoading(false);
    }
  };
  // const checkmethod = () =>{

  // }
  useEffect(() => {
    if (method === "POST") {
      if (data) {
        Swal.fire("Done", `Successful`, "success");
        console.log(data);
      }
      if (error) {
        Swal.fire("Failed ", `${error.message}`, "error");
      }
    }
  }, [data, error, method]);

  return { data, error, isLoading, ApiRequest };
}
