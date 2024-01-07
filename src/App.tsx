import "./App.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sites/Home.tsx";
import Login from "./sites/Login.tsx";

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"}>
                        <Route path={"home"} element={<Home />} />
                        <Route path={"login"} element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}
export default App;
