import s from './Options.module.css';

const Options = ({ points, onUpdate, total, onReset }) => {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(points).map(item => {
          return (
            <li className={s.item} key={item}>
              <button className={s.btn} onClick={() => onUpdate(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {total > 0 && (
          <button className={s.btn} onClick={onReset}>
            reset
          </button>
        )}
      </ul>
    </div>
  );
};

export default Options;
