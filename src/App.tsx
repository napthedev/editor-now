import { Outlet, ReactLocation, Route, Router } from "react-location";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { FC, useMemo } from "react";

const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: () => import("./pages/Home").then((module) => <module.default />),
  },
  {
    path: "/python",
    element: () =>
      import("./pages/Python").then((module) => <module.default />),
    meta: {
      lang: 116,
      name: "Python",
    },
  },
  {
    path: "/csharp",
    element: () =>
      import("./pages/CSharp").then((module) => <module.default />),
    meta: {
      lang: 27,
      name: "C#",
    },
  },
  {
    path: "/cpp",
    element: () => import("./pages/CPP").then((module) => <module.default />),
    meta: {
      lang: 44,
      name: "C++",
    },
  },
  {
    path: "/clojure",
    element: () =>
      import("./pages/Clojure").then((module) => <module.default />),
    meta: {
      lang: 111,
      name: "Clojure",
    },
  },
  {
    path: "/fortran",
    element: () =>
      import("./pages/Fortran").then((module) => <module.default />),
    meta: {
      lang: 5,
      name: "Fortran",
    },
  },
  {
    path: "/go",
    element: () => import("./pages/Go").then((module) => <module.default />),
    meta: {
      lang: 114,
      name: "Golang",
    },
  },
  {
    path: "/java",
    element: () => import("./pages/Java").then((module) => <module.default />),
    meta: {
      lang: 10,
      name: "Java",
    },
  },
  {
    path: "/kotlin",
    element: () =>
      import("./pages/Kotlin").then((module) => <module.default />),
    meta: {
      lang: 47,
      name: "Kotlin",
    },
  },
  {
    path: "/nodejs",
    element: () =>
      import("./pages/NodeJS").then((module) => <module.default />),
    meta: {
      lang: 56,
      name: "NodeJS",
    },
  },
  {
    path: "/php",
    element: () => import("./pages/PHP").then((module) => <module.default />),
    meta: {
      lang: 29,
      name: "PHP",
    },
  },
  {
    path: "/perl",
    element: () => import("./pages/Perl").then((module) => <module.default />),
    meta: {
      lang: 54,
      name: "Perl",
    },
  },
  {
    path: "/r",
    element: () => import("./pages/R").then((module) => <module.default />),
    meta: {
      lang: 117,
      name: "R",
    },
  },
  {
    path: "/ruby",
    element: () => import("./pages/Ruby").then((module) => <module.default />),
    meta: {
      lang: 17,
      name: "Ruby",
    },
  },
  {
    path: "/scala",
    element: () => import("./pages/Scala").then((module) => <module.default />),
    meta: {
      lang: 39,
      name: "Scala",
    },
  },
  {
    path: "/swift",
    element: () => import("./pages/Swift").then((module) => <module.default />),
    meta: {
      lang: 85,
      name: "Swift",
    },
  },
  {
    path: "/typescript",
    element: () =>
      import("./pages/Typescript").then((module) => <module.default />),
    meta: {
      lang: 57,
      name: "Typescript",
    },
  },
];

const App: FC = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <Router location={location} routes={routes}>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </Router>
  );
};

export default App;
