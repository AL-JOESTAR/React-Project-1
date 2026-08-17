function Event () {
    const nama = (saya) => {
        console.log(`halo saya ${saya}`)
    }

    const hello = () => {
        console.log("hai broo")
    }

    return (
    <>
        <div onMouseEnter={hello}>coba sini</div>

        <div>
            <button onClick={() => nama("anton")}>klik saya</button>
        </div>
    </>
    )   
}

export default Event