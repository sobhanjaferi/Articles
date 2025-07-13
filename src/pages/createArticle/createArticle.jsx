import styled from "./createArticle.module.css";
import { NavBar } from "../../components/header/NavBar";
import { useState } from "react";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    imgUrl: "",
    readingTime: "",
    athor: "",
    content: "",
  });

  const [addId , setAddId] = useState(8);

  const HandleChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const HandleChangeTextarea = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      content: e.target.value
    }))
  }

  const HandlePostArticle = () => {

    {
      setAddId(addId + 1)
    }
    axios.post("http://localhost:4000/articles", {
      id: addId,
      imgUrl: article.imgUrl,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      athor: article.athor,
      content: article.content
    })
  }


  return (
    <div>
      <NavBar />

      <div className="container" id={styled.container}>
        <h3>ساخت مقاله </h3>

        <Input title="عنوان" name="title" HandleChange={HandleChange} />

        <Input title="تاریخ" name="date" HandleChange={HandleChange} />

        <Input title="نویسنده" name="athor" HandleChange={HandleChange} />

        <Input title="زمان خواندن" name="readingTime" HandleChange={HandleChange} />

        <Input title="آدرس عکس" name="imgUrl" HandleChange={HandleChange} />

        < Textarea label="متن" handleChange={HandleChangeTextarea} />

        <div className={styled.button}>
          <button onClick={HandlePostArticle}>ساخت مقاله</button>
        </div>

      </div>
    </div>
  );
}

export default CreateArticle;
