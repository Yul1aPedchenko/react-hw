import s from './Statistics.module.scss';

export const Statistics = ({stats}) => [
  <section className={s.stat}>
    <h2 className={s.stat__title}>Upload stats</h2>
    <ul className={s.stat__list}>
      {stats.map((stat) => (
          <li className={s.stat__item} key={stat.id}>
            <span className={s.stat__label}>{stat.label}</span>
            <span className={s.stat__prc}>{stat.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
];
