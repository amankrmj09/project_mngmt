import './App.css'
import {Toaster} from "react-hot-toast";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store.js";
import DashboardShell from "./pages/DashboardShell.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Team from "./pages/Team.jsx";
import Projects from "./pages/Projects.jsx";

function App() {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Toaster/>
                    <Routes>
                        <Route path="/" element={DashboardShell}>
                            <Route index element={Dashboard}/>
                            <Route path="/team" element={Team}/>
                            <Route path="/projects" element={Projects}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
