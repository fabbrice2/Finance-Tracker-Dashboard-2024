// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Vos futures routes iront ici : <Route path="/budgets" element={<Budgets />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}