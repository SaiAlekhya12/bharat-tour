const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Bharat Tour Backend Running");
});

// Travel Planner Route
app.post("/api/travel-plan", async (req, res) => {
  try {
    const { destination, budget, days, style } = req.body;

    const totalBudget = Number(budget);

    const accommodation = Math.round(totalBudget * 0.4);
    const food = Math.round(totalBudget * 0.25);
    const transport = Math.round(totalBudget * 0.2);
    const activities = Math.round(totalBudget * 0.15);

    const plan = `
TRAVEL ITINERARY

Destination: ${destination}
Duration: ${days} Days
Budget: ₹${budget}
Travel Style: ${style}

==================================================

DAY 1
• Arrival and hotel check-in
• Explore nearby attractions
• Experience local cuisine

DAY 2
• Visit major tourist destinations
• Cultural and heritage exploration
• Shopping and local sightseeing

DAY 3
• Adventure and outdoor activities
• Visit popular landmarks
• Evening leisure activities

DAY 4
• Explore nearby locations
• Photography and sightseeing
• Relaxation and recreation

DAY 5
• Final sightseeing
• Souvenir shopping
• Departure preparation

==================================================

ESTIMATED BUDGET BREAKDOWN

Accommodation : ₹${accommodation}

Food & Dining : ₹${food}

Transportation : ₹${transport}

Activities & Tickets : ₹${activities}

==================================================

TRAVEL RECOMMENDATIONS

• Carry valid identification documents.
• Keep emergency contact information accessible.
• Book accommodations in advance during peak seasons.
• Use reliable local transportation services.
• Follow local regulations and cultural guidelines.
• Keep digital copies of important documents.

==================================================

Thank you for using Trip Planner.
`;

    res.json({
      success: true,
      plan,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate travel plan",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});