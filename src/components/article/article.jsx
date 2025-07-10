import styled from "./article.module.css";
import { NavBar } from "../header/NavBar";
import img from "../../assets/imgs/download (10).jpeg";
import { FooTer } from "../footer/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";

function ReadArticle(props) {
  const [data, setData] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setData(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className={styled.container}>
        <NavBar />

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container" id={styled.container}>
            <h2 className={styled.title}>{data.title}</h2>

            <div className={styled.discription}>
              <span>نویسنده : {data.athor}</span>
              <span>تاریخ : {data.date}</span>
            </div>

            <img className={styled.img} src={data.imgUrl} />

            <p className={styled.paragraph}>{data.content}</p>
          </div>
        )}
      </div>

      <FooTer />
    </div>
  );
}

export default ReadArticle;
