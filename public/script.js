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
  const companysearchInput = document.querySelector('.companysearch');
  const companysuggestions = document.querySelector('.companysuggestions');
  console.log(brands);

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
                        <span class="name"><span class="hl">${place.birth_name}</span> also known as <span class="hl">${place.stage_name}</span> works with company ${place.company_name} in the ${place.industry} industry.</span>
                      </li>
                    `;
    }).join('');
    if (event.target.value) {
      companysuggestions.innerHTML = html;
    } else {
      companysuggestions.innerHTML = '';
    }
  }

  companysearchInput.addEventListener('change', (evt) => { displayMatches(evt); });
  companysearchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
// Elvis
async function artistsActions() {
  const endpoint = '/api/artists';
  const request = await fetch(endpoint);
  const artistarray = await request.json();
  const artist = artistarray.result;
  console.log(artist);

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
                        <span class="name"><span class="hl">${place.birth_name}</span> also known as <span class="hl">${place.stage_name}</span> was born on ${place.birth_date} and is ${place.age} years old.</span>
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
function start() {
  companyActions();
  artistsActions();
}
window.onload = start;