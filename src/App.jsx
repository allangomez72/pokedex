import Pokemons from "./components/Pokemons.jsx";
import Aside from "./components/Aside.jsx";

function App() {

  return (
    <section>
        <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen font-outfit">
            <Pokemons />
            <Aside />
        </main>
    </section>
  )
}

export default App;
