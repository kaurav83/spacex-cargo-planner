import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import { IRoute } from './types';
import { Layout } from './components';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route: IRoute) => (
          <Route
            key={route.key}
            path={route.index ? '' : route.path}
            index={route.index ?? false}
            element={<route.component />}
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
