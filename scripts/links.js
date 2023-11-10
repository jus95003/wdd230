const baseURL = "https://jus95003.github.io/wdd230/";

const linksURL = 'https://jus95003.github.io/wdd230/data/links.json';

const cardList = document.querySelector('.card-list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let line = document.createElement('li');
        line.textContent = `Lesson ${week.lesson}:\xa0\xa0\xa0`;

        week.links.forEach((link) => {
            let anchor = document.createElement('a');

            anchor.setAttribute('target', '_blank');
            anchor.setAttribute('href', link.url);
            anchor.textContent = link.title;

            line.appendChild(anchor);
            line.insertAdjacentHTML( 'beforeend', " | " );

            
        });
        


        cardList.appendChild(line);
    });
  }