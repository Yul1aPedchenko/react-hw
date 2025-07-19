export const Statistics = ({stats}) => [
  <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
      {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
];
