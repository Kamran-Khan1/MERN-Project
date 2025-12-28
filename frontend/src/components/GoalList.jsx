import GoalItem from "./GoalItem";

const GoalsList = ({ goals, onDelete, onEdit, loading }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-white">
          Your Goals ({goals.length})
        </h2>
      </div>

      <div className="p-6">
        {goals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No goals yet. Start by creating your first goal!
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {goals.map((goal) => (
              <GoalItem
                key={goal._id}
                goal={goal}
                onDelete={onDelete}
                onEdit={onEdit}
                loading={loading}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GoalsList;
