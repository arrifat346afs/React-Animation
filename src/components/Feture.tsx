



export function Feture() {

    const fetureName = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div>
      <h2>Feture Component</h2>
      <ul>
        {fetureName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}


