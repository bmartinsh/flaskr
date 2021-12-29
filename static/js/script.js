const btsApiUrl = 'https://taxifare.lewagon.ai/predict_fare/'

const predict = () => {
  form = document.getElementById('#get-bts-button');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        "prompt": parseFloat(document.getElementById('prompt').value)
      };
      let query = []
      Object.keys(data).forEach((param) => {
        query.push(`${param}=${data[param]}`)
      })
      const querystring = query.join('&')
      const url = `${btsApiUrl}?${querystring}`
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('prompt').classList.remove('d-none');
        const btsResult = document.getElementById('prompt');
        const bts = (data['prediction']) 
        btsResult.innerText = `$${bts}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  }
};

predict();


// <button type="submit" class="btn btn-primary mb-2" id="get-bts-button">Inspire Me !</button>