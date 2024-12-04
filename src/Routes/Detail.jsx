import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../context/global.context";

const Detail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setData(data);
    };
    getDetail();
  }, [id]);

  return (
    <div className={state.theme === "light" ? "light" : "dark"}>
      <h1>{`Detail Dentist: ${id}`}</h1>

      {data.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Detail;
