import css from './statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css.statList}>
                {stats.map(statsItem => <li className={css.item} key={statsItem.id}>
                    <span className={css.label}>{statsItem.label}</span>
                    <span className={css.percentage}>{statsItem.percentage}%</span>
                </li>
                )}
          </ul>
        </section>
    )
}