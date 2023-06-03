import { useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';

import { Container, Filter, Text, Button, Dropdown } from './Syles';

export default function CarouselEvents() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleTransitionEnd = () => {
    if (!dropdownVisible) {
      setDropdownVisible(false);
    }
  };

  return (
    <Container>
      <Filter>
        <Text>FILTROS</Text>
        <Button onClick={toggleDropdown}>
          <VscMenu size={50} color="rgba(81, 81, 81, 1)" />
        </Button>
      </Filter>

      {dropdownVisible && (
        <Dropdown
          className={dropdownVisible ? 'show' : ''}
          onTransitionEnd={handleTransitionEnd}
        >
          <Button>Nome</Button>
          <Button>Data</Button>
          <Button>Lugar</Button>
          <Button>Evento</Button>
          <Button>
            Documentos
            <IoIosArrowForward size={20} />
          </Button>
        </Dropdown>
      )}
    </Container>
  );
}
