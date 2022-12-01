import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          // console.log(res);
          return res.json();
        })
        .then((result) => {
          setData(result);
          setisPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setisPending(false);
          setError(err.message);
        });
    }, 1000);
    return console.log("cleanup");
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
