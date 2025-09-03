// app/brands/page.js
import { brands } from "../../lib/data";

export default function BrandsIndex() {
  return (
    <div>
      <h1>Popular Brands</h1>
      <p>Browse official brand pages curated by NicheMarket.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 16 }}>
        {brands.map(b => (
          <a key={b.slug} href={`/brands/${b.slug}`} style={{ background:"#fff", border:"1px solid #eee", borderRadius:10, overflow:"hidden", textDecoration:"none", color:"inherit" }}>
            <img src={b.hero} alt={b.name} style={{ width:"100%", height:160, objectFit:"cover" }} />
            <div style={{ padding: 12 }}>
              <h3 style={{ margin: "6px 0" }}>{b.name}</h3>
              <p style={{ margin: 0, color:"#666", fontSize: 14 }}>{b.about.slice(0,80)}…</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
