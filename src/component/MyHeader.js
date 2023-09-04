import { Link } from 'react-router-dom';
import './MyHeader.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const MyHeader =()=>{

return(
<div>
<div className="navbar">

<div className="nav-logo  border">
   <Link  to='/' >
   
   <h2 className="logo">All Books</h2></Link>
   
    
</div>



<div className="adress border">
   <Link to='page'>   <h1  class="add-first">USER BOOKS</h1>
   </Link>
    {/* <div class="add-icon">

        
        <p  class="add-second">india</p>
    </div> */}
</div>

<div className="nav-search">
    <select  class="search-select">
        <option>all</option>
    </select>

    <input   className="search-input" placeholder="search-amazon"/>
    <div classNaame="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
</div>

<div className="nav-login border">
<Link to='/register'><h3>hello, sign in</h3></Link>
{/* <p className="nav-second">Account & list</p> */}
</div>
{/* <div class="nav-return  border">
    <p><spaan>return</spaan></p>
    <p class="nav-second">& order</p>
</div> */}

<Link to="/Login" ><h2 class="nav-cart">
    
    Login
</h2>
</Link>

    </div>
    {/* <div className="panel">

    <div className="panel-all border">
        <i class="fa-solid fa-bars"></i>
        All
    </div>
    <div className="panel-option">
        <p className="border">todays  deal</p>
        <p  className="border">customer services</p>
        <p  className="border">gift cards</p>
        <p  className="border">sell</p>
    </div>

    <div class="paanel-deals border">shops deals in electronics</div>
</div> */}
    </div>
)

};

export default MyHeader;