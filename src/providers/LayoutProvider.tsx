import { Fragment } from 'react/jsx-runtime';
import { Outlet } from 'react-router';

export default function LayoutProvider() {
  return (
    <Fragment>
      <main className="flex flex-col lg:w-150 lg:px-105 lg:mt-30 lg:gap-6 w-90.25 px-4 mt-20 gap-4">
        <Outlet />
      </main>
    </Fragment>
  );
}
