import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../context/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  console.log(state);
  return (
    <div className={state.theme === "light" ? "light" : "dark"}>
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
              isFavorite={state.dentist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
