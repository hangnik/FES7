import "./MenuList.css";
import MenuListItem from "../MenuListItem/MenuListItem";

function MenuList(props) {
  const menus = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고에요! 😄",
    "미쳤어요!! 🤪",
  ];

  return (
    <ul>
      {menus.map((moodEl, index) => {
        return (
          <MenuListItem
            mood={moodEl}
            key={index}
            setCurrentMood={props.setCurrentMood}
          />
        );
      })}
    </ul>
  );
}

export default MenuList;
