import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../utils/api.js";
import DashboardHeader from "../components/DashboardHeader.jsx";
import AddGoalForm from "../components/AddGoalForm.jsx";
import GoalsList from "../components/GoalList.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGoals = async () => {
    setLoading(true);
    try {
      const response = await api.get("/goals");
      setGoals(response.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
      toast.error("Failed to load goals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleAddGoal = async (goalText) => {
    setLoading(true);
    try {
      await api.post("/goals", { text: goalText });
      toast.success("New goal added 😀");
      fetchGoals();
    } catch (error) {
      console.error("Error adding goal:", error);
      toast.error("Failed to add goal");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGoal = async (id) => {
    if (!window.confirm("Are you sure you want to delete this goal?")) {
      return;
    }

    setLoading(true);
    try {
      await api.delete(`/goals/${id}`);
      toast.success("Goal deleted successfully");
      fetchGoals();
    } catch (error) {
      console.error("Error deleting goal:", error);
      toast.error("Failed to delete goal");
    } finally {
      setLoading(false);
    }
  };

  const handleEditGoal = async (id, newText) => {
    setLoading(true);
    try {
      await api.put(`/goals/${id}`, { text: newText });
      toast.success("Goal updated successfully");
      fetchGoals();
    } catch (error) {
      console.error("Error updating goal:", error);
      toast.error("Failed to update goal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <DashboardHeader />

        <AddGoalForm onAddGoal={handleAddGoal} loading={loading} />

        {loading && <LoadingSpinner />}

        {!loading && (
          <GoalsList
            goals={goals}
            onDelete={handleDeleteGoal}
            onEdit={handleEditGoal}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
