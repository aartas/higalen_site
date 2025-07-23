import { Button } from "antd";

// src/components/ThemeToggle.js
const  ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
      <Button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded mb-4 bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Theme
      </Button>
    );
  }
  

  export default ThemeToggle;