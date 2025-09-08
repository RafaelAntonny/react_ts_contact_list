import FilterCard from '../../components/filterCard';
import * as S from './style';

const SideBar = () => (
  <S.Aside>
    <div>
      <S.SearchBar type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard active />
      </S.Filters>
    </div>
  </S.Aside>
);

export default SideBar;
