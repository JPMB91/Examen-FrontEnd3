import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  // console.log(id);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    getDetail();
  }, []);

  return (
    <div>
      <h1>{`Detail Dentist: ${id}`}</h1>

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
    </div>
  );
};

export default Detail;
