import React, { useState } from 'react';
import { PetItemStyle } from './styles';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ModalAccess from '../ModalAccess';


const PetItem = ({ pet }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalAccess, setModalAccess] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const handleClick = () => {
    setModalAccess(true);
  }

  return (
    <PetItemStyle>
      <div className="pet-header" onClick={toggleExpand}>
        <Image
          unoptimized
          height={60}
          width={60}
          style={{ borderRadius: '10px', border: 'solid 3px #556270' }}
          src='https://conteudo.imguol.com.br/c/entretenimento/e4/2020/11/18/pets-no-mato-1605715705944_v2_900x506.jpg'
          alt={`${pet.name}`} className="pet-avatar"
        />
        <span className='pet-name'>{pet.name}</span>
        <div className="button-arrow">
          <button style={{ background: 'none', border: 'none' }}>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</button>
        </div>
      </div>
      {isExpanded && (
        <div className="access-list">
          <p>teadasdasd</p>
          {/* {pet.accesses.map((access: any) => (
            <div className='access-item'>
              <img src={access.userImage} alt={access.userName} className="user-avatar" />
              <span>{access.userName}</span>
              <button>{access.permission}</button>
            </div>
          ))} */}
          <button className="new-access-button" onClick={handleClick}>Novo Acesso</button>
        </div>
      )}
      <ModalAccess isOpen={modalAccess} onClose={setModalAccess as any} pet={pet}/>
    </PetItemStyle>
  );
};

export default PetItem;
