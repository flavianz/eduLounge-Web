import "./App.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sites/Home.tsx";

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"}>
                        <Route path={"home"} element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}
export default App;
