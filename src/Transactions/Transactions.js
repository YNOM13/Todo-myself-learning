import Transaction from "../Transaction/Transaction";

export default function Transactions({transaction}) {
    return (
        <>
            {transaction.map(i=><Transaction key={i.id} trans={i}/>)}
        </>
    )
}