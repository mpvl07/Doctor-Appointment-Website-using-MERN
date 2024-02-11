import React, { useState, useEffect } from "react";

const ApiFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mohan123.pythonanywhere.com");

        if (!response.ok) {
          console.log("error")
          throw new Error("Network response was not ok");
        }
        
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // return (
  //   // <div>
  //   //   {data.map((item) => (
  //   //     <div key={item.reg_no}>
  //   //       <p>Registration Number: {item.reg_no}</p>
  //   //       <p>Name: {item.name}</p>
  //   //     </div>
  //   //   ))}
  //   // </div>
  // );
};

export default ApiFetcher;
