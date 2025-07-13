import { useEffect, useState } from "react";
import { NavBar } from "../../components/header/NavBar";
import Product from "../../components/main/main";
import styled from "./Home.module.css";
import axios from "axios";
import { FooTer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container" id={styled.container}>
        <h2 className={styled.title}>مقالات جدید</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.list}>
            {articles.map((article) => (
              <Link to={`/articlePage/${article.id}`}>
                <Product data={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <FooTer />
    </div>
  );
}

export default Home;
