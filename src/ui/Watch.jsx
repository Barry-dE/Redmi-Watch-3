import "../styles/ui/watch.scss";
import video from "../assets/video-1.webm";
export default function Watch() {
      return (
            <section className="design">
                  <div className="design__wrapper">
                        <div className="design__content">
                              <div className="design__media">
                                    <video
                                          className="design__media__video"
                                          autoPlay
                                          muted
                                          loop
                                          width={400}
                                    >
                                          <source src={video} />
                                    </video>
                              </div>
                              <div className="design__text__wrapper">
                                    <div className="design__text">
                                          <h2 className="design__text__title">
                                                Young. Stylish. Fashionable.
                                          </h2>
                                    </div>
                                    <div className="design__text__description">
                                          <p>
                                                The Redmi Watch 3 is designed
                                                with an innovative position
                                                memory loop. This means that
                                                after you select a hole for the
                                                first wearing, the strap will
                                                remember it and you can wear the
                                                watch more easily in the future.
                                                The strap is made of
                                                high-quality silicone, which is
                                                soft and comfortable to wear. It
                                                is also water-resistant, so you
                                                can wear it in the shower or
                                                pool without worry. The Redmi
                                                Watch 3 comes in two in-box
                                                options: black and ivory.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}
