'use client';

import { useState } from 'react';

function ExpandableText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const result = !isExpanded ? text?.slice(0, text.length / 2) + '.....' : text;
  console.log(result);

  return (
    <div>
      <p onClick={() => setIsExpanded((expanded) => !expanded)}>{result}</p>
    </div>
  );
}

export default ExpandableText;
