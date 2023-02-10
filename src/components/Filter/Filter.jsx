import shortid from 'shortid';
import { FilterName, FilterStyle } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const nameInputIdThird = shortid.generate();

  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(change(e.target.value));
  };

  return (
    <div>
      <FilterStyle htmlFor={nameInputIdThird}>
        Find contacts by name
      </FilterStyle>
      <FilterName
        id={nameInputIdThird}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};