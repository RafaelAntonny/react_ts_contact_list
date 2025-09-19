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
  const { filter, contacts } = useSelector((state: RootReducer) => state);

  const isActive = () => {
    const activeCriteria = filter.criteria === criteria;
    const activeCaption = filter.caption === caption;

    return activeCriteria && activeCaption;
  };

  const countContacts = (): number => {
    if (criteria === 'all') return contacts.items.length;

    if (criteria === 'group') {
      return contacts.items.filter((item) =>
        item.tags.some((tag) => tag.kind === 'group' && tag.label === caption)
      ).length;
    }

    if (criteria === 'tag') {
      return contacts.items.filter((item) =>
        item.tags.some((tag) => tag.kind === 'tag' && tag.label === caption)
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
