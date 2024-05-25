import { SpeedInsights } from '@vercel/speed-insights/react';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <SpeedInsights />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
