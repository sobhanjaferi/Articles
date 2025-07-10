import styled from "./main.module.css";

function Product(props) {
  return (
    <div className={styled.container}>
      <img className={styled.img} src={props.data.imgUrl} />

      <div className={styled.texts}>
        <h3>{props.data.title}</h3>
        <p>{props.data.readingTime}</p>
      </div>
    </div>
  );
}

export default Product;
