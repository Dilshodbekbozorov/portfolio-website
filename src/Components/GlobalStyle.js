import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;1,600&family=Poppins:wght@400;600;700&family=Silkscreen&display=swap');

  :root {
  --primary-color: #a855f7;
  --primary-color-dark: #9333ea;
  --secondary-color: #ca8a04;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --extra-light: #faf5ff;
  --max-width: 1200px;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

a {
    text-decoration: none;
  }

body {
    font-family: 'Poppins', sans-serif;
  }

nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 99;
  }

.nav__content {
    max-width: var(--max-width);
    margin: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

nav .logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
    transition: all.3s;
  }

nav .logo a:hover {
    color: var(--primary-color-dark);
  }

nav .checkbox {
  display: none;
}

nav input {
  display: none;
}

nav .checkbox i {
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
}

ul {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  transition: left 0.3s;
}

ul li a {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  text-decoration: none;
  font-weight: 600;
  color: var(--text-dark);
  transition: 0.3s;
}

ul li a:hover {
  border-top-color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
  color: var(--secondary-color);
}

#darkBtn:hover {
  border-top-color: #fff;
  border-bottom-color: #fff;
  color: var(--secondary-color);
}

.section {
  background-color: var(--extra-light);
}

.section__container {
  min-height: 95vh;
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  letter-spacing: 2px;
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.title span {
  font-weight: 600;
}

.description {
  line-height: 1.5rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.action__btns {
  display: flex;
  gap: 1rem;
}

.action__btns button {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}

.action__btns .cv {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}

.hire__me {
  background-color: var(--primary-color);
  color: #ffffff;
}

.hire__me:hover {
  background-color: var(--primary-color-dark);
}

.resume {
  color: var(--primary-color);
}

.resume:hover {
  background-color: var(--primary-color-dark);
  color: #ffffff;
}

.image {
  display: grid;
  place-items: center;
}

.image img {
  width: min(25rem, 90%);
  border-radius: 100%;
}

// portfolio styles

.portfolio__container {
  min-height: 95vh;
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  padding-top: 6rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.cards .card img {
  width: min(8rem, 90%);
  border-radius: 10px;
}

.card {
  text-align: center;
  padding: 0.5rem;
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);
  border-radius: 15px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 30%);
}

// contact styles




// footer styles
.footer {
  display: flex;
  position: relative; 
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
  color: var(--text-light);
  background-color: var(--extra-light);
}


//responsive

@media (width < 750px) {
  nav .checkbox {
    display: block;
  }

  ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 85px);
    left: -100%;
    top: 85px;
    background-color: var(--extra-light);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  nav #check:checked ~ ul {
    left: 0;
  }

  ul li a {
    font-size: 1.25rem;
  }

  .section__container {
    padding: 10rem 1rem 5rem 1rem;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }

  .image {
    grid-area: 1/1/2/2;
  }

  .action__btns {
    margin: auto;
  }

  .portfolio__container .cards  {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 414px) {
  .portfolio__container .cards  {
    grid-template-columns: repeat(1, 1fr);
  }
}

`

export default GlobalStyle;