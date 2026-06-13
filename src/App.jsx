import { useState } from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState("// Start coding here...");
  const [output, setOutput] = useState("Console Ready");
  const runCode = () => {
    if (language !== "JavaScript") {
      setOutput(
        `${language} execution will be available in the next version using Judge0 API.`,
      );
      return;
    }

    const logs = [];
    const originalLog = console.log;

    try {
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      eval(code);

      setOutput(logs.join("\n") || "Code executed successfully");
    } catch (error) {
      setOutput(error.toString());
    } finally {
      console.log = originalLog;
    }
  };
  const starterCode = {
    JavaScript: 'console.log("Hello Vish");',

    Python: 'print("Hello Vish")',

    "C++": `#include <iostream>
using namespace std;

int main() {
  cout << "Hello Vish";
  return 0;
}`,

    Java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Vish");
  }
}`,
  };
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    alert("Code Copied!");
  };
  const clearConsole = () => {
    setOutput("Console Cleared");
  };
  const downloadCode = () => {
    const extensions = {
      JavaScript: "js",
      Python: "py",
      Java: "java",
      "C++": "cpp",
    };

    const blob = new Blob([code], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `code.${extensions[language]}`;

    link.click();
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        language={language}
        setLanguage={(newLanguage) => {
          setLanguage(newLanguage);
          setCode(starterCode[newLanguage]);
        }}
        copyCode={copyCode}
        downloadCode={downloadCode}
        runCode={runCode}
        clearConsole={clearConsole}
      />
      <main className="p-4">
        <div className="grid h-[85vh] grid-cols-12 gap-4">
          {/* Sidebar */}
          <div className="col-span-2 row-span-2 rounded-2xl border border-gray-800 bg-[#0f0f0f]">
            <Sidebar />
          </div>

          {/* Editor Section */}
          <div className="col-span-8 rounded-2xl border border-gray-800 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{language} Editor</h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Ready
              </span>
            </div>

            <div className="h-[500px] overflow-hidden rounded-xl border border-gray-700">
              <CodeEditor code={code} setCode={setCode} language={language} />
            </div>
          </div>

          {/* Output */}
          <div className="col-span-2 row-span-2 rounded-2xl border border-gray-800 p-4 h-[600px]">
            <h2 className="mb-4 text-xl font-semibold">Terminal</h2>

            <div className="h-[70vh] whitespace-pre-wrap rounded-xl border border-gray-700 bg-[#0a0a0a] p-4 font-mono text-sm text-green-400">
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
