import React from 'react';
import { Link } from 'react-router-dom';

const BookList = (props) => {
    const {bookName , author,imageURL ,price , _id} = props.book ;
    return (
        
            <>
                <div className="col-sm-8 col-md-4 mb-2 p-2 rounded-3">
                <div className="card" style={{borderRadius:'5px'}}>
                    <div className="bg-light">
                        <img style={{marginLeft: '70px'}} className="w-50 p-2 rounded-2" src={imageURL} alt=""/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{bookName}</h5>
                        <p className="card-text"><span className="text-warning">author:</span> {author}</p>
                        <div className="row">
                            <div className="col-6">
                                <h4>${price}</h4>
                            </div>
                            <div className="col-6">
                            <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary w-75">buy now</button>
                            </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
        

    );
};

export default BookList;