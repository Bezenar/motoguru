import './_utils/scss/main.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootTemplate from './components/templates/Page';
import useRoutes from './hooks/useRoutes';

const App: React.FC<{}> = ({}) => {
    const routes = useRoutes();

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<RootTemplate />}>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
