import { useState } from 'react';
import * as S from './style';

type Tag = {
  label: string;
  color?: string;
};

type Props = {
  name: string;
  tags: Tag[];
  email: string;
  phoneNumber: string;
};

const Contact = ({ name, tags = [], email, phoneNumber }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <S.Card>
      <S.Name>{name}</S.Name>
      {tags.map((tag, idx) => (
        <S.Tag key={idx} label={tag.label} color={tag.color}>
          {tag.label}
        </S.Tag>
      ))}
      <S.Info>{email}</S.Info>
      <S.Info>{phoneNumber}</S.Info>
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.Button variant="success">Salvar</S.Button>
            <S.Button variant="failure" onClick={() => setIsEditing(false)}>
              Cancelar
            </S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.Button variant="failure">Remover</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
