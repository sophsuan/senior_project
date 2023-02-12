import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CompanionHousing from "./components/CompanionHousing";
import { userContext } from "./userContext";
import { Routes, Route } from "react-router-dom";
import { LogsPage } from "./LogsPage";
import { ResourcesPage } from "./ResourcesPage";
import InfoModal from "./components/InfoModal";

function getUserId() {
  return new Promise(function (resolve, reject) {
    chrome.identity.getProfileUserInfo(function (userInfo) {
      //console.log(userInfo.id);
      resolve(userInfo.id);
    });
  });
}

function App() {
  const [user, setUser] = useState({ clientId: "aaaaeeee" });
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    const fetchUser = () => {
      try {
        var userPromise = getUserId();

        Promise.all([userPromise]).then(function (results) {
          setUser({ clientId: String(results[0]) });
        });
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
            //console.log("response experience", response);
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
        <Routes>
          <Route
            path="logs"
            element={
              <div className="flex-auto pl-[10%] pr-[15%] pt-[2.5%] pb-[2.5%]">
                <LogsPage experience={experience} />
              </div>
            }
          />
          <Route
            path="resources"
            element={
              <div className="flex-auto pl-[10%] pr-[15%] pt-[2.5%] pb-[2.5%]">
                <ResourcesPage />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="flex-auto">
                <div className="flex font-black text-stone-700 font-mono w-full justify-center text-xl pt-4">
                  <div className="flex width-[50%] bg-gray-100 p-3 rounded-lg mr-[5%]">
                    <div className="box-border bg-gray-200 border-gray-500 border-2 rounded-lg pl-4 pr-4 pt-2 pb-2" >⇧</div>
                    <div className="box-border bg-gray-200 border-gray-500 border-2 rounded-lg pl-4 pr-4 pt-2 pb-2 ml-2">⇩</div>
                    <div className="box-border bg-gray-200 border-gray-500 border-2 rounded-lg pl-4 pr-4 pt-2 pb-2 ml-2">Enter</div>
                  </div>
                </div>
                <div className="flex-auto pl-[10%] pr-[15%] pt-[1%] pb-[1%]">
                  <CompanionHousing
                    experience={experience}
                    setExperience={setExperience}
                  />
                </div>
              </div>
            }
          />
        </Routes>
        <div className="flex items-end">
          <div className="mr-10 mb-10 z-15">
            <InfoModal></InfoModal>
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
