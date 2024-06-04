import health_watch from "../assets/asset-4.webp";
import health_phone from "../assets/healthCheck.webp";
import "../styles/ui/health.scss";
export default function Health() {
      const text = {
            title: " Your health consultant",
            description:
                  "Blood oxygen monitoring: Monitoring your health whenever you need The optical oximetry sensor detects your blood oxygen saturation, so you can see your blood oxygen levelwhenever needed. 24-hour heart rate monitor. Stay alert to changes in your heart rate: The fully upgraded heart rate algorithm can capture signals more sensitively, so your heart rate changes can be tracked continuously and accurately, guarding your health around the clock.",
      };
      return (
            <section className="health">
                  <div className="health__wrapper">
                        <div className="health__content">
                              <div className="health__content__content">
                                    <div className="health__medias">
                                          <div className="health__medias__wrapper">
                                                <figure className="health__media">
                                                      <img
                                                            width={300}
                                                            className="health__media__image"
                                                            src={health_watch}
                                                            alt="man wearing redmi watch 3"
                                                      />
                                                </figure>
                                                <figure className="health__media">
                                                      <img
                                                            width={300}
                                                            className="health__media__image"
                                                            src={health_phone}
                                                            alt="Heart rate displayed on phone"
                                                      />
                                                </figure>
                                          </div>
                                          <div className="health__text">
                                                <h2 className="health__text__title">
                                                      Your health consultant
                                                </h2>
                                                <article className="health__article">
                                                      <p className="health__description">
                                                            Blood oxygen
                                                            monitoring:
                                                            Monitoring your
                                                            health whenever you
                                                            need The optical
                                                            oximetry sensor
                                                            detects your blood
                                                            oxygen saturation,
                                                            so you can see your
                                                            blood oxygen level
                                                            whenever needed.
                                                      </p>
                                                      <p className="health__description">
                                                            24-hour heart rate
                                                            monitor. Stay alert
                                                            to changes in your
                                                            heart rate: The
                                                            fully upgraded heart
                                                            rate algorithm can
                                                            capture signals more
                                                            sensitively, so your
                                                            heart rate changes
                                                            can be tracked
                                                            continuously and
                                                            accurately, guarding
                                                            your health around
                                                            the clock.
                                                      </p>
                                                </article>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}
