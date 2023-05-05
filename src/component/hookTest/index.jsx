import React, { useState, useEffect } from "react";

export default function HookTest() {
  const [data, setData] = useState(0);
  const loadData = () => setTimeout(() => setData(data + 1), 1000);

  useEffect(() => loadData(), []);
  // loadData();
  return (
    <div className="h1">
      {data}
      {console.log("Render")}
    </div>
  );
}
