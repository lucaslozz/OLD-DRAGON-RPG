import { MonsterCard } from "../components/MonsterCard";
import monstros from "../data/monstros.json";
import type { Monster } from "../types/monster";

const monsters = monstros as Monster[];

export function CompendioPage() {
  return (
    <>
      <header className="page-header">
        <p className="site-eyebrow">Old Dragon 2 — Campanha pessoal</p>
        <h1>Compêndio de Monstros</h1>
        <p className="site-description">
          Registro dos adversários já enfrentados, com fraquezas, locais e
          anotações de mesa.
        </p>
        <p className="site-count">{monsters.length} entradas registradas</p>
      </header>

      <main className="monster-list">
        {monsters.map((monster) => (
          <MonsterCard key={monster.numero} monster={monster} />
        ))}
      </main>
    </>
  );
}
