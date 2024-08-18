import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

function App() {
  // const [isHovered, setIsHovered] = useState(false);

  // const divStyle = {
  //   border: isHovered ? "10px solid red" : "10px solid pink", // Change color on hover

  //   transition: "background-color 0.3s ease", // Smooth transition
  // };
  const [cards, setCards] = useState([
    {
      item: {
        prof: "prof1.png",
        img: "one.png",
        name: "Hans Down",
        color: "green",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis iusto nulla nihil atque? Mollitia
                          fuga necessitatibus nobis dicta fugit sapiente quos
                          excepturi consectetur consequatur, reprehenderit
                          numquam dolore odio. Quisquam, explicabo.`,
      },
    },
    {
      item: {
        prof: "prof2.png",
        img: "two.png",
        name: "Wisteria Widget",
        color: "blue",
        text: `
      
             Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis iusto nulla nihil atque? Mollitia
                          fuga necessitatibus nobis dicta fugit sapiente quos
                          excepturi consectetur consequatur, reprehenderit
                          numquam dolore odio. Quisquam, explicabo.
      `,
      },
    },
    {
      item: {
        prof: "prof3.png",
        img: "three.png",
        name: "Desmond Eagle",
        color: "pink",
        text: `
             Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis iusto nulla nihil atque? Mollitia
                          fuga necessitatibus nobis dicta fugit sapiente quos
                          excepturi consectetur consequatur, reprehenderit
                          numquam dolore odio. Quisquam, explicabo.
      
      `,
      },
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevArray) => {
        // Create a copy of the array
        const newArray = [...prevArray];

        // Select two random indices to swap
        const index1 = Math.floor(Math.random() * newArray.length);
        const index2 = Math.floor(Math.random() * newArray.length);

        // Swap the elements
        [newArray[index1], newArray[index2]] = [
          newArray[index2],
          newArray[index1],
        ];

        return newArray;
      });
    }, 1000); // Change every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <img src="/bg1.png" alt="" />

        <div className="content">
          <div className="wrapper">
            {cards.map((item, index) => (
              <div className="card">
                <Tilt
                  tiltEnable={true}
                  tiltReverse={false}
                  tiltAngleXInitial={0}
                  tiltAngleYInitial={0}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  tiltAxis={undefined}
                  tiltAngleXManual={null}
                  tiltAngleYManual={null}
                  glareEnable={false}
                  glareMaxOpacity={0.7}
                  glareColor="#ffffff"
                  glareBorderRadius="0"
                  glarePosition="bottom"
                  glareReverse={false}
                  scale={1}
                  perspective={1000}
                  flipVertically={false}
                  flipHorizontally={false}
                  reset={true}
                  transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                  transitionSpeed={10000}
                  trackOnWindow={false}
                  gyroscope={false}
                >
                  <div
                    className="cover"
                    style={{
                      transition: "0.5s ease-in-out",
                      border: `10px solid ${item?.item?.color}`,
                    }}

                    // style={divStyle}
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="im">
                      <img
                        src={item?.item?.img}
                        alt=""
                        style={{ transition: "0.5s ease-in-out" }}
                      />
                    </div>

                    <div className="prof">
                      <img
                        src={item?.item?.prof}
                        alt=""
                        style={{ transition: "0.5s ease-in-out" }}
                      />
                    </div>

                    <div className="text">
                      <h1
                        style={{
                          transition: "0.5s ease-in-out",
                          color: item?.item?.color,
                        }}
                      >
                        {item?.item?.name}
                      </h1>
                      <div className="info">
                        <p
                          style={{
                            transition: "0.5s ease-in-out",
                            color: "wheat",
                          }}
                        >
                          {item?.item?.text.slice(0, 100)}
                        </p>
                      </div>
                      <div className="btn">
                        <button className="btn1">Follow</button>
                        <button className="btn2">More Info</button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
