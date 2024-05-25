import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
