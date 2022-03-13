
import './FirstSightPage.css'


export default function FirstSightPage() {
  return <div>
      <main id="int-wrapper">
        <div id="int-outline">
            <nav id="int-nav">
                <div class="logo">
                    <a href="index.html"><h2>PERSONAL DIARY</h2></a>
                </div>
                <div class="login">
                    <a href="../LoginPage/LoginPage" target="_blank"><h5>LOGIN/SIGN UP</h5></a>
                </div>
            </nav>
            <div class="jumbo">
                <h1>Every heart has something to say !</h1>
            </div>
        </div>
        <footer>
           <div class="container-fluid">
                <p>
                    &copy; Copyright 2021 <a href="no follow">RMKCET STUDENTS</a>  All rights reserved
                </p>
           </div>
        </footer>
    </main>
  </div>;
}
