import { useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';

import { SelectButtonFilter } from '../../common';
import {
  Container,
  DivFilter,
  Filter,
  Text,
  Button,
  DivDropdown,
  Dropdown,
  DocumentDropdown,
  DropdownRow,
  TextDropdown,
} from './Styles';

export default function CarouselEvents() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [documentDropdownVisible, setDocumentDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setDocumentDropdownVisible(false);
    setSelectedFilter(null);
  };

  const toggleDocumentDropdown = () => {
    setDocumentDropdownVisible(!documentDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
    setSelectedFilter(null);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <Container>
      <DivFilter>
        <Filter>
          <Text>FILTROS</Text>
          <Button onClick={toggleDropdown}>
            <VscMenu size={50} color="rgba(81, 81, 81, 1)" />
          </Button>
        </Filter>
      </DivFilter>

      <DivDropdown>
        {dropdownVisible && (
          <Dropdown className={dropdownVisible ? 'show' : ''}>
            <Button onClick={closeDropdown}>Nome</Button>
            <Button onClick={closeDropdown}>Data</Button>
            <Button onClick={closeDropdown}>Lugar</Button>
            <Button onClick={closeDropdown}>Evento</Button>
            <Button onClick={toggleDocumentDropdown}>
              Documentos
              <IoIosArrowForward size={20} />
            </Button>
          </Dropdown>
        )}

        {dropdownVisible && documentDropdownVisible && (
          <DocumentDropdown className={documentDropdownVisible ? 'show' : ''}>
            <DropdownRow>
              <SelectButtonFilter
                active={selectedFilter === 'Vídeos'}
                onClick={() => handleFilterClick('Vídeos')}
              />
              <TextDropdown>Vídeos</TextDropdown>
            </DropdownRow>

            <DropdownRow>
              <SelectButtonFilter
                active={selectedFilter === 'Fotografias'}
                onClick={() => handleFilterClick('Fotografias')}
              />
              <TextDropdown>Fotografias</TextDropdown>
            </DropdownRow>

            <DropdownRow>
              <SelectButtonFilter />
              <TextDropdown
                active={selectedFilter === 'Depoimentos'}
                onClick={() => handleFilterClick('Depoimentos')}
              >
                Depoimentos
              </TextDropdown>
            </DropdownRow>

            <DropdownRow>
              <SelectButtonFilter />
              <TextDropdown>Documentos escritos</TextDropdown>
            </DropdownRow>
          </DocumentDropdown>
        )}
      </DivDropdown>
    </Container>
  );
}
