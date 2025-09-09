import FilterCard from '../../components/filterCard';
import * as S from './style';

const SideBar = () => (
  <S.Aside>
    <div>
      <S.SearchBar type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard caption="familia" counter={3} />
        <FilterCard caption="amigos" counter={6} />
        <FilterCard caption="doutor" counter={1} />
        <FilterCard caption="advogado" counter={1} />
        <FilterCard caption="trabalho" counter={4} />
        <FilterCard active caption="todos" counter={11} />
      </S.Filters>
    </div>
  </S.Aside>
);

export default SideBar;
