export default function TabNavButton({ name, type, activeTab, setActiveTab }) {
  return (
    <>
      <li
        id={`${type}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${type}-tab-pane`}
        className="nav-item"
        role="presentation"
      >
        <button
          className={`nav-link ${type === activeTab ? 'active' : ''} `}
          onClick={() => {
            setActiveTab(type);
          }}
        >
          {name}
        </button>
      </li>
    </>
  );
}
