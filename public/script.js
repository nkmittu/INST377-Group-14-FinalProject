/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
async function companyActions() {
  const searchInput = document.querySelector('.search');
  const endpoint = '/api/companies';
  const request = await fetch(endpoint);
  const cities = await request.json();
  console.log(cities)
  console.log('company actions ready')

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      // eslint-disable-next-line max-len
      return place.stage_name.match(regex) || place.company_name.match(regex)|| place.birth_name.match(regex);
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
  }
  searchInput.addEventListener('change', (evt) => { 
    displayMatches(evt);
    console.log('listening'); });
}
window.onload = companyActions;