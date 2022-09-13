import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import { PropTypes } from 'prop-types';

function AppRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<Home appRef={props.appRef} />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}
AppRouter.propTypes = {
  appRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default AppRouter;
