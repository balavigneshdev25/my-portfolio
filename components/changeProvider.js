import React, { useState, useEffect } from "react";

const ChangingProgressProvider = ({ values, interval = 3000, children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < values.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, interval);

      return () => clearTimeout(timeout);
    }
  }, [index, values, interval]);

  return children(values[index]);
};

export default ChangingProgressProvider;
