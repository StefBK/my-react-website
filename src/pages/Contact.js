import React from "react";

class Contact extends React.Component {

    constructor(props){
        super(props);
        alert('This is a constructor');
    }

    componentWillMount(){
        console.log("componentWillMount !!!");
    }

    componentDidMount(){
        console.log("componentDidMount !!!");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount !!!");
    }

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. {this.props.bidule}</p>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Contact;