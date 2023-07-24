import "./watch.scss";
import video from "../../assets/video-1.mp4";
export default function Watch() {
  return (
    <div className="wrapper">
      <div className="wrapper__content">
        <div className="wrapper__content-1">
          <div>
            <video autoPlay muted loop>
              <source src={video} />
            </video>
          </div>
        </div>
        <div className="wrapper__content-2">
          <div>
            <h1>
              Young, <br /> stylish, <br /> fashionable
            </h1>
          </div>
        </div>
        <div className="wrapper__content-3">
          <div>
            <p>
              Design with the innovative position memory loop. Redmi Watch 3
              comes in with 2 in-box options: black and ivory and more strap
              colors. The strap has an innovative position memory loop on the
              strap. After you select a hole for the first wearing, it will be
              remembered and you can wear the watch more easily in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
