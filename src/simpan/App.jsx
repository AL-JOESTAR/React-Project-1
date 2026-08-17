import { useState } from 'react'
import './index.css'

function Card (props) { // ini dari return seperti dv,h2,p itu componen, isi dari h2,dan p namanya props 
  return (
    <div>
      <h2>Nama : {props.nama}</h2>
      <p>Pekerjaan : {props.pekerjaan}</p>
    </div>
  )
}

function Card2 ({ children }) { // wajib pakai {children} tidak bisa dirubah
  return (
    <div>
      {children}
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0) //state
  const [names, setNames] = useState(["budi", "Rusdi"]) //array state

  // =============== State Obejct ===================
  const [user, setUser] = useState({
        name : "Supri",
        Age : 21
      })
    

    const rubahNama = () => {
      setUser({
        ...user,
          name : "Bowo"
      })
    }
// ===============================================

    function addName() {
      setNames([...names, "joko"])
    }

    function Delete(){
      setNames(names.filter((nama) => nama !== "joko"))
    }


  return (
    <div>
      <Card nama= "Budi" pekerjaan = "Progamer"/>

      {/* ================================================ */}

      <button onClick={() => setCount (count + 1)}>Nilai = {count}</button>

      {/* ================================================ */}

      <Card2>
        <h2>Ini childern bro</h2>
      </Card2>

      {/* ============================================ */}
      <div>
        <button onClick={addName}>Ajak joko</button>
        
        {names.map((nama) => (
          <p key={nama} > {nama}</p>
        ))}
      </div>
      
      {/* ============================================== */}

      <div>
        <button onClick={Delete}>Tendang Budi</button>

        {names.map((nama) => (
          <p key={nama} > {nama}</p>
        ))}
      </div>

      {/* =============================================== */}
      <div>
        <h2>{user.name}</h2>
        <p>{user.Age}</p>
        
        <button onClick={rubahNama}>
          Rubah
        </button>
      </div>

    </div>
    
  )
}

export default App
