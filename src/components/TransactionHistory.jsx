const Transaction = ({transaction}) => {

    return (
         <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    )
}

export const TransactionHistory = ({item}) => {
    return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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