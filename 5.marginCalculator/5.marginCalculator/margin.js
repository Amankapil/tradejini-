const URL = 'https://cube.tradejini.com/NorenWClientTP/SpanCalc';

fetch(URL)
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
  
    return response.json();
  })
  .then(data => {
 
    console.log(data);
  })
  .catch(error => {
  
    console.error('Request failed:', error);
  });
