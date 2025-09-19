import { useDispatch, useSelector } from 'react-redux';
import FilterCard from '../../components/filterCard';
import * as S from './style';
import { RootReducer } from '../../store';
import { changeTerm } from '../../store/reducers/filter';

const SideBar = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <S.SearchBar
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <FilterCard criteria="group" caption="familia" />
          <FilterCard criteria="group" caption="amigos" />
          <FilterCard criteria="tag" caption="doutor" />
          <FilterCard criteria="tag" caption="veterinaria" />
          <FilterCard criteria="group" caption="trabalho" />
          <FilterCard criteria="all" caption="todos" />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
