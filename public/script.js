//Sean
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
async function companyActions() {
  const searchInput = document.querySelector('.search');
  const endpoint = '/api/companies';
  const request = await fetch(endpoint);
  const cities = await request.json();
  const suggestions = document.querySelector('.suggestions');
  console.log('company actions ready')

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      // eslint-disable-next-line max-len
      return place.stage_name.match(regex) || place.company_name.match(regex) || place.birth_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, cities);
    console.log(matchArray);
    const html = matchArray.map((place) => {
      return `
        <li>
          <span class = 'name'>${place.birth_name} also known as ${place.stage_name} works with ${place.company_name}</span>
        </li>
      `;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
    if (!event.target.value) {
      suggestions.innerHTML = '';
    }
  }
  searchInput.addEventListener('keyup', (evt) => { 
    displayMatches(evt);
    console.log('listening'); });
}
window.onload = companyActions;

//Elvis
async function artistsActions() {
  const searchInput = document.querySelector('.search');
  const endpoint = '/api/artists';
  const request = await fetch(endpoint);
  const cities = await request.json();
  const suggestions = document.querySelector('.suggestions');
  console.log('artists')

  function findMatches(wordToMatch, artist) {
    return artist.filter((celebs) => {
      const regex = new RegExp(wordToMatch, 'gi');
      
      return celebs.stage_name.match(regex) || celebs.birth_name.match(regex);
    });
  }
  function displayMatches(celebs) {
    const matchArray = findMatches(event.target.value, artist);
    console.log(matchArray);
    const html = matchArray.map((celebs) => {
      return `
        <li>
          <span class = 'name'>${celebs.birth_name} also known as ${celebs.stage_name}</span>
        </li>
      `;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
    if (!event.target.value) {
      suggestions.innerHTML = '';
    }
  }
  searchInput.addEventListener('keyup', (evt) => { 
    displayMatches(evt);
    console.log('listening'); });
}
window.onload = artistsActions;


