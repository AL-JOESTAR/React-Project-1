# 📚 React JS Learning Roadmap

Catatan belajar React JS dari pemula sampai siap membuat project.

---

## 🟢 1. React Fundamental

### Component

- [x] Memahami apa itu Component
- [x] Membuat Functional Component
- [x] Menggunakan Component di Component lain
- [x] Membuat Component yang reusable

### Props

- [x] Memahami apa itu Props
- [x] Mengirim data melalui Props
- [x] Mengakses Props
- [x] Menggunakan Props untuk membuat Component reusable

Contoh:

```jsx
function Card(props) {
  return (
    <div>
      <h2>{props.nama}</h2>
      <p>{props.pekerjaan}</p>
    </div>
  )
}
```

Penggunaan:

```jsx
<Card nama="Budi" pekerjaan="Programmer" />
```

### State

- [x] Memahami apa itu State
- [x] Memahami `useState`
- [x] Mengubah State dengan setter
- [x] Memahami re-render
- [x] State String
- [x] State Number
- [x] State Boolean
- [x] State Array
- [x] State Object

Contoh:

```jsx
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>
  {count}
</button>
```

---

## 🟢 2. Materi Berikutnya



### Conditional Rendering

- [ ] `if`
- [ ] Ternary Operator `? :`
- [ ] Logical AND `&&`
- [ ] Menampilkan Component berdasarkan State

Contoh:

```jsx
{isLogin ? <Dashboard /> : <Login />}
```

### Rendering List

- [ ] Memahami `.map()`
- [ ] Menampilkan Array ke UI
- [ ] Membuat Component dari data Array
- [ ] Memahami `key`
- [ ] Menggunakan `key` yang benar

Contoh:

```jsx
const users = [
  { id: 1, nama: "Budi" },
  { id: 2, nama: "Andi" }
]

{users.map((user) => (
  <Card
    key={user.id}
    nama={user.nama}
  />
))}
```

---

## 🟡 3. Event Handling

- [ ] `onClick`
- [ ] `onChange`
- [ ] `onSubmit`
- [ ] `onMouseEnter`
- [ ] Memahami Event Object
- [ ] Memahami Arrow Function
- [ ] Memahami Callback Function

Contoh:

```jsx
<button onClick={() => setCount(count + 1)}>
  Tambah
</button>
```

### Arrow Function

```js
const sayHello = () => {
  console.log("Hello")
}
```

Konsep:

```text
()  → Parameter
=>  → Arrow Function
{}  → Isi Function
```

---

## 🟡 4. Form

- [ ] Membuat Form
- [ ] Input
- [ ] `value`
- [ ] `onChange`
- [ ] `onSubmit`
- [ ] `event.preventDefault()`
- [ ] Controlled Component
- [ ] Form dengan beberapa Input
- [ ] Form Validation

Contoh:

```jsx
const [nama, setNama] = useState("")

<input
  value={nama}
  onChange={(event) => setNama(event.target.value)}
/>
```

---

## 🟡 5. State Lanjutan

- [ ] Menggunakan State Array
- [ ] Menggunakan State Object
- [ ] Update Array
- [ ] Update Object
- [ ] Menambah data ke Array
- [ ] Menghapus data dari Array
- [ ] Mengedit data dalam Array
- [ ] Lifting State Up
- [ ] Mengirim data Child → Parent

---

## 🟠 6. React Hooks

### useEffect

- [ ] Memahami `useEffect`
- [ ] Kapan `useEffect` digunakan
- [ ] Dependency Array
- [ ] `useEffect(() => {}, [])`
- [ ] Dependency `[state]`
- [ ] Cleanup Function

### useRef

- [ ] Memahami `useRef`
- [ ] Mengakses DOM
- [ ] Menyimpan nilai tanpa menyebabkan re-render

### useContext

- [ ] Memahami Context
- [ ] `createContext`
- [ ] `Provider`
- [ ] `useContext`

### Custom Hook

- [ ] Memahami Custom Hook
- [ ] Membuat Custom Hook
- [ ] Menggunakan Custom Hook

### Advanced Hooks

- [ ] `useReducer`
- [ ] `useMemo`
- [ ] `useCallback`

