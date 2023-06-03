import { useState } from 'react';

import { SelectButton } from './Syles';

export default function SelectButtonFilter() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return <SelectButton active={active} onClick={handleClick} />;
}
