export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-luxuryDark p-4 h-screen flex flex-col">
      <h2 className="text-lg font-bold text-luxuryGold">Main Menu</h2>
      <ul className="flex flex-col gap-5 pt-8">
        <li>Home</li>
        <li>Categories</li>
        <li>Settings</li>
      </ul>
      <button className="mt-auto block text-luxuryGold align-bottom">
        Log Out
      </button>
    </div>
  );
};
