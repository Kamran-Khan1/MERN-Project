import { useState } from "react";

const GoalItem = ({ goal, onDelete, onEdit, loading }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(goal.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(goal.text);
  };

  const handleSave = () => {
    if (editText.trim() && editText !== goal.text) {
      onEdit(goal._id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(goal.text);
    setIsEditing(false);
  };

  return (
    <li className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSave()}
              className="w-full py-2 px-3 bg-gray-600 border border-gray-500 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
              autoFocus
            />
          ) : (
            <>
              <p className="text-white text-lg font-medium mb-1">{goal.text}</p>
              <p className="text-gray-400 text-sm">
                Created: {new Date(goal.createdAt).toLocaleDateString()}
              </p>
            </>
          )}
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(goal._id)}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default GoalItem;
