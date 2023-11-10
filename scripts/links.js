const baseURL = "https://jus95003.github.io/wdd230/";

const linksURL = "https://jus95003.github.io/wdd230/data/links.json";

const cardList = document.querySelector('.card-list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let line = document.createElement('li');
        line.textContent = `Lesson ${lesson}: `;
        week.forEach((link) => {
            let anchor = document.createElement('a');
            let anchorText = document.createTextNode({title})

            anchor.setAttribute('target', '_blank')
            anchor.setAttribute('href', {url})
            anchor.textContent = anchorText;

            line.appendChild(anchor);
            line.appendChild(" | ");
        });

        
        
        cardList.appendChild(line);
    });
  }