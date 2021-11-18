/* eslint-disable max-len */
/* eslint-disable no-shadow */
// Sean
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function companyActions() {
  const endpoint = '/api/companies';
  const request = await fetch(endpoint);
  const brands = await request.json();
  console.log('company actions ready');

  function findMatches(wordToMatch, brands) {
    return brands.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      // eslint-disable-next-line max-len
      return place.stage_name.match(regex) || place.company_name.match(regex) || place.birth_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, brands);
    console.log(matchArray);
    const html = matchArray.map((place) => {
      return `
                      <li>
                        <span class="name"><span class="hl">${place.stage_name}</span>, <span class="hl">${place.birth_name}</span></span>
                      </li>
                    `;
    }).join('');
    if (event.target.value) {
      suggestions.innerHTML = html;
    } else {
      suggestions.innerHTML = '';
    }
  }

  searchInput.addEventListener('change', (evt) => { displayMatches(evt); });
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = companyActions;

// Elvis
async function artistsActions() {
  const endpoint = '/api/artists';
  const request = await fetch(endpoint);
  const artist = await request.json();
  console.log('artists');

  function findMatches(wordToMatch, artist) {
    return artist.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');

      return place.stage_name.match(regex) || place.birth_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, artist);
    console.log(matchArray);
    const html = matchArray.map((place) => {
      return `
                      <li>
                        <span class="name"><span class="hl">${place.stage_name}</span>, <span class="hl">${place.birth_name}</span></span>
                      </li>
                    `;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
    if (!event.target.value) {
      suggestions.innerHTML = '';
    }
  }
  searchInput.addEventListener('change', (evt) => { displayMatches(evt); });
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = artistsActions;