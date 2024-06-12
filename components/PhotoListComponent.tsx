import React from "react";

const PhotoListComponent = ({ text, photoList }:any) => {
  return (
    <div className="mx-auto p-4 max-w-[865px]">
      <h1 className="text-[hsl(206,10%,5%)]">PhotoListComponent from CSS Modules.</h1>
      <p>text: {text}</p>
      <ul className="list-none p-0 m-0">
        {photoList.map((photo:any) => (
          <li className="flex items-center gap-2 mb-2" key={photo.id}>
            <img
              className="w-[100px] h-auto"
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoListComponent;
