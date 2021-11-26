import { useStore } from "../shared/store";

export const useEditorConfig = () => {
  const fontSize = useStore((state) => state.fontSize);
  const tabSize = useStore((state) => state.tabSize);
  const vimKeyboard = useStore((state) => state.vimKeyboard);

  const editorConfig = {
    fontSize,
    style: { flexGrow: 1, width: "100%" },
    theme: "one_dark",
    name: "editor",
    showGutter: true,
    highlightActiveLine: true,
    setOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableMultiselect: true,
      showLineNumbers: true,
      showPrintMargin: false,
      tabSize: tabSize,
    },
    keyboardHandler: vimKeyboard ? "vim" : "",
  };

  return editorConfig;
};
