import React from "react";

const Bg_Image = ({ images }) => {
  return (
    <>
      <section className="bg-imges-area">
        <div className="container-fluid p-0">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-md-12" key={index}>
                <div className="bg-img">
                  <img src={image.src} loading="lazy" alt="Black Magic Removal by Ved Parkash Shastri" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bg_Image;
