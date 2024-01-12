import "./App.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sites/Home.tsx";
import Login from "./sites/Login.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
    return (
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"}>
                            <Route path={"home"} element={<Home />} />
                            <Route path={"login"} element={<Login />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </MantineProvider>
    );
}
export default App;
