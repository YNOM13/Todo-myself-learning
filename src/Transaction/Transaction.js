export default function Transaction({trans:{date,value,comment}}) {
    return(
        <div >
            {(+value)>0?

                <div style={{background:'green', padding:'20px', display:'flex',justifyContent:'space-around', color:'white'}}>
                    <p>{date}</p>
                    <p>{value}$</p>
                    <p>{comment}</p>
                </div>
                :
                <div style={{background:'red', padding:'20px', display:'flex',justifyContent:'space-around', color:'white'}}>
                    <p>{date}</p>
                    <p>{value}$</p>
                    <p>{comment}</p>
                </div>
            }



        </div>
    )
}