import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Watch = (props) => {
  const location = useLocation();
  console.log(location);
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={movie.video} />
    </div>
  );
};

export default Watch;
