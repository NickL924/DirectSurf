// app/shaper-plans/page.js
import PlanCard from "../../components/PlanCard";

export default function PlansPage() {
  return (
    <div>
      <h1 style={{ textAlign:"center" }}>Independent Shaper Plans</h1>
      <p style={{ textAlign:"center", maxWidth:650, margin:"0 auto" }}>
        Start free with a basic listing, then upgrade for a full landing page and unlimited boards.
      </p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 24 }}>
        <PlanCard
          name="Basic"
          priceText="Free"
          features={["1–2 board listings", "Listed in marketplace", "No dedicated landing page"]}
          href="/signup?plan=basic"
        />
        <PlanCard
          name="Starter"
          priceText="$10 / month"
          features={["Up to 5 board listings", "Dedicated shaper landing page", "Bio + location showcase", "Buyer messages"]}
          href="/signup?plan=starter"
        />
        <PlanCard
          name="Pro"
          priceText="$20 / month"
          features={["Unlimited board listings", "Priority directory placement", "Verified Shaper badge", "Page analytics & insights"]}
          href="/signup?plan=pro"
          highlight
        />
      </div>
    </div>
  );
}
