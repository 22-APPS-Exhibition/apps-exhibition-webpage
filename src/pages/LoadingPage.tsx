import React, { useState } from "react";
import Airplane from "../components/common/Airplane";

export default function LoadingPage() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      Loading...
      <Airplane />
    </div>
  );
}
