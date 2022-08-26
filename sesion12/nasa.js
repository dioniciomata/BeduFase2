// console.log("sesion 12")

// fetch('http://example.com/data.json')
//   .then(function(result) {
//     return result.json()  
//   })
//   .then(function(data) {
//     console.log(data)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })


const app = document.getElementById('app');

getImagesFromNasa()
  .then(function (data) {

    console.log(data);

    data.forEach(function (element) {
      const img = document.createElement('img');
      img.src = getImageUrl(element);
      img.alt = element.caption;

      app.appendChild(img);
    })
})

function getImagesFromNasa() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
      .then(function (response) {
        return response.json();
      })
}

function getImageUrl(elemento) {
    /*
     * URL should look like this:
     * https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
     */
    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
    const date = elemento.date // Looks like 2020-06-19 02:33:19
      .substr(0, 10) // Get first 10 characters from string
      .split('-'); // Split year, month and day into an array
  
    return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${elemento.image}.png`;
}