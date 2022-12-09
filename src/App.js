import { Link } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import sea from "./images/sea.jpg";
import mountain from "./images/mountain.jpg";
import football from "./images/football.jpg";

const App = () => {
  const slides = [
    {
      title: "football",
      url: football,
    },
    {
      title: "sea",
      url: sea,
    },
    {
      title: "mountain",
      url: mountain,
    },
  ];
  return (
    <>
      <Link to="/login">This is HOME page routing to login</Link>
      <ImageSlider slides={slides} />
    </>
  );
};

export default App;
