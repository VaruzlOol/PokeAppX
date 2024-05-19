import AppProvider from './app/context/AppContext.jsx';
import RoutesProvider from './routes/RoutesProvider.jsx';

function App() {
  return (
    <AppProvider>
      <RoutesProvider />
    </AppProvider>
  )
}

export default App;
