import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CompanionHousing from "./components/CompanionHousing";
import { userContext } from "./userContext";

function getUserId() {
  return new Promise(function (resolve, reject) {
    chrome.identity.getProfileUserInfo(function (userInfo) {
      console.log(userInfo.id);
      resolve(userInfo.id);
    });
  });
}

function App() {
  const [user, setUser] = useState({ clientId: "aaaaeeee" }); // <- setUser is here and just believe that it works to set the user variable
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    const fetchUser = () => {
      try {
        // this whole chunk might be wrong, im just not sure how to get this working and was experimenting
        var userPromise = getUserId();
        // const { uID } = await userPromise.then(
        //   (res) => res.data
        // );
        Promise.all([userPromise]).then(function (results) {
          setUser({ clientId: String(results[0]) }); // lol typescript
        });
        // need to get userID here and set that with setUser({})
        /*
        var manifest = chrome.runtime.getManifest();
        if (manifest.oauth2) {
          var clientId = encodeURIComponent(manifest.oauth2.client_id);
          setUser({ clientId: clientId }); // <- this line is example how bora setting the user variable
        }
        */
      } catch (error) {
        setUser({ clientId: "guest" });
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        await fetch(
          "http://localhost:3001/api/user?" +
            new URLSearchParams({ userId: user.clientId }),
          {
            method: "GET",
          }
        ).then((response) => {
          return response.json().then((response) => {
            console.log("response experience", response);
            setExperience(Number(response[0].experience));
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (user.clientId !== "") fetchExperience();
  }, [user.clientId]);

  return (
    <userContext.Provider value={user}>
      <div className="flex h-screen">
        <div className="pl-[2.5%] pt-[2.5%]">
          <Navbar />
        </div>
        <div className="flex-auto pl-[10%] pr-[15%] pt-[2.5%] pb-[2.5%]">
          <CompanionHousing
            experience={experience}
            setExperience={setExperience}
          />
          <div className=" flex font-black text-stone-700 font-mono w-full justify-center text-xl pt-4">
            Use keys ⇧, ⇩, and Enter to navigate your game device
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
