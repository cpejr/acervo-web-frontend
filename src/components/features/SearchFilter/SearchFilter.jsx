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
  const documentDropDownOptions = [
    'Vídeos',
    'Fotografias',
    'Depoimentos',
    'Documentos escritos',
  ];
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
          <Dropdown show={dropdownVisible}>
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
          <DocumentDropdown show={documentDropdownVisible}>
            {documentDropDownOptions.map((option) => (
              <DropdownRow key={option}>
                <SelectButtonFilter
                  active={selectedFilter === option}
                  onClick={() => handleFilterClick(option)}
                />
                <TextDropdown>{option}</TextDropdown>
              </DropdownRow>
            ))}
          </DocumentDropdown>
        )}
      </DivDropdown>
    </Container>
  );
}
