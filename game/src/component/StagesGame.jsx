import React from "react";
import Mapbg from "../assets/images/mapbg.png";
import City3 from "../assets/images/city3.png";
import City2 from "../assets/images/city2.png";
import City1 from "../assets/images/city1.png";
import Location3 from "../assets/images/locaionIcon3.png";
import Location2 from "../assets/images/locationIcon2.png";
import Location1 from "../assets/images/locationIcon1.png";
import Locked from "../assets/images/locked.png";
import Paper from "../assets/images/paper.png";
import "../App.css";

function StagesGame() {
  return (
    <>
      {/* start section */}
      <section className="min-h-screen w-scree">
        {/* image Background */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
          style={{
            backgroundImage: `url(${Mapbg})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
          >
            {/* Start Game Stages */}
            {/* Grid container */}
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-md:gird max-md:grid-cols-1  ">
              {/* Row-1 Col-1 */}
              <div className=" max-sm:-order-1 ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center vert-move">
                  <img
                    src={`${City3}`}
                    alt="city-img"
                    width={205}
                    className="cursor-pointer "
                    style={{ filter: `grayscale(100%)` }}
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex">
                    <div className="flex h-24 mt-8 ">
                      <img src={`${Locked}`} alt="Locked-img" />
                    </div>
                    <div className="flex h-20  pr-4 ">
                      <img
                        src={`${Location3}`}
                        alt="Location-img"
                        style={{ filter: `grayscale(100%)` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row-1 Col-2 */}
              <div className="max-sm:-order-4    ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center ">
                  <img src={`${Paper}`} alt="city-img" width={300} />
                  <div className="absolute flex">
                    <p className="text-black font-bold text-xl">
                      :البداية
                      <br />
                      <span className="text-black font-sans text-lg font-medium">
                        انطلق وانقذ شخصيتك
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Row-2 Col-1 */}
              <div className=" max-sm:-order-2 ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center vert-move">
                  <img
                    src={`${City2}`}
                    alt="city-img"
                    width={250}
                    className="cursor-pointer "
                    style={{ filter: `grayscale(100%)` }}
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex">
                    <div className="flex h-20  pl-10 mt-4 z-10">
                      <img
                        src={`${Location2}`}
                        alt="Location-img"
                        style={{ filter: `grayscale(100%)` }}
                      />
                    </div>
                    <div className="flex h-24">
                      <img src={`${Locked}`} alt="Locked-img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row-2 Col-2 */}
              <div className="max-sm:-order-3 vert-move ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center">
                  <img
                    src={`${City1}`}
                    alt="city-img"
                    width={250}
                    className="cursor-pointer "
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex ">
                    <div className="flex h-20 z-10">
                      <img src={`${Location1}`} alt="Location-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End Game Stages */}
          </div>
        </div>

        {/* End section */}
      </section>
    </>
  );
}

export default StagesGame;