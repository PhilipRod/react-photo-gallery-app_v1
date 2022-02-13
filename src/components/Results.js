import React from 'react';


class Results extends React.Component{
    



    render(){
        const pics = this.props.photos;        

        return(
        <div className="photo-container">
            <h2>Results </h2>
            <ul>
                
                {
                    pics.map(photo=>(
                        <li key={photo.id}>
                            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${photo.title}`} />
                        </li>
                    ))
                }
                 
                

            </ul>
        </div>
        )
    }
}
export default Results;