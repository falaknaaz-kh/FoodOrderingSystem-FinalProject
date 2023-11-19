import React, { useState, useRef, useEffect } from "react";
import image from "../Chat/chatbot1.png";
import { Container } from "reactstrap";
import Navbar2 from "../../Components/C_navbar";

function Chat() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();
  const [time, setTime] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      setTime(`${hours}:${seconds}`);
      setDateTime(`${days[day]}, ${months[month]} ${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");

    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "neon";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words";
        inputRef.value = "";
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");

      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello what can i do for you? .";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = "";
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = "";
      }, 2000);
    }
    let how = ["information about order"];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "  ";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }
    let good = ["order tracking| tracking | where is my order"];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          " for order tracking you can connect to CraveClick Team 😁";
        inputRef.value = "";
      }, 1000);
    }

    let response = ["order status|status"];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          " somthing went wrong you can connect us on xx-xx-xx-xxxx ";
        inputRef.value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Treasure";
        inputRef.value = "";
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
        inputRef.value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ];
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 12 year old";
        inputRef.value = "";
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value;
  };

  return (
    <section class="header text-center">
      <div class=" text-black">
        <Navbar2 />
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
            onLoad={checkStatus}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "30px",
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 4px 4px rgba(253, 253, 253, 0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "60px", height: "60px" }}>
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "1em",
                      backgroundColor: "#ffffff",
                      border: "2px solid black",
                      borderRadius: "5px",
                      height: "30px",
                      width: "70px",
                      backgroundSize: "10px 10px",
                    }}
                  >
                    ChatBot
                  </div>
                  <div className="status" style={{ color: "green" }}>
                    Active
                  </div>
                </div>
              </div>
              <div style={{ margin: "30px 0 0" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="bot-message"
                    id="message1"
                    ref={botmessage}
                    style={{
                      width: "100%",
                      padding: "15px",
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "#ffffff",
                      fontStyle: "1.1em",
                      borderRadius: "10px",
                      margin: "0 10px 0",
                    }}
                  ></div>
                  <div
                    className="human-message"
                    id="message2"
                    ref={humanMessage}
                    style={{
                      width: "100%",
                      padding: "15px",
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "#ffffff",
                      color: "#000000",
                      fontStyle: "1.3em",
                      borderRadius: "10px",
                      position: "relative",
                      top: "120px",
                      marginBottom: "20px",
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ margin: "120px 0 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "325px", height: "58px" }}>
                    <input
                      type="text"
                      id="input"
                      placeholder="Enter your message"
                      ref={input}
                      style={{
                        width: "100%",
                        height: "100%",
                        fontWeight: "bold",
                        paddingLeft: "36px",
                        outline: "none",
                        border: "none",
                        background: "#ffffff",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <button
                      onClick={handleInput}
                      style={{
                        width: "80px",
                        height: "40px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        background: "#0f036d",
                        color: "#fff",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "1.1em",
                      }}
                    >
                      <i
                        className="fas fa-paper-plane"
                        style={{ marginLeft: "5px" }}
                      ></i>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Chat;
