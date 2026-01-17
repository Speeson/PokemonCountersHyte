import { useMemo, useState } from "react";
import "./App.css";
import { ALL_TYPES, computeDefensiveMultipliers, groupMultipliers } from "./lib/typeEffectiveness";
import TypeGrid from "./components/TypeGrid";
import ResultsPanel from "./components/ResultsPanel";
import pokHyteLogo from "./assets/logo/pokHyte.png";

export default function App() {
  const [selected, setSelected] = useState([]); // max 2

  function toggleType(t) {
    setSelected((prev) => {
      if (prev.includes(t)) return prev.filter((x) => x !== t);
      if (prev.length >= 2) return [prev[1], t];
      return [...prev, t];
    });
  }

  const multMap = useMemo(() => computeDefensiveMultipliers(selected), [selected]);
  const groups = useMemo(() => groupMultipliers(multMap), [multMap]);

  return (
    <div className="page">
      <header className="header">
        <img className="titleImage" src={pokHyteLogo} alt="PokHyte" />
      </header>
      <main className="layout">
        <section className="panel panel--types">
          <TypeGrid types={ALL_TYPES} selected={selected} onToggle={toggleType} />
        </section>

        <section className="panel panel--results">
          <ResultsPanel selected={selected} groups={groups} />
        </section>
      </main>
    </div>
  );
}
