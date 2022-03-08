import {
    SignIn, SignUp, HomePage, CenterPage, CenterCreatePage, ReservationPage, StudioPage, StudioCreatePage, CalendarPage, StuidoReservationPage, StudioCalendarPage
} from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/new-center" element={<CenterCreatePage />} />
                <Route path="/center/:centerId" element={<CenterPage />}>
                    <Route path="reservation" element={<ReservationPage />}>
                        <Route path=":studioId" element={<StuidoReservationPage />} />
                    </Route>
                    <Route path="calendar" element={<CalendarPage />}>
                        <Route path=":studioId" element={<StudioCalendarPage />} />
                    </Route>
                    <Route path="studio" element={<StudioPage />} />
                </Route>
                <Route path="/center/:centerId/new-studio" element={<StudioCreatePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
