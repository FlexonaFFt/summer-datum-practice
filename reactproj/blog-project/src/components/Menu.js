import React from "react";

function Menu() {
  return (
    <div className="flex justify-center space-x-4 py-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
        Главная
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
        Профиль
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
        Новый пост
      </button>
    </div>
  );
}

export default Menu;
