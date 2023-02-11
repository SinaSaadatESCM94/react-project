import React from "react";
import { useNavigate } from "react-router-dom";
import "./slideShow.scss";
import { Button } from "../../component";
import img1 from "../../assets/slideshow/img-1.jpg";
import img2 from "../../assets/slideshow/img-2.jpg";
import img3 from "../../assets/slideshow/img-3.jpg";
import img4 from "../../assets/slideshow/img-4.jpg";
import img5 from "../../assets/slideshow/img-5.jpg";
import img6 from "../../assets/slideshow/img-6.jpg";
import img7 from "../../assets/slideshow/img-7.jpg";

function SlideShow(props) {
  const navigate = useNavigate();
  const images = [
    { src: img1, index: 1, alt: "image-1" },
    { src: img2, index: 2, alt: "image-2" },
    { src: img3, index: 3, alt: "image-3" },
    { src: img4, index: 4, alt: "image-4" },
    { src: img5, index: 5, alt: "image-5" },
    { src: img6, index: 6, alt: "image-6" },
    { src: img7, index: 7, alt: "image-7" },
  ];
  return (
    <main className="w-100 vh-100 d-flex flex-column align-items-center p-5 bg-dark">
      <h1 className="w-100 text-white text-center text-capitalize">
        This page is not responsive
      </h1>
      <ul className="w-100 h-100 m-5 d-flex align-items-center justify-content-center gap-2">
        {images.map((image) => {
          return (
            <li
              key={image.index}
              className="h-100 d-flex transition-all slide-container"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-100 h-100 ${
                  image.index === 1 && "rounded-start-3"
                } ${image.index === 7 && "rounded-end-3"}`}
              />
            </li>
          );
        })}
      </ul>
      <div className="col-4 h-auto d-flex align-item-center">
        <Button
          tabIndex="1"
          fontSize="h4"
          type="button"
          id="redirect-home"
          value="button"
          backgroundColor="btn-purple"
          borderRadius="rounded-2"
          showLoadingOnClick={false}
          onClick={() => {
            navigate("/SinaSaadatESCM94/react-project.git/board");
          }}
          label="back to Board"
        />
      </div>
    </main>
  );
}

export default SlideShow;
