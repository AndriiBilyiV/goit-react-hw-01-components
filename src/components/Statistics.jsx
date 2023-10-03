export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}
            <ul className="stat-list">
                {stats.map( statsItem =>  <li className="item" key={statsItem.id}>
                    <span className="label">{statsItem.label}</span>
                    <span className="percentage">{statsItem.percentage}%</span>
                </li>
                )}
          </ul>
        </section>
    )
}