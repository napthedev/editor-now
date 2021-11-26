import { FC } from "react";
import { Link } from "react-location";
import { routes } from "../App";

const Home: FC = () => {
  return (
    <div>
      {routes.map(
        (route) =>
          route.path !== "/" && (
            <div key={route.path}>
              <Link to={route.path}>{(route.meta?.name as string) || ""}</Link>
            </div>
          )
      )}
    </div>
  );
};

export default Home;
