export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>🏆 Liga PS Srimulyo Permai</h1>

      <h2>Klasemen</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Pemain</th>
            <th>Tim</th>
            <th>Poin</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ari</td>
            <td>Arsenal</td>
            <td>3</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Budi</td>
            <td>Real Madrid</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}