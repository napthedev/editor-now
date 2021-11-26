import { FC, useState, useEffect } from "react";

import Layout from "../components/Layout";

import { useEditorConfig } from "../hooks/useEditorConfig";

import { CODE_EXAMPLES } from "../shared/constant";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";

const Go: FC = () => {
  const [editorValue, setEditorValue] = useState(
    localStorage.getItem("go-code") || CODE_EXAMPLES.Golang
  );

  useEffect(() => {
    localStorage.setItem("go-code", editorValue);
  }, [editorValue]);

  return (
    <Layout editorValue={editorValue}>
      <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
    </Layout>
  );
};

interface EditorProps {
  editorValue: string;
  setEditorValue: (state: string) => void;
}

const Editor: FC<EditorProps> = ({ editorValue, setEditorValue }) => {
  const configs = useEditorConfig();

  return (
    <AceEditor
      {...configs}
      value={editorValue}
      onChange={setEditorValue}
      mode="golang"
    />
  );
};

export default Go;
