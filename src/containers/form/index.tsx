import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootReducer } from '../../store';
import { createContact } from '../../store/reducers/contacts';
import { createTag } from '../../store/reducers/tags';
import { Button, MainContainer, TextField, Title } from '../../styles';
import theme from '../../styles/theme';
import * as s from './style';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: RootReducer) => state.contacts.items);
  const tags = useSelector((state: RootReducer) => state.tags.items);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [selectedTag, setSelectedTag] = useState<number[]>([]);
  const [customTag, setCustomTag] = useState('');
  const [customTagColor, setCustomTagColor] = useState(theme.work);
  const [customTagKind, setCustomTagKind] = useState<'group' | 'tag'>('tag');

  const registerContact = (event: FormEvent) => {
    event.preventDefault();

    let contactTagIds = [...selectedTag];

    if (selectedTag.includes(-1) && customTag.trim() !== '') {
      const newTagId = Math.max(...tags.map((t) => t.id)) + 1;
      const newTag = {
        id: newTagId,
        label: customTag,
        color: customTagColor,
        kind: customTagKind,
        contactIds: []
      };

      dispatch(createTag(newTag));

      contactTagIds = contactTagIds.filter((id) => id !== -1).concat(newTagId);
    }

    const newContactId =
      contacts.length > 0 ? Math.max(...contacts.map((c) => c.id)) + 1 : 1;

    const newContact = {
      id: newContactId,
      name,
      email,
      phoneNumber: telephone,
      tagIds: contactTagIds
    };

    dispatch(createContact(newContact));
    navigate('/');
  };

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <s.Form onSubmit={registerContact}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <TextField
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <s.Tags>
          <p>Tags</p>
          {tags
            .filter((tag) =>
              ['Família', 'Amigos', 'Trabalho'].includes(tag.label)
            )
            .map((tag) => (
              <s.Tag key={tag.id}>
                <input
                  type="checkbox"
                  id={`tag-${tag.id}`}
                  value={tag.id}
                  checked={selectedTag.includes(tag.id)}
                  onChange={() =>
                    setSelectedTag((prev) =>
                      prev.includes(tag.id)
                        ? prev.filter((id) => id !== tag.id)
                        : [...prev, tag.id]
                    )
                  }
                />
                <label htmlFor={`tag-${tag.id}`}>{tag.label}</label>
              </s.Tag>
            ))}

          <s.Tag>
            <input
              type="checkbox"
              id="tag-other"
              checked={selectedTag.includes(-1)}
              onChange={() =>
                setSelectedTag((prev) =>
                  prev.includes(-1)
                    ? prev.filter((id) => id !== -1)
                    : [...prev, -1]
                )
              }
            />
          </s.Tag>
          <label htmlFor="tag-other">Outro</label>
          {selectedTag.includes(-1) && (
            <>
              <div>
                <TextField
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value)}
                  placeholder="Digite sua tag"
                />
                <input
                  type="color"
                  value={customTagColor}
                  onChange={(e) => setCustomTagColor(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="customTagKind"
                    value="group"
                    checked={customTagKind === 'group'}
                    onChange={() => setCustomTagKind('group')}
                  />
                  Grupo
                </label>
                <label>
                  <input
                    type="radio"
                    name="customTagKind"
                    value="tag"
                    checked={customTagKind === 'tag'}
                    onChange={() => setCustomTagKind('tag')}
                  />
                  Tag
                </label>
              </div>
            </>
          )}
        </s.Tags>
        <Button $variant="success" type="submit">
          Cadastrar
        </Button>
      </s.Form>
    </MainContainer>
  );
};

export default Form;
