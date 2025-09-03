// app/dashboard/new-listing/page.js
"use client";

import { canPublishNewListing } from "../../../lib/plan";

export default function NewListingPage() {
  // Pretend this is the logged-in shaper:
  const user = { plan: "basic", activeListings: 2 }; // try "starter", "pro", or change numbers

  function handlePublish() {
    if (!canPublishNewListing(user)) {
      alert(
        "You’ve reached your listing limit.\n\nUpgrade to:\n• Starter ($10/mo) — up to 5 listings & landing page\n• Pro ($20/mo) — unlimited listings & priority placement"
      );
      window.location.href = "/shaper-plans";
      return;
    }
    alert("Listing published! 🎉");
  }

  return (
    <div>
      <h1>Create a New Listing</h1>
      <p><strong>Your plan:</strong> {user.plan} • <strong>Active listings:</strong> {user.activeListings}</p>
      {/* This button represents the final “Publish” step. */}
      <button onClick={handlePublish} style={{ padding:"10px 14px", borderRadius:8, border:"1px solid #333", background:"#111", color:"#fff" }}>
        Publish
      </button>
      <p style={{ marginTop:10, color:"#666" }}>Tip: On Basic you can publish up to 2 boards. Try changing the numbers in the code to test.</p>
    </div>
  );
}
