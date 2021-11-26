import { FC, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useMatch } from "react-location";
import { COMPILER_SERVER, CORS_SERVER } from "../shared/constant";
import { useStore } from "../shared/store";

interface LayoutProps {
  editorValue: string;
}

const Layout: FC<LayoutProps> = ({ children, editorValue }) => {
  const match = useMatch();

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [compiling, setCompiling] = useState(false);

  const fontSize = useStore((state) => state.fontSize);

  const runCode = async () => {
    if (editorValue.trim() && match.route.meta?.lang) {
      try {
        setCompiling(true);
        setOutputValue("");

        const formData = new FormData();
        formData.append("code", editorValue);
        formData.append("lang", String(match.route.meta.lang));
        formData.append("codeInput", inputValue);

        const data = (
          await axios.post(`${CORS_SERVER}${COMPILER_SERVER}`, formData)
        ).data;

        const parser = new DOMParser();

        const doc = parser.parseFromString(data, "text/html");

        setOutputValue(doc?.body.textContent || "Something went wrong...");
        setCompiling(false);
      } catch (error) {
        console.log(error);

        setOutputValue("Something went wrong....");
        setCompiling(false);
      }
    }
  };

  return (
    <>
      <Navbar runCode={runCode} compiling={compiling} />
      <div className="container">
        <div className="editor-container">{children}</div>
        <div className="right-section">
          <div
            style={{
              height: "50%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="heading">Input</p>

            <textarea
              style={{ fontSize }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Execution Input"
            ></textarea>
          </div>
          <div
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <p className="heading">Output</p>

            <textarea
              style={{ fontSize }}
              value={outputValue}
              placeholder="Execution Output"
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
