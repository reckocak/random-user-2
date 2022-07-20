import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";

import womanSvg from "./assets/woman.svg";

import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

function App() {
  const [myuser, setMyuser] = useState([]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  const [bilgi, setBilgi] = useState("name");
  const [text, setText] = useState("Mr Recinult Hiuv");

  const getUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  };

  const AddUser = () => {
    if (!myuser.includes(user)) {
      setMyuser([...myuser, user]);
    } else {
      alert("user daha önce girilmistir");
    }
  };
  console.log(myuser);

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={user.picture?.medium}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {bilgi} is</p>
          <p className="user-value">{text}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
                onMouseOver={() => {
                  setBilgi("name");
                  setText(
                    user.name?.title +
                      " " +
                      user.name?.first +
                      " " +
                      user.name?.last
                  );
                }}
              />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={() => {
                setBilgi("email");
                setText(user.email);
              }}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={() => {
                setBilgi("age");
                setText(user.dob?.age);
              }}
            >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={() => {
                setBilgi("street");
                setText(user.location?.street?.name);
              }}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={() => {
                setBilgi("phone");
                setText(user.phone);
              }}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={() => {
                setBilgi("password");
                setText(user.login?.password);
              }}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={AddUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {myuser.map((user) => (
                <tr className="body-tr" key={user.email}>
                  <td>{user.name?.first}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob?.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
