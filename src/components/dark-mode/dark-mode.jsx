import "./dark-mode.css";

const DarkMode = (props) => {
  const { onToggleTheme, defaultDark } = props; // destructure

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => onToggleTheme(e.target.checked ? "dark" : "light")}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
