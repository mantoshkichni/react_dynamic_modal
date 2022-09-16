import { useState } from "react";
import ReactModal from "react-modal";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: 1,
      name: "Mantosh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
    {
      id: 2,
      name: "Santosh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
    {
      id: 3,
      name: "Sachin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
    {
      id: 4,
      name: "Navi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    }
  ];
  const [popup, setpopup] = useState([]);
  const [showpopup, setshowpopup] = useState(false);
  const getdata = (item) => {
    setpopup([item]);
    setshowpopup(!showpopup);
  };
  const closemodel = () => {
    setshowpopup(!showpopup);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((item) => {
        return (
          <button className="btn btn-primary m-1" onClick={() => getdata(item)}>
            {item.name}
          </button>
        );
      })}
      <div className="pop-up-container">
        <div className="pop-up-content">
          {popup.map((item) => {
            return (
              <ReactModal
                isOpen={showpopup}
                onRequestClose={closemodel}
                className="Modal"
                overlayClassName="Overlay"
              >
                <>
                  <button
                    className="btn btn-danger"
                    onClick={(showpopup) => setshowpopup(!showpopup)}
                  >
                    X
                  </button>
                  <h1>
                    {item.id}---{item.name}
                  </h1>
                  <p>{item.description}</p>
                </>
              </ReactModal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
