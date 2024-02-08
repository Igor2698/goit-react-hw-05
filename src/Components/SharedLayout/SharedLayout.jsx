import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "../SharedLayout/SharedLayout.module.css";
import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
      <div className={css.wrap}>
        <div className={css.container}>
          <AppBar />
        </div>
        <main>
          <div className={css.container}>
            <section className={css.section}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
