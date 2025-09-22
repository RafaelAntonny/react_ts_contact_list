import { createSelector } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactClass from '../../models/Contact';
import { RootReducer } from '../../store';
import { editContact, removeContact } from '../../store/reducers/contacts';
import { Button } from '../../styles';
import * as S from './style';

type Props = ContactClass;

const Contact = ({
  id,
  name,
  tagIds = [],
  email: originalEmail,
  phoneNumber: originalPhone
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const makeSelectTagsByIds = (tagIds: number[]) =>
    createSelector(
      (state: RootReducer) => state.tags.items,
      (tags) => tags.filter((tag) => tagIds.includes(tag.id))
    );

  const selectTags = makeSelectTagsByIds(tagIds);
  const tagObjects = useSelector(selectTags);

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail);
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone);
    }
  }, [originalEmail, originalPhone]);

  function cancelEdit() {
    setIsEditing(false);
    setEmail(originalEmail);
    setPhone(originalPhone);
  }

  return (
    <S.Card $isEditing={isEditing}>
      <S.Name>{name}</S.Name>
      {tagObjects.map((tag) => (
        <S.Tag key={tag.label} label={tag.label} color={tag.color}>
          {tag.label}
        </S.Tag>
      ))}
      <S.Input
        disabled={!isEditing}
        $isEditing={isEditing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></S.Input>
      <S.Input
        disabled={!isEditing}
        $isEditing={isEditing}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></S.Input>
      <S.ActionBar>
        {isEditing ? (
          <>
            <Button
              $variant="success"
              onClick={() => {
                dispatch(
                  editContact({
                    id,
                    name,
                    tagIds,
                    email,
                    phoneNumber: phone
                  })
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </Button>
            <Button $variant="failure" onClick={cancelEdit}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <Button
              $variant="failure"
              onClick={() => dispatch(removeContact(id))}
            >
              Remover
            </Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
