import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#606F86",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#eb3449",
  botFontColor: "#fff",
  userBubbleColor: "#606F86",
  userFontColor: "#fff",
};

const Tolkobot = () => {
  return (
    <section className="tolkobot">
      <ThemeProvider theme={theme}>
        <ChatBot
        headerTitle="Tolkobot"
          steps={[
            {
              id: "intro",
              message: "¡Qué tal, soy el Tolkobot! ¿Cuál es tu nombre?",
              trigger: "user-name"
            },
            {
                id: "user-name",
                user: true,
                trigger:"respuesta-userName"
            },
            {
                id: "respuesta-userName",
                message: "Gusto en conocerte {previousValue} ¿En qué te puedo ayudar?",
                end: true
            },
          ]}
        />
      </ThemeProvider>
    </section>
  );
};

export default Tolkobot;
