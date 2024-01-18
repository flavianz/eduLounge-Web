import "./App.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sites/Home.tsx";
import Login from "./sites/Login.tsx";
import Subjects from "./sites/Subjects.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SubjectDetails from "./sites/SubjectDetails.tsx";
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
                            <Route path={"subjects"} element={<Subjects />} />
                            <Route
                                path={"subjects/:id"}
                                element={<SubjectDetails />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </MantineProvider>
    );
}
export default App;
