function Map (){
const fruits = ["Apel", "Mangga", "Jeruk"];

const users = [
  { id: 1, nama: "Budi" },
  { id: 2, nama: "Andi" }
]

const products = [
    {id : 1, product : "laptop", price : 15000000},
    {id : 1, product : "Iphone", price : 15000000},
    {id : 1, product : "motor", price : 15000000}
]


    return(
        <>
            <p>======================== MAP =======================</p>
            <p>======================== FRUIT =======================</p>
            
            <div>
                {fruits.map((fruit) => (
                    <p>{fruit}</p>
                ))}
            </div>
            <p>======================== USER =======================</p>
            <div>
                {users.map((user) => (
                    <p>{user.nama}</p>
                ))}
            </div>
            <p>======================== PRODUCT =======================</p>
            <div>
                {products.map((product)=>(
                    <div key={product.id}>
                        <p>{product.product}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Map