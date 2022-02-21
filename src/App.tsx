import {
    SignIn, SignUp, CenterListPage, CenterCreatePage, StudioListPage, StudioCreatePage
    , CenterPage, CenterDetailsPage, CalendarPage, CalendarByStudioPage, CenterEarningsPage, StudioDetailsPage
} from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/frame/header';
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/">
                        <Route path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="center-new" element={<CenterCreatePage />} />
                    </Route>
                    <Route path="/center" element={<CenterListPage />}>
                        <Route path=":centerId" element={<CenterPage />}>
                            <Route path="/details" element={<CenterDetailsPage />} />
                            <Route path="/calendar" element={<CalendarPage />}>
                                <Route path=":studioId" element={<CalendarByStudioPage />} />
                            </Route>
                            <Route path="/earnings" element={<CenterEarningsPage />} />
                            <Route path="/studio" element={<StudioListPage />}>
                                <Route path="/new" element={<StudioCreatePage />} />
                                <Route path=":studioId/details" element={<StudioDetailsPage />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
