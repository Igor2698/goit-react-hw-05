import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { SharedLayout } from "../SharedLayout/SharedLayout";
const Home = lazy(() => import("../../Pages/Home/Home"));
import { Loader } from "../Loader/Loader";
const Movies = lazy(() => import("../../Pages/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("../../Pages/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("../Cast/Сast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
