import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddButton from '../../components/addButton';
import FilterCard from '../../components/filterCard';
import { RootReducer } from '../../store';
import { changeTerm } from '../../store/reducers/filter';
import { Button, TextField } from '../../styles';
import * as S from './style';

type Props = {
  $showFilters: boolean;
};

const SideBar = ({ $showFilters }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);
  const tags = useSelector((state: RootReducer) => state.tags.items);

  return (
    <S.Aside>
      <div>
        {$showFilters ? (
          <>
            <TextField
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
            <S.Filters>
              {tags.map((tag) => (
                <FilterCard
                  key={tag.id}
                  caption={tag.label}
                  criteria={tag.kind}
                />
              ))}
              <FilterCard criteria="all" caption="Todos" />
            </S.Filters>
            <div>
              <AddButton />
            </div>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Voltar para a lista
          </Button>
        )}
      </div>
    </S.Aside>
  );
};

export default SideBar;
