import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '/Users/richajos/Desktop/Projects/personalWebsite/src/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ColorModeScript } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>
  </React.StrictMode>
);

