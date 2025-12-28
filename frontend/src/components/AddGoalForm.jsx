import { useState } from "react";

const AddGoalForm = ({ onAddGoal, loading }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goal.trim()) {
      return;
    }

    onAddGoal(goal);
    setGoal("");
  };

  return (
    <div className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
      <label
        htmlFor="goalText"
        className="block text-lg font-medium text-gray-300 mb-3"
      >
        Add New Goal
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          id="goalText"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          disabled={loading}
          className="flex-1 py-3 px-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="e.g., Learn React in 30 days"
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !goal.trim()}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddGoalForm;
