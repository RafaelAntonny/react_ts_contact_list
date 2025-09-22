import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { changeFilter } from '../../store/reducers/filter';
import * as S from './style';

export type Props = {
  caption: string;
  criteria: 'group' | 'tag' | 'all';
};

const FilterCard = ({ caption, criteria }: Props) => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootReducer) => state.filter);
  const contacts = useSelector((state: RootReducer) => state.contacts.items);
  const tags = useSelector((state: RootReducer) => state.tags.items);

  const isActive = () => {
    if (criteria === 'all') {
      return filter.criteria === 'all';
    }
    return filter.criteria === criteria && filter.caption === caption;
  };

  const countContacts = (): number => {
    if (criteria === 'all') return contacts.length;

    if (criteria === 'group' || criteria === 'tag') {
      return contacts.filter((item) =>
        item.tagIds.some((tagId) => {
          const tag = tags.find((t) => t.id === tagId);
          return tag && tag.kind === criteria && tag.label === caption;
        })
      ).length;
    }
    return 0;
  };

  const applyFilter = () => {
    dispatch(changeFilter({ criteria, caption }));
  };

  const $active = isActive();

  return (
    <S.Card $active={$active} onClick={applyFilter}>
      <S.Counter>{countContacts()}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  );
};

export default FilterCard;
