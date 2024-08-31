import React from "react";
import Title from "./Title";
import { tours } from "../data";
import img1 from "../images/tour-1.jpeg";

const Tours = () => {
  return (
    <React.Fragment>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map(
            ({ id, date, title, text, icon, country, days, price }) => {
              return (
                <article className="tour-card" key={id}>
                  <div className="tour-img-container">
                    <img src={img1} className="tour-img" alt={title} />
                    <p className="tour-date">{date}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{title}</h4>
                    </div>
                    <p>{text}</p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className={icon}></i>
                        </span>{" "}
                        {country}
                      </p>
                      <p>{days}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Tours;
