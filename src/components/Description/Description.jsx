import s from './Description.module.css';

const Description = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
