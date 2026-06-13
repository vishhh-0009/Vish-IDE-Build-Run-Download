import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }) {
  return (
    <Editor
      height="75vh"
      language={language.toLowerCase()}
      value={code}
      onChange={(value) => setCode(value || "")}
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
