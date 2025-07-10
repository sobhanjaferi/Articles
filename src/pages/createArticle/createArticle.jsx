import styled from "./createArticle.module.css";
import { NavBar } from "../../components/header/NavBar";
import { useState } from "react";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
  });

  const HandleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setArticle({
          title: e.target.value,
        });
        break;
      case "date":
        setArticle({
          date: e.target.value,
        });
        break;
    }
  };

  return (
    <div>
      <NavBar />

      <div className="container" id={styled.container}>
        <h3>ساخت مقاله </h3>

        <div className={styled.form}>
          <label>عنوان</label>
          <input name="title" type="text" onChange={HandleChange} />
        </div>

        <div className={styled.form}>
          <label>تاریخ</label>
          <input name="date" type="text" onChange={HandleChange} />
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
