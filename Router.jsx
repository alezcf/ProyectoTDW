import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";

const RouterApp = () => {
    return <LogedInRoutes />;
};

const LogedInRoutes = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
        </>
    );
};
export default RouterApp;