import React from "react";
import { useTranslation } from "react-i18next"; //Hook de i18next
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
  //Tranlation variable
  const { t } = useTranslation();
  const intro = t("tolkobot.intro");
  return (
    <section className="tolkobotContainer">
      <div className="tolkobotEs">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Tolkobot"
            steps={[
              {
                id: "intro",
                message: intro,
                trigger: "user-name",
              },
              {
                id: "user-name",
                user: true,
                trigger: "respuesta-userName",
              },
              {
                id: "respuesta-userName",
                message: "Gusto en conocerte {previousValue} ¿En qué te puedo ayudar?",
                trigger: "opciones",
              },
              {
                id: "opciones",
                options: [
                  {value: "a", label: "opcion-A", trigger: "respuesta-a"},
                  {value: "b", label: "opcion-B", trigger: "respuesta-b"},
                ]
              },
              {
                id: "respuesta-a",
                message: "elegiste la opción A",
                end: true,
              },
              {
                id: "respuesta-b",
                message: "elegiste la opción B",
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
      <div className="tolkobotEn">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Tolkobot"
            steps={[
              {
                id: "intro",
                message: "Hi! I´m the Tolkobot, what´s your name'",
                trigger: "user-name",
              },
              {
                id: "user-name",
                user: true,
                trigger: "respuesta-userName",
              },
              {
                id: "respuesta-userName",
                message: "Nice to meet you {previousValue} How can I help you?",
                trigger: "opciones",
              },
              {
                id: "opciones",
                options: [
                  {value: "a", label: "option-A", trigger: "respuesta-a"},
                  {value: "b", label: "option-B", trigger: "respuesta-b"},
                ]
              },
              {
                id: "respuesta-a",
                message: "You chose option A",
                end: true,
              },
              {
                id: "respuesta-b",
                message: "you chose option B",
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    </section>
  );
};

export default Tolkobot;
