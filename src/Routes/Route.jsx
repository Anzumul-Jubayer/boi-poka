import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("booksData.json"),
      },
      {
        path:'/listedbooks',
        Component:ListedBooks,
         loader: () => fetch("booksData.json")
      },
      {
        path:'/bookDetails/:id',
        loader: () => fetch("./booksData.json"),
        Component:BookDetails
      },
    ],
  },
]);
