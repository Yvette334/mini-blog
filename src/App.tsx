import Header from "./components/Header"
import PostList from "./components/PostList"


function App() {
  return (
    <div style={{fontFamily:'system-ui', minHeight:'100vh', backgroundColor:'lightgray' }}>
      <Header/>
      <PostList/>
    </div>
  )
}

export default App
