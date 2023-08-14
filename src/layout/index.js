import { Link } from "react-router-dom";

export default function Layout({children}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 
      <nav>
        <ul style={{display: 'flex'}}>
          <Link style={{ marginRight: '32px'}} to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
      <main>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}