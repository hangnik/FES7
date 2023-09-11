import React from "react";

function MenuListItem(props) {
  const onItemClick = () => {
    props.setCurrentMood(props.mood);
  };

  return (
    <li>
      <button onClick={onItemClick} className="btn-mode">
        기분이 {props.mood}
      </button>
    </li>
  );
}

export default MenuListItem;
