import { useState } from 'react'
import consoles from '../data/consoles'

function ConsoleSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="consoles">
      <h2 className="section-title">Consolas</h2>

      <div className="console-list">
        {consoles.map((console) => (
          <div
            key={console.id}
            className={`console-card ${
              selected === console.id ? 'active' : ''
            }`}
            onClick={() => setSelected(console.id)}
          >
            <h3>{console.name}</h3>
          </div>
        ))}
      </div>

      {selected && (
        <p className="console-selected">
          Consola seleccionada: <strong>{selected}</strong>
        </p>
      )}
    </section>
  )
}

export default ConsoleSection

