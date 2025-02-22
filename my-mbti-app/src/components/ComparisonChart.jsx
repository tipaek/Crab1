import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import friends from "../data/friends";

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a6", "#f4a261", "#2a9d8f"];

const chartData = friends.map(friend => ({
  name: friend.name,
  Extraverted: friend.percentages.extraverted,
  Introverted: friend.percentages.introverted,
  Thinking: friend.percentages.thinking,
  Feeling: friend.percentages.feeling,
  Judging: friend.percentages.judging,
  Prospecting: friend.percentages.prospecting
}));

const ComparisonChart = () => {
  return (
    <div className="chart-container">
      <h2 className="bar-title">MBTI Trait Comparison</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Extraverted" fill="#8884d8" />
          <Bar dataKey="Introverted" fill="#82ca9d" />
          <Bar dataKey="Thinking" fill="#ffc658" />
          <Bar dataKey="Feeling" fill="#ff7f50" />
          <Bar dataKey="Judging" fill="#a28fd0" />
          <Bar dataKey="Prospecting" fill="#ffbb28" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
