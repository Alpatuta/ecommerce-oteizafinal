import { Navbar } from "./components/navbar/navBar";
import { ItemListConatiner } from "./page/itemListContainer/ItemListConatiner";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListConatiner greeting={"Buenos dias."} />
    </div>
  );
}

export default App;
