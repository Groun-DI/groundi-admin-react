import { SignIn, SignUp, HomePage, CenterCreatePage, StudioListPage, StudioCreatePage } from 'pages';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/new-center" element={<CenterCreatePage />} />
                {/* <Route path="/center" element={<CenterCreatePage />}>
                    <Route path="/:centerId/studio-new" element={<StudioCreatePage />} />
                    <Route path="/:centerId" element={CenterPage} />
                    <Route path="/:centerId/calendar" element={ } />
                    <Route path="/:centerId/calendar/:studioId" element={ } />
                    <Route path="/:centerId/studio-listings" element={ } />
                    <Route path="/:centerId/manage-studio/:studioId" element={ } />
                </Route> */}
                <Route path="/center/new" element={<CenterCreatePage />} />
                <Route path="/studio" element={<StudioListPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
