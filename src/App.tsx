import {
    SignIn, SignUp, StudioListPage, StudioCreatePage
    , CenterPage, CenterDetailsPage, CalendarPage, CenterEarningsPage, StudioDetailsPage
} from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/frame/header';
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/center:centerId" element={<CenterPage />}>
                        <Route path="/details" element={<CenterDetailsPage />} />
                        <Route path="/calendar:studioId" element={<CalendarPage />} />
                        <Route path="/earnings" element={<CenterEarningsPage />} />
                        <Route path="/studio" element={<StudioListPage />}>
                            <Route path="/new" element={<StudioCreatePage />} />
                            <Route path=":studioId/details" element={<StudioDetailsPage />} />
                        </Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
