import s from './Feedback.module.css';

const Feedback = ({ statistics, total, positive }) => {
  return (
    <div>
      <ul className={s.list}>
        {statistics.map(([key, value]) => {
          return (
            <li className={s.item} key={key}>
              {key} : {value}
            </li>
          );
        })}
      </ul>

      <p className={s.item}>Total points: {total}</p>

      <p className={s.item}>Positive: %{positive} </p>
    </div>
  );
};

export default Feedback;
