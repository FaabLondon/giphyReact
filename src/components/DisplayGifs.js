import React from 'react';

//Display only component - no need for classical compoponent, just functional
const DisplayGifs = ({ gifs }) => {
  return(
    <main className="gifDisplay">
      {gifs.map((gif, i) =>
        <div key={i} className="card">
          <div className="card-image">
            <figure className="image">
              <img src={gif.images.fixed_width.url} alt={ gif.title }/>
            </figure>
          </div>
        </div>
      )}
    </main>
  );
};

export default DisplayGifs;
