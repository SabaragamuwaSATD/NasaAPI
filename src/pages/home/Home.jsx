import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import { useState, useEffect } from "react";

const Home = () => {
  //states
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal; //fetch cancellation

    // Async function for fetching photo
    const fetchPhoto = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
          { signal }
        );
        // Checking if fetch was not aborted
        if (!signal.aborted) {
          const data = await res.json();
          setPhotoData(data);
          console.log(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        // handle other errors
        console.error(error);
      }
    };

    fetchPhoto();

    // Cleanup function for aborting fetch
    return () => {
      controller.abort();
    };
  }, []);
  // Empty dependency array to run effect only once

  if (!photoData) return "Loading...";

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="title">
          <h1 className="mb-4 text-3xl font-extrabold text-blue-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-purple-400">
              Photo of the Day
            </span>
          </h1>
        </div>

        <div className="nasa-content">
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="video"
            />
          )}

          <div className="content-details">
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <div className="flex items-center justify-center flex-col mt-20">
              <div className="w-1/2 ml-10"></div>
              <div className="mb-3 text-center text-indigo-800 dark:text-indigo-400">
                <p>{photoData.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
