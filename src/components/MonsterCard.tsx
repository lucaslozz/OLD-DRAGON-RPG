import type { Monster } from "../types/monster";

interface BulletListProps {
  items: string[];
}

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

interface MonsterCardProps {
  monster: Monster;
}

export function MonsterCard({ monster }: MonsterCardProps) {
  return (
    <article className="monster-card">
      <h2 className="monster-title">
        {monster.numero}. {monster.nome_curto}
      </h2>

      <div className="monster-columns">
        <div className="monster-column monster-column-left">
          <img
            src={`${import.meta.env.BASE_URL}${monster.imagem}`}
            alt={monster.nome}
            className="monster-image"
          />
          <p className="monster-flavor">{monster.flavor}</p>
          <p className="monster-pv">
            <strong>PV:</strong> {monster.pv}
          </p>

          <section>
            <h3>Fraquezas e imunidades</h3>
            <BulletList items={monster.fraquezas} />
          </section>

          <section>
            <h3>Habilidades especiais</h3>
            <BulletList items={monster.habilidades} />
          </section>
        </div>

        <div className="monster-column monster-column-right">
          <section>
            <h3>Onde encontrar</h3>
            <BulletList items={monster.onde_encontrar} />
          </section>

          <section>
            <h3>Comportamento em combate</h3>
            <p>{monster.combate}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
