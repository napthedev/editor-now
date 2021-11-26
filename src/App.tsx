import "nprogress/nprogress.css";
import NProgress from "nprogress";

import { Outlet, useRouter } from "react-location";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { FC, useMemo, useEffect } from "react";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

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

  const router = useRouter();

  useEffect(() => {
    if (router.pending) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [router.pending]);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
