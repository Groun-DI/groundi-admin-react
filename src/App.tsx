import {
    SignIn, SignUp, HomePage, CenterPage, CenterCreatePage, StudioPage, StudioCreatePage, Calendars, WeekCalendar, MonthCalendar, ReservationPage
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
                <Route path=":centerId" element={<CenterPage />}>
                    <Route path="reservation" element={<ReservationPage />}>
                        <Route path=":studioId" element={<ReservationPage />} />
                    </Route>
                    <Route path="calendar" element={<Calendars />}>
                        <Route path=":studioId/week" element={<WeekCalendar />} />
                        <Route path=":studioId/month" element={<MonthCalendar />} />
                    </Route>
                    <Route path="studio" element={<StudioPage />} />
                </Route>
                <Route path="/center/:centerId/new-studio" element={<StudioCreatePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
