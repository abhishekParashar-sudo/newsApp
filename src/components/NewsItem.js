import React from 'react'


const NewsItem = (props) => {

    let {title, description, imageUrl, url, author, time, source} = props;
    return (
      <div>
        <div className="row">
          <div className="col md-3">
          <div className="card" style={{width : "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left:"90%", zIndex:1}}>{source}</span></h5>
        <p className="card-text">{description}...</p>
        <small className="text-muted m-2 p-2">By {author} on {new Date(time).toGMTString()}</small>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary d-block" style={{backgroundColor : "black"}}>Read More</a>
      </div>
    </div>
          </div>

                 </div>
        </div>
    )
  }


export default NewsItem
