import { ContextProvider } from "./context/global.context";
import { Layout } from "./Layouts/Layout";

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
