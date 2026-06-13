function Navbar({
  language,
  setLanguage,
  copyCode,
  downloadCode,
  runCode,
  clearConsole,
}) {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 bg-[#0b0b0b] px-6 py-4">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold tracking-wide">Vish IDE</h1>

        <p className="text-sm text-gray-400">Build • Learn • Create</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-400">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          Ready
        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-lg border border-gray-700 bg-[#111] px-4 py-2 outline-none transition hover:border-blue-500"
        >
          <option>JavaScript</option>
          <option>Python</option>
          <option>C++</option>
          <option>Java</option>
        </select>

        <button
          onClick={copyCode}
          className="rounded-lg border border-gray-700 bg-[#111] px-4 py-2 transition hover:border-blue-500"
        >
          Copy
        </button>

        <button
          onClick={downloadCode}
          className="rounded-lg border border-gray-700 bg-[#111] px-4 py-2 transition hover:border-blue-500"
        >
          Download
        </button>

        <button
          onClick={clearConsole}
          className="rounded-lg border border-gray-700 bg-[#111] px-4 py-2 transition hover:border-red-500"
        >
          Clear
        </button>
        <button
          onClick={runCode}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500"
        >
          ▶ Run
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
