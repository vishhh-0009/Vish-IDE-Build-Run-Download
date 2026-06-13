import { FolderOpen, NotebookPen, Star, Settings } from "lucide-react";

function Sidebar() {
  const items = [
    {
      icon: <FolderOpen size={18} />,
      name: "Files",
    },
    {
      icon: <NotebookPen size={18} />,
      name: "Notes",
    },
    {
      icon: <Star size={18} />,
      name: "Snippets",
    },
    {
      icon: <Settings size={18} />,
      name: "Settings",
    },
  ];

  return (
    <div className="h-full bg-[#0b0b0b] p-4">
      <h2 className="mb-6 text-lg font-bold text-white">Workspace</h2>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.name}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all hover:bg-blue-500/10 hover:text-blue-400"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-gray-800 bg-[#111] p-4">
        <p className="text-xs text-gray-400">Vish IDE v1.0</p>

        <p className="mt-2 text-sm text-gray-300">
          Frontend Developer Workspace
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
