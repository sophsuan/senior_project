import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CompanionHousing from "./components/CompanionHousing";
import {userContext} from './userContext';

function App() {
  const [user, setUser] = useState({clientId: ""});
  useEffect(() => {
    const fetchUser = () => {
      try {
        var manifest = chrome.runtime.getManifest();
        if (manifest.oauth2) {
          var clientId = encodeURIComponent(manifest.oauth2.client_id);
        setUser({clientId: clientId});
        };
      }
      catch (error) {
        setUser({clientId: "guest"});
      }
    };
    fetchUser();
  }, []);
  return (
    <userContext.Provider value={user}>
      <div className="flex h-screen">
        <div className="pl-[2.5%] pt-[2.5%]">
          <Navbar />
        </div>
        <div className="flex-auto pl-[10%] pr-[15%] pt-[2.5%] pb-[2.5%]">
          <CompanionHousing />
          <div className=" flex font-black text-stone-700 font-mono w-full justify-center text-xl pt-4">
            Use keys ⇧, ⇩, and Enter to navigate your game device
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
