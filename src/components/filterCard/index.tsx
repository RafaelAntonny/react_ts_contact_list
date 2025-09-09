import * as S from './style';

export type Props = {
  active?: boolean;
  counter: number;
  caption: string;
};

const FilterCard = ({ active, counter, caption }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{caption}</S.Label>
  </S.Card>
);

export default FilterCard;
