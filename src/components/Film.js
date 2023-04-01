import React, { Component } from 'react';

class Film extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    this.loadFilms();
  }

  async loadFilms() {
    // Реалізація запиту для отримання списку фільмів
    // ...

    const films = this.setState({ films });

    // Асинхронне завантаження зображень для фільмів
    await this.loadImages();
  }

  async loadImages() {
    const films = this.state.films;

    for (let i = 0; i < films.length; i++) {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${films[i].id}?api_key=d13079a71498c910a26b40b4d3d05542`);
      const data = await response.json();
      const posterPath = data.poster_path;
      const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

      films[i].imageUrl = imageUrl;
    }

    this.setState({ films });
  }

  render() {
    const filmsList = this.state.films.map((film) => (
      <div key={film.id}>
        <img src={film.imageUrl} alt={film.title} />
        <h2>{film.title}</h2>
        <p>{film.overview}</p>
      </div>
    ));

    return (
      <div>
        {filmsList}
      </div>
    );
  }
}

export default Film;
