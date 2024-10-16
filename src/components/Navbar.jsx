
export default function Navbar({setCategory}) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " >
  <div className="container-fluid">
    <a className="navbar-brand badge text-bg-secondary fs-4" href="#">PocketPaper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <button className="nav-link" href="#" onClick={()=>
            setCategory("technology")
          }>Technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#" onClick={()=>
            setCategory("business")
          }>Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#" onClick={()=>
            setCategory("health")
          }>Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#" onClick={()=>
            setCategory("sports")
          }>Sports</button>
        </li>
        
        <li className="nav-item">
          <button className="nav-link" href="#" onClick={()=>
            setCategory("entertainment")
          }>Entertainment</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           country
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown" href="#">India</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



     
      
    </div>
  )
}
