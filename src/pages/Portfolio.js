import { useEffect, useState } from "react";

const Portfolio = () => {

    let [joke, setJoke] = useState('');

    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value);
                console.log(data);
            })
    }

    let [gallery, setGallery] = useState([]);

    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=2&limit=9")
            .then(response => response.json())
            .then(data => {
                setGallery(data);
                console.log(data);
            })
    }

    useEffect(() => {
        loadJoke();
        loadPics();
    }, []);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                        <button onClick={loadJoke}>Chouk Maurice ?</button>
                        <p className="bg-dark text-info">{joke}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        gallery.map((pic) => {
                            return (
                                <div key={pic.id} className="col-12 col-md-4">
                                    <div className="card">
                                        <img src={pic.download_url} className="img-fluid mb-3 m-md-0 card-img-top" alt={pic.author} />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Portfolio;