// import logo from './logo.svg';
import banner from './julia-banner.jpg';
// import banner from './julia-banner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src={banner} className="profile-banner" alt="banner" />
            {/* <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
            <div className="container">
                <a href="/" class="profilepic">
                    <img src="/profilepic.jpg" alt="profilepic" />
                </a>
                <h1>Welcome to MyDearestJulia.com!</h1>
                <p>Welcome all to my home page where I include information that I talk about in my youtube channel and more.</p>
            </div>

            <div class="container">
                <div class="alert alert-info text-center" role="alert">
                    Thank you for visiting my webpage, it is currently under construction but I hope to have it up to date soon! in the meantime, please feel free to visit my youtube channel at <a href="https://www.youtube.com/channel/UC30zl6laoBlAyBnYHMN7NNg" class="alert-link">Mydearestjulia on youtube.</a>
                </div>
                <hr />

                <div class="row">
                    <div class="col-md-6">
                        <h3><span class="glyphicon glyphicon-info-sign"></span> Gift guides for him</h3>
                        <ul>
                            <li>Men's gift guide *Month-Aversary*, Easy DIY ideas <a href="https://www.youtube.com/watch?v=W_VwAwL4zQw&list=PL-vVndkbFM2RMzGuZIZAYJmVNiAMNqpz0&index=1">Month-Aversary youtube video</a></li>

                            <li>Valentine's Day gift ideas for him, 2021 <a href="https://www.youtube.com/watch?v=XI4eiNI6aM0&list=PL-vVndkbFM2RMzGuZIZAYJmVNiAMNqpz0&index=2&t=9s">Valentine's Day youtube video</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6">
                        <h3><span class="glyphicon glyphicon-info-sign"></span> Next Steps</h3>
                        <ul>
                            <li>While my page is still under construction I am still looking to bring content to both my website and channel that I think everyone will enjoy.</li>
                            <li>In the meantime please feel free to leave messages on my videos to let me know what you think and what you would like to see in the future as I am always looking for feedback so that I can deliver a a wonderful and helpful experience to you all.</li>
                        </ul>
                        <h3><span class="glyphicon glyphicon-link"></span> Helpful Links</h3>
                        <ul>
                            <li>Will work to add links with content and info everyone might like.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    </div>
  );
}

export default App;
