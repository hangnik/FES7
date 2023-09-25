import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ imageList }) {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {imageList.map((imgData) => {
          return (
            <li key={imgData.id}>
              <ImageItem imgData={imgData} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
