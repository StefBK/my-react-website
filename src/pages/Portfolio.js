import { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

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

    const nextPage = (page) => {
        setPage(page);
        console.log(page);
    }

    let [page, setPage] = useState(1);

    let [gallery, setGallery] = useState([]);

    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=" + page + "&limit=9")
            .then(response => response.json())
            .then(data => {
                setGallery(data);
                console.log(data);
            })
    }

    // useEffect(() => {
    //     loadJoke();
    //     loadPics();
    // }, []);

    useEffect(() => loadJoke, []);
    useEffect(() => loadPics, [page]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                        <button className="btn btn-info" onClick={loadJoke}>Chouk Maurice ?</button>
                        <p className="bg-dark text-info">{joke}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>
                <div className="row">
                    {
                        gallery.map((pic) => {
                            let source = `https://picsum.photos/id/${pic.id}/320/240`;
                            let title = `Picture by ${pic.author}`;
                            let id = pic.id;
                            let width = pic.width;
                            let height = pic.height;
                            let dim = { 'width': width, 'height': height }
                            return (
                                <Card key={id} id={id} source={source} title={title} dim={dim} />
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Portfolio;