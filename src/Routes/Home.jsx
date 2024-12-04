import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={state.theme === "light"? "light": "dark"}>
      <h1>Home</h1>
      {state.dentists.length === 0 ? (
        <h1>LOADING...</h1> 
      ) : (
        <div className="card-grid">
          {state.dentists.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
