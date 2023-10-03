import css from './TransactionHistory.module.css'

const Transaction = ({ transaction }) => {

    return (
         <tr>
            <td className={css.singleRow}>{transaction.type}</td>
            <td className={css.singleRow}>{transaction.amount}</td>
            <td className={css.singleRow}>{transaction.currency}</td>
        </tr>
    )
}

export const TransactionHistory = ({item}) => {
    return (
    <table className={css.transactionHistory}>
      <thead>
          <tr>
          <th className={css.headRow}>Type</th>
          <th className={css.headRow}>Amount</th>
          <th className={css.headRow}>Currency</th>
        </tr>
      </thead>
    
      <tbody>
                {item.map(payment => {
                    return (<Transaction transaction={payment} key={payment.id} />)
                }
                )}
      </tbody>
        </table>
    )
}