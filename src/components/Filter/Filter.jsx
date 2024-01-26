import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/FilterSlice';

import css from '../../components/Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };
  return (
    <>
      <p className={css.filter_text}>Find contacts by name</p>
      <label className={css.Filter_Todo}>
        <input
          type="text"
          className={css.filter_inp}
          value={filterValue}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
};
export default Filter;