import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ContactClass from '../../models/Contact';
import { edit, remove } from '../../store/reducers/contacts';
import * as S from './style';

type Props = ContactClass;

const Contact = ({
  id,
  name,
  tags = [],
  email: originalEmail,
  phoneNumber: originalPhone
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
    <S.Card>
      <S.Name>{name}</S.Name>
      {tags.map((tag) => (
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
            <S.Button
              $variant="success"
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    tags,
                    email,
                    phoneNumber: phone
                  })
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </S.Button>
            <S.Button $variant="failure" onClick={cancelEdit}>
              Cancelar
            </S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.Button $variant="failure" onClick={() => dispatch(remove(id))}>
              Remover
            </S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Contact;
