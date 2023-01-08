import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss' //Se hace uso de los estilos de scss Cuandotrabajas con REACT, ya está configurado para reconocer códifo SCSS, por lo que no es necesario trabajar con un compilador de SASS a CSS como cuando no trabajas con REACT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
