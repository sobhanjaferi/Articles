import AboutUs from "./pages/AboutUs/aboutUs";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/article/article";
import CreateArticle from "./pages/createArticle/createArticle";
import NotFound from "./pages/notFound/notFound";

export default function App() {
  return (
    <>
      <Routes>
        < Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articlePage/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </>
  );
}
