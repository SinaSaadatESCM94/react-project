/**
 * movieData object Sample
 * @param {string} id:`${count++}`
 * @param {string} imgCoverLink: ""
 * @param {string} title: ""
 * @param {string} briefStory: ``
 * @param {string} publishYear: ""
 * @param {string} imdbLink: ""
 * @param {object} ratings: {
 * @param {string} imdb: "",
 * @param {string} rottenTomatoes: "", }
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// styling
import "./MovieCard.scss";

function MovieCard(props) {
  return (
    <div className="card d-flex flex-column align-items-center justify-content-center">
      <div className="img-container w-100 d-flex align-items-center justify-content-center position-relative top-0">
        <img
          src={props.movieData.imgCoverLink}
          alt="cover"
          className="w-100 h-100 position-absolute"
        />
        <div className="story-container w-100 h-100 position-absolute">
          <div className="secondary-container w-100 h-auto d-flex flex-column align-items-center justify-content-between position-absolute top-0 left-0">
            <p className="story w-100 h-auto text-justify">
              {props.movieData.briefStory}
            </p>
            <div className="rating w-100 h-auto d-flex align-items-start">
              <FontAwesomeIcon icon={faStar} className="icon" />
              {props.movieData.ratings.imdb !== "" && (
                <div className="imdbRate h-100 d-flex flex-column justify-content-between me-auto">
                  <p>{`${props.movieData.ratings.imdb}/10`}</p>
                  <h3>imdb</h3>
                </div>
              )}
              {props.movieData.ratings.rottenTomatoes !== "" && (
                <div className="rottenRate h-100 d-flex flex-column justify-content-between">
                  <p>{`${props.movieData.ratings.rottenTomatoes}`}</p>
                  <h3>Rotten Tomatoes</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="info-container w-100 d-flex flex-column align-items-start justify-content-between">
        <div className="title w-100 h-auto d-flex align-items-center justify-content-between">
          <h1>{props.movieData.title.toUpperCase()}</h1>
          <h2>{props.movieData.publishYear}</h2>
        </div>
        <a
          href={props.movieData.imdbLink}
          target="_blank"
          rel="noreferrer"
          className="imdbLink w-100 justify-content-end cursor-pointer"
        >
          See more on IMDB
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
