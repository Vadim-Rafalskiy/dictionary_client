import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage';
import WordsList from './pages/DictionaryPage/components/WordsList';
import Navigation from './coponents/Navigation';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dictionary" element={<DictionaryPage />}>
                <Route path="words" element={<WordsList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <Navigation />
            <App />
        </HashRouter>
    );
}
