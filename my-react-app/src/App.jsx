import React from "react";

const Button = (props) => {
  const { children, variant } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-200 min-h-screen items-center">
      <div className="flex gap-x-3"></div>
      <Button variant="bg-red-500">Click me</Button>
    </div>
  );
}

export default App;
