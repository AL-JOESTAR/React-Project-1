function Condition (){
    const login = true
    const umur = 17
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
                {umur >= 18 && login == true ? "dashboard" : "keluar lu bocah"}
            </p>

        </>
    )
}

export default Condition