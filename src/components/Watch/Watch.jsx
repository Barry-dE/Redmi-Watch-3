import "./watch.scss";
import image_1 from "/src/assets/asset-1.jpg";
import image_2 from "/src/assets/asset-3.jpg";
import image_3 from "/src/assets/asset-2.jpg";
import image_4 from "/src/assets/asset-10.jpg";

export default function Watch() {
  return (
    <div className="wrap">
      <div className="wrap__grid">
        <div className="wrap__grid-1">
          <div className="wrap__grid-1-1">
            <h1>A perfect match for sports</h1>
          </div>
          <div className="wrap__grid-1-2">
            <img src={image_1} alt="" />
          </div>
          <div className="wrap__grid-1-3">
            <img src={image_2} alt="" />
            <p data-animation="paragraph">
              Light-weighted all around comfortable for all-day <br />
              wearing
            </p>
          </div>
        </div>
        <div className="wrap__grid-2">
          <div className="wrap__grid-2-1">
            <img src={image_4} alt="" />
            <p data-animation="paragraph">
              Ultra large and clear 1.75 inch display easy to view even in
              strong sunlight
            </p>
          </div>
          <div className="wrap__grid-2-2">
            <img src={image_3} alt="" />
          </div>
          <div className="wrap__grid-2-3">
            <h1>Young, stylish, fashionable</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
