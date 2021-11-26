import { FC, useState } from "react";
import { Link, useMatch, useNavigate } from "react-location";

import { routes } from "../App";
import { useStore } from "../shared/store";

import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface NavbarProps {
  runCode: () => void;
  compiling: boolean;
}

const Navbar: FC<NavbarProps> = ({ runCode, compiling }) => {
  const match = useMatch();
  const navigate = useNavigate();

  const {
    fontSize,
    setFontSize,
    tabSize,
    setTabSize,
    vimKeyboard,
    setVimKeyboard,
  } = useStore();

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            style={{ height: 50, width: "auto" }}
            src="https://cdn-icons-png.flaticon.com/512/876/876019.png"
            alt=""
          />
          <p className="hidden-on-mobile" style={{ fontSize: 30 }}>
            Editor Now
          </p>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <FormControl variant="standard" color="primary">
            <Select
              value={match.route.path}
              onChange={(e) => navigate({ to: e.target.value })}
            >
              {routes.map(
                (route) =>
                  route.path !== "/" && (
                    <MenuItem key={route.path} value={route.path}>
                      {(route.meta?.name as string) || ""}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SettingsIcon />}
            onClick={() => setModalOpened(true)}
          >
            Setting
          </Button>
          {!compiling ? (
            <Button
              onClick={runCode}
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
            >
              Run
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              startIcon={<CircularProgress size={20} color="inherit" />}
            >
              Compiling...
            </Button>
          )}
        </div>
      </div>
      <Dialog onClose={() => setModalOpened(false)} open={modalOpened}>
        <DialogTitle>Settings</DialogTitle>
        <div
          style={{
            width: "100vw",
            maxWidth: 300,
            padding: "0 25px 30px 25px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div>
            <Typography>Font size</Typography>
            <TextField
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              type="number"
              variant="standard"
            />
          </div>
          <div>
            <Typography>Tab size</Typography>
            <TextField
              value={tabSize}
              onChange={(e) => setTabSize(Number(e.target.value))}
              type="number"
              variant="standard"
            />
          </div>
          <div>
            <Typography>Keybindings</Typography>
            <FormControl variant="standard" color="primary">
              <Select
                value={Number(vimKeyboard)}
                onChange={(e) => setVimKeyboard(Boolean(e.target.value))}
              >
                <MenuItem value={0}>Normal</MenuItem>
                <MenuItem value={1}>Vim</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
