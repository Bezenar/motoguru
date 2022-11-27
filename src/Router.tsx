import './_utils/scss/main.scss';
import routes from './routes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootTemplate from './components/templates/Page';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RootTemplate />}>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