---

## 🟠 7. API

- [ ] Memahami HTTP
- [ ] Memahami REST API
- [ ] `fetch()`
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] Loading State
- [ ] Error Handling
- [ ] Fetch API dengan `useEffect`

### Alur API

```text
React
  ↓
useEffect
  ↓
fetch()
  ↓
API
  ↓
Data
  ↓
useState
  ↓
UI
```

---

## 🟠 8. React Router

- [ ] Install React Router
- [ ] Membuat Route
- [ ] `<Link>`
- [ ] `<NavLink>`
- [ ] Dynamic Route
- [ ] `useParams`
- [ ] `useNavigate`
- [ ] Nested Route
- [ ] Protected Route
- [ ] 404 Page

### Contoh Struktur

```text
/
├── /home
├── /about
├── /products
└── /products/:id
```

---

## 🔵 9. State Management

Pelajari secara bertahap:

- [ ] Local State
- [ ] Props
- [ ] Lifting State Up
- [ ] Context API
- [ ] Zustand
- [ ] Redux Toolkit

> 💡 Jangan langsung belajar Redux.
> Pahami dulu State, Props, Lifting State Up, dan Context.

---

## 🔵 10. Styling

- [ ] CSS Dasar
- [ ] Flexbox
- [ ] CSS Grid
- [ ] Responsive Design
- [ ] CSS Modules
- [ ] Tailwind CSS

---

# 🚀 11. Project Practice

## Project 1 — Counter

- [ ] `useState`
- [ ] `onClick`

---

## Project 2 — Todo List

- [ ] Component
- [ ] Props
- [ ] State
- [ ] Array
- [ ] `.map()`
- [ ] Event
- [ ] Form
- [ ] Add Todo
- [ ] Delete Todo
- [ ] Edit Todo
- [ ] Mark as Complete

---

## Project 3 — User Management

- [ ] Menampilkan User
- [ ] Tambah User
- [ ] Edit User
- [ ] Delete User
- [ ] Search User
- [ ] Filter User

---

## Project 4 — Product App

- [ ] Fetch API
- [ ] Loading
- [ ] Error
- [ ] Product List
- [ ] Product Detail
- [ ] Search
- [ ] Filter
- [ ] React Router

---

## Project 5 — Mini E-Commerce

- [ ] Product List
- [ ] Product Detail
- [ ] Cart
- [ ] Add to Cart
- [ ] Remove from Cart
- [ ] Quantity
- [ ] Login
- [ ] Authentication
- [ ] API
- [ ] State Management

---

# 🎯 Current Progress

Saat ini saya sedang fokus pada:

- [x] Component
- [x] Props
- [x] `useState`

### Selanjutnya:

- [ ] `children`
- [ ] Conditional Rendering
- [ ] `.map()`
- [ ] `key`
- [ ] Event Handling
- [ ] Form
- [ ] State Array
- [ ] State Object
- [ ] Lifting State Up

### Setelah Fundamental:

- [ ] `useEffect`
- [ ] Fetch API
- [ ] React Router
- [ ] Context
- [ ] Custom Hook
- [ ] State Management

---

# 📝 Learning Notes

> Jangan hanya mencentang materi setelah membaca atau menonton tutorial.

Gunakan aturan:

```text
Pahami Konsep
      ↓
Bisa Menjelaskan dengan Kata Sendiri
      ↓
Bisa Membuat Contoh Sederhana
      ↓
Bisa Membuat Tanpa Tutorial
      ↓
Centang ✅
```

### 🎯 Target Pertama

> Membuat **Todo List sederhana tanpa mengikuti tutorial**.

---

## 📌 Catatan Pribadi

### Materi yang sudah dipahami

- Component
- Props
- `useState`
- Arrow Function
- `onClick`

### Materi yang belum dipahami

Tulis catatan atau pertanyaan di sini.

```text
1.
2.
3.
```

### Error / Hal yang Perlu Dipelajari Lagi

```text
1.
2.
3.
```

---

# 📈 Progress

**React Fundamental**

`████░░░░░░ 40%`

> Progress akan diperbarui seiring materi yang sudah benar-benar dipahami.