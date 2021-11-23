import {BrowserRouter as Router} from 'react-router-dom';
import AuthProvider from './auth/AuthProvider';
import CustomThemeProvider from './theme/CustomThemeProvider';
import Routes from './routes/Routes'
import { Suspense } from 'react';
import Loading from './components/common/loading/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <Routes />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </Suspense>
  )
}

export default App;
