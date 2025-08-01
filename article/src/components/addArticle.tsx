"use client";

import { useState } from "react";
import Container from "./container";

function AddArticle() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const HandleClick = () => {
    fetch("http://localhost:8000/Articles", {
      method: "POST",
      body: JSON.stringify({
        id: `${Math.floor(Math.random() * 1000)}`,
        title: title,
        readingTime: `${Math.floor(Math.random() * 60)}:${Math.floor(
          Math.random() * 60
        )}`,
        content: content,
        imgUrl: img,
      }),
    });
    setTitle("");
    setImg("");
    setContent("");
  };

  return (
    <Container>
      <div className="w-full px-5 flex flex-col h-screen bg-cyan-950">
        <div className="flex justify-between items-center mt-10">
          <label className="text-2xl">title :</label>
          <input
            type="text"
            placeholder="Enter your article title"
            className="w-11/12 p-2 rounded-full border-1 border-white bg-cyan-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mt-10">
          <label className="text-2xl">img :</label>
          <input
            type="text"
            placeholder="Enter your img url"
            className="w-11/12 p-2 rounded-full border-1 border-white bg-cyan-800"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mt-10">
          <label className="text-2xl">content :</label>
          <input
            type="text"
            placeholder="Enter your article content"
            className="w-11/12 p-2 rounded-full border-1 border-white bg-cyan-800"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          onClick={HandleClick}
          className="mt-10 w-50 p-2 rounded-full border-4 cursor-pointer active:bg-green-900 transition border-green-200 bg-green-600 font-bold text-2xl"
        >
          submit
        </button>
      </div>
    </Container>
  );
}

export default AddArticle;
