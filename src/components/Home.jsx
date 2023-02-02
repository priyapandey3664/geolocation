import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [currLocation, setCurrLocation] = useState({});
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };

  return (
    <>
      <div className="first">
        <h1 className="h1-heading">
          Time Zone API <br />
          Your Current Time Zone
        </h1>
        <p>Name Of Time Zone:{currLocation.timezone}</p>
        <p>Name Of Postal code:{currLocation.postal}</p>
        <p>Name Of country:{currLocation.country_name}</p>
        <p>Latitude: {currLocation.latitude}</p>
        <p>Longitude: {currLocation.longitude}</p>
        <p>City: {currLocation.city}</p>
        <p> name of utc Offset: {currLocation.utc_offset}</p>
        <p className="cmt">YOUR API WAS NOT WORKING</p>
        <p className="cmt">i had tried lots of time but no result so i used other API for this contest</p>
      </div>

      <div className="second">
      <div class="wrap">
          <h1>Enter Address</h1>
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="search"
            />
          </div>
          <button type="submit" class="searchButton">
             Submit
            </button>
        </div>
        <h1>Your Result Current Location </h1>
        <p>Latitude: {currLocationJs.latitude}</p>
        <p>Longitude: {currLocationJs.longitude}</p>
        <p>Name Of Time Zone:{currLocation.timezone}</p>
        <p>Name Of Postal code:{currLocation.postal}</p>
        <p>Name Of country:{currLocation.country_name}</p>
        <p> name of City: {currLocation.city}</p>
        <p> name of utc Offset: {currLocation.utc_offset}</p>
      </div>

      {/* <p>Name Of country:{currLocation.country_name}</p> */}
    </>
  );
}

export default Home;
