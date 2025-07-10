import styled from "./spinner.css";

function Spinner() {
  return (
    <div className="cti">
      <p>چند لحظه صبر کنید ...</p>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
