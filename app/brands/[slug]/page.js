// app/brands/[slug]/page.js
import { notFound } from "next/navigation";
import Card from "../../../components/Card";
import { brands } from "../../../lib/data";

export function generateStaticParams() {
  return brands.map(b => ({ slug: b.slug }));
}

export default function BrandPage({ params }) {
  const brand = brands.find(b => b.slug === params.slug);
  if (!brand) return notFound();

  return (
    <div>
      {/* Hero */}
      <section style={{ display:"grid", gridTemplateColumns: "1fr 2fr", gap: 20, alignItems: "center", background:"#fff", border:"1px solid #eee", borderRadius: 10, padding: 20 }}>
        <img src={brand.hero} alt={`${brand.name} hero`} style={{ width:"100%", borderRadius:10 }} />
        <div>
          <h1>{brand.name}</h1>
          <p>{brand.about}</p>
          <div style={{ display:"flex", gap: 10, flexWrap:"wrap", marginTop: 10 }}>
            <span style={chip()}>New Boards</span>
            <span style={chip()}>Used Boards</span>
            <span style={chip()}>Under $600</span>
            <span style={chip()}>Thruster Setup</span>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section style={{ marginTop: 24 }}>
        <h2>Available {brand.name.split(" ")[0]} Boards</h2>
        <div style={{ display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {brand.listings.map((L, i) => (
            <Card key={i} image={L.image} title={L.title} meta={L.meta} price={L.price} />
          ))}
        </div>
      </section>

      {/* Popular Models */}
      <section style={{ marginTop: 24, background:"#fff", border:"1px solid #eee", borderRadius:10, padding: 16 }}>
        <h2>Popular Models</h2>
        <div style={{ display:"flex", gap: 10, flexWrap:"wrap" }}>
          {brand.models.map(m => <span key={m} style={pill()}>{m}</span>)}
        </div>
      </section>
    </div>
  );
}

function chip(){ return { background:"#f1f5f9", border:"1px solid #e2e8f0", padding:"8px 14px", borderRadius:999, fontSize:14 }; }
function pill(){ return { background:"#f3f4f6", border:"1px solid #e5e7eb", padding:"10px 16px", borderRadius:999, fontSize:14 }; }