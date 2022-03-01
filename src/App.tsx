import { SignIn, SignUp, CenterPage, CenterDetailsPage, CenterCreatePage, StudioListPage, StudioCreatePage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CenterPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/center-new" element={<CenterCreatePage />}/>
                {/* <Route path="/center" element={<CenterDetailsPage />}>
                        <Route path=":centerId/studio-new" element={<StudioCreatePage />} />
                    </Route> */}
                <Route path="/center/new" element={<CenterCreatePage />} />
                <Route path="/studio" element={<StudioListPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
