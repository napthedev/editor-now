import { FC, useState, useEffect } from "react";

import Layout from "../components/Layout";

import { useEditorConfig } from "../hooks/useEditorConfig";

import { CODE_EXAMPLES } from "../shared/constant";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";

const PHP: FC = () => {
  const [editorValue, setEditorValue] = useState(
    localStorage.getItem("php-code") || CODE_EXAMPLES.PHP
  );

  useEffect(() => {
    localStorage.setItem("php-code", editorValue);
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
      mode="php"
    />
  );
};

export default PHP;
