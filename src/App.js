import EffectExemplo from './EffectExemplo';
import React, { useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false)
  }, 5000);

    return visible && <EffectExemplo />;
  }


