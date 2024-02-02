import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";


import { Home, Blogs, NoPage, MenuNav01, Markets, Demo, Actions } from ".././pages/index";
const RouteNav = () => {
    const router = createBrowserRouter([
        {

            path: "/",
            element: <MenuNav01 />,
            loader: ({ params, request }) => {
                redirect(request.url);
                return null

            },
            children: [
                {
                    index: true,

                    element: <Home />,
                },

                {
                    path: "blogs",
                    element: <Blogs />,
                },
                {
                    path: "market",
                    element: <Markets />,
                },
                {
                    path: "demo",
                    element: <Demo />,
                },


                {
                    path: "action/:root?",
                    element: <Actions />,
                },



                {
                    path: "*",
                    element: <NoPage />,
                },



            ],
        }, {
            path: "/",
            element: <MenuNav01 />,

        },



    ], {
        future: {
            // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
            v7_normalizeFormMethod: true,
        },
        basename: "/"
    });

    return (

        <>


            <RouterProvider router={router} />

        </>
    );
}
export default RouteNav

