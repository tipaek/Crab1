import React, { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from "recharts";
import friends from "../data/friends";

// Define an array of unique colors for each person
const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a6", "#f4a261", "#2a9d8f"];

const chartData = Object.keys(friends[0].percentages).map(trait => {
  let entry = { trait };
  friends.forEach(friend => {
    entry[friend.name] = friend.percentages[trait];
  });
  return entry;
});

const RadarComparisonChart = () => {
  const [highlightedPerson, setHighlightedPerson] = useState(null);

  return (
    <div className="chart-container">
      <h2 className="radar-title">MBTI Trait Comparison</h2>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="trait" />
          <PolarRadiusAxis />
          <Legend
            onMouseEnter={(e) => {
              const index = friends.findIndex(f => f.name === e.value);
              setHighlightedPerson(index);
            }}
            onMouseLeave={() => setHighlightedPerson(null)}
          />
          {friends.map((friend, index) => (
            <Radar
              key={friend.name}
              name={friend.name}
              dataKey={friend.name}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={highlightedPerson === null ? 0.8 : highlightedPerson === index ? 1 : 0.2} // Highlight hovered person
              strokeWidth={highlightedPerson === index ? 3 : 1} // Thicker stroke on hover
              animationDuration={300}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarComparisonChart;
