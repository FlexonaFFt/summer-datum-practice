import React from "react";

const posts = [
  {
    id: 1,
    title: "Первый пост",
    content: "Это содержание первого поста.",
  },
  {
    id: 2,
    title: "Второй пост",
    content: "Это содержание второго поста.",
  },
  // Добавьте больше постов здесь
];

function Posts() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
