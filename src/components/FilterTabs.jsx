function FilterTabs({ tabs, active, onTabChange }) {
  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`filter-tab ${active === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
