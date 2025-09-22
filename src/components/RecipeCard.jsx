import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({
  recipe,
  selectionMode,
  selected,
  onSelect,
  onLongPress,
}) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [longPressTriggered, setLongPressTriggered] = useState(false);

  const handleClick = () => {
    if (selectionMode) {
      onSelect();
    } else if (!longPressTriggered) {
      navigate(`/recipes`, { state: { recipe } });
    }
    setLongPressTriggered(false);
  };

  const startPress = () => {
    timerRef.current = setTimeout(() => {
      onLongPress();
      onSelect();
      setLongPressTriggered(true); // prevent click after long press
    }, 700);
  };

  const endPress = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <div
      onClick={handleClick}
      onMouseDown={startPress}
      onMouseUp={endPress}
      onMouseLeave={endPress}
      onTouchStart={startPress}
      onTouchEnd={endPress}
      style={{
        cursor: "pointer",
        border: selected ? "2px solid red" : "1px solid #ccc",
        marginBottom: "1rem",
        padding: "0.5rem",
        position: "relative",
      }}
    >
      {selectionMode && (
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          style={{ position: "absolute", top: 5, left: 5 }}
        />
      )}

      {recipe.title && <h2>{recipe.title}</h2>}
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients
              .split(",")
              .map((ing) => ing.trim())
              .filter(Boolean)
              .slice(0, 3)
              .map((ing, idx) => (
                <li key={idx}>{ing.trim()}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
