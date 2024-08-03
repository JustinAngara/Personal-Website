import { Routes, Route, HashRouter, useNavigate} from "react-router-dom";

//global styles
import "@/Common/css/normalize.css";
import "@/Common/css/global.scss";

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";
import { MediaQueryProvider } from "@/Common/useMediaQuery.jsx";

//components
import Home from "./Home/Home";
import Staff from "./Staff/Staff.jsx";
import Contact from "./Contact/Contact.jsx";

// page componenents course work
import CourseWorkLayout from "./CourseWork/CourseWorkLayout.jsx";
import SunAndMoon from "./CourseWork/SunAndMoon/SunAndMoon.jsx";
import Essays from "./CourseWork/Essays/Essays.jsx";
import ResponsiveDesign from "./CourseWork/ResponsiveDesign.jsx";
import Graphs from "./CourseWork/Graphs/Graphs.jsx"
import SplashScreen from "./CourseWork/SplashScreen/Splash.jsx";
import Sitemap from "./CourseWork/sitemap/Sitemap.jsx";
const MyRoutes = () => {

    return (
        <HashRouter>
            <MediaQueryProvider>
                <Routes>
                    <Route element={<PagesLayout />}>
                        <Route element={<Home />} path="" />
                        <Route element={<Staff />} path="staff" />
                        <Route element={<Contact />} path="contact" />
                        <Route element={<Contact />} path = "resume"/>
                        <Route element={<SplashScreen />} path = "splash"/>
                        <Route element={<Sitemap />} path = "sitemap"/>

                        <Route
                            element={<Graphs />}
                            path="course-work"
                        >

                            <Route element={<Essays />} path="" />
                            <Route element={<Graphs />} path="graphs" />

                            <Route
                                element={<SplashScreen />}
                                path = "splash"
                            />
                            <Route
                                element={<Sitemap />}
                                path = "sitemap"
                            />

                            <Route
                                element={<ResponsiveDesign />}
                                path="responsive"
                            />
                        </Route>

                    </Route>
                </Routes>
            </MediaQueryProvider>



        </HashRouter>

    );
};

export default MyRoutes;
