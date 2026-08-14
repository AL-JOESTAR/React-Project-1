function Dashbord () {
    return <h2>ini dashboard</h2>
}

function Kick () {
    return <h2>keluar kamu</h2>
}

function Condition (){
    const login = true
    const umur = 18
    // condition biasa
        // if (!login) {
        //     return <p>login dulu</p>
        // } else {
        //    return <p>silahkan masuk</p>
        // }
    

    return (
        <>
        <p>================ condition ===============</p>

            <p>
                {/* ternary oprator */}
                {umur >= 18 ? "boleh masuk" : "masih kecil"}
            </p>

            <p>
                {umur >= 18 && login == true ? <Dashbord/> : <Kick/>}
            </p>


        </>
    )
}

export default Condition