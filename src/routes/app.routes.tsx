import { Routes, Route, Navigate } from 'react-router-dom';
import { Portfolio } from '../pages';
import PATHS_ROUTES from './paths';
import { AppContainer } from '../containers';

function AppRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route
          path={PATHS_ROUTES.APP.DASHBOARD.DEFAULT}
          element={<Portfolio />}
        />
        <Route
          path="*"
          element={<Navigate to={PATHS_ROUTES.APP.DASHBOARD.DEFAULT} replace />}
        />
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
