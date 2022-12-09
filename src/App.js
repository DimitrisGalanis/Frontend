import ImageSlider from "./components/ImageSlider";
import sea from "./images/sea.jpg";
import mountain from "./images/mountain.jpg";
import football from "./images/football.jpg";
import Home from "./pages/Home";

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
      <Home />
      <ImageSlider slides={slides} />
    </>
  );
};

export default App;
