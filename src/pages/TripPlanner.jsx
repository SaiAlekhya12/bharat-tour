import React, { useState } from "react";
import "./TripPlanner.css";

function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [style, setStyle] = useState("");

  const [tripPlan, setTripPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTrip = async () => {
    if (!destination || !budget || !days || !style) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/travel-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            budget,
            days,
            style,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setTripPlan(data.plan);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setDestination("");
    setBudget("");
    setDays("");
    setStyle("");
    setTripPlan("");
  };

  return (
    <div className="planner-container">
      <div className="planner-card">
        <h1 className="planner-title">
           Trip Planner
        </h1>

        <p className="planner-subtitle">
          Generate personalized travel itineraries based on
          destination, budget, duration, and travel style.
        </p>

        <input
          className="planner-input"
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
        />

        <input
          className="planner-input"
          type="number"
          placeholder="Enter Budget (₹)"
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
        />

        <input
          className="planner-input"
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) =>
            setDays(e.target.value)
          }
        />

        <select
          className="planner-input"
          value={style}
          onChange={(e) =>
            setStyle(e.target.value)
          }
        >
          <option value="">
            Select Travel Style
          </option>
          <option>Adventure</option>
          <option>Luxury</option>
          <option>Family</option>
          <option>Solo</option>
        </select>

        <button
          className="planner-btn"
          onClick={generateTrip}
          disabled={loading}
        >
          {loading
            ? "Generating..."
            : "Generate Travel Plan"}
        </button>

        <button
          className="planner-clear-btn"
          onClick={clearForm}
        >
          Clear
        </button>
      </div>

      {tripPlan && (
        <div className="result-card">
          <h2>Personalized Travel Plan</h2>

          <pre>{tripPlan}</pre>
        </div>
      )}
    </div>
  );
}

export default TripPlanner;