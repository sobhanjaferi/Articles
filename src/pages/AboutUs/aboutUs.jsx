import { NavBar } from "../../components/header/NavBar";
import styled from "./aboutUs.module.css";
import country from "../../assets/imgs/image.png";
import { FooTer } from "../../components/footer/Footer";

function AboutUs() {
  return (
    <>
      <NavBar />

      <main className="container">
        <div className={styled.container}>
          <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>درباره ما</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit
            deserunt minima dolorem voluptates? Magni rerum, maiores dicta
            itaque quod totam recusandae, quibusdam eius aperiam facere
            inventore veritatis saepe temporibus, modi ipsum quam? Officia,
            animi. Minus, iure harum. Assumenda nihil labore consequatur
            officiis minus voluptatibus facere maxime perferendis quibusdam,
            itaque ipsum tempore veritatis mollitia dignissimos voluptate ab
            exercitationem enim aperiam molestiae. Velit architecto, nobis
            blanditiis sapiente odit unde, enim in alias est libero accusantium
            ad maxime vitae? Laudantium beatae, ratione molestiae illo,
            similique temporibus perferendis minus culpa, iure nemo accusantium.
            Esse accusamus odit minus quas sint ad, ipsum consectetur expedita.
          </p>

          <div className={styled.img}>
            <img src={country} alt="iran" className={styled.country} />
          </div>
        </div>
      </main>

      <footer>
        <FooTer />
      </footer>
    </>
  );
}

export default AboutUs;
