import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'components/errors';
import Main from 'Main';
import Landing from 'components/Landing';
import Career from 'components/Career';
import Skills from 'components/Skills';
import About from 'components/About';
import Now from 'components/Now';
import Footer from 'components/Footer';
import { error404, errorGeneral } from 'data';

const router = createBrowserRouter([
  {
    path: '/intro',
    element: <Main />,
    errorElement: <ErrorPage {...errorGeneral} />,
    children: [
      {
        index: true,
        element: (
          <section>
            <Landing />
            <Career />
            <Skills />
            <About />
            <Now />
            <Footer />
          </section>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage {...error404} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
