import { SignIn, SignUp, SpaceCreate, Center, CenterNew, StudioNew } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/frame/header';
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/space/create" element={<SpaceCreate />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/center" element={<Center />} />
                    <Route path="/center/new" element={<CenterNew />} />
                    <Route path="/studio/new" element={<StudioNew />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
