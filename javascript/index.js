
var options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-key': '65f1b95e5bmshd6ca18fbbe9c9aep1d00e9jsn5cf83240c01d',
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  //const corona=JSON.parse(response);
  var student = response.data.state_wise.Maharashtra.active;
	console.log(student);

  google.load('visualization', '1', {'packages': ['geochart']});
  google.setOnLoadCallback(drawVisualization);
  var student = response.data.state_wise.Kerala.active;
  const x= Object.values(response.data.state_wise);

  function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
      ['State Code', 'State', 'Active Cases'],
      ['IN-UP','Uttar Pradesh', 732],
      ['IN-MH','Maharashtra', response.data.state_wise.Maharashtra.active],
      ['IN-BR','Bihar', response.data.state_wise.Bihar.active],
      ['IN-WB','West Bengal', 11171],
      ['IN-MP','Madhya Pradesh', 121],
      ['IN-TN','Tamil Nadu', 20936],
      ['IN-RJ','Rajasthan', response.data.state_wise.Rajasthan.active],
      ['IN-KA','Karnataka', response.data.state_wise.Karnataka.active],
      ['IN-GJ','Gujarat', response.data.state_wise.Gujarat.active],
      ['IN-AP','Andhra Pradesh', 21198],
      ['IN-OR','Orissa', response.data.state_wise.Odisha.active],
      ['IN-TG','Telangana', response.data.state_wise.Telangana.active],
      ['IN-KL','Kerala', response.data.state_wise.Kerala.active],
      ['IN-JH','Jharkhand', response.data.state_wise.Jharkhand.active],
      ['IN-AS','Assam', response.data.state_wise.Assam.active],
      ['IN-PB','Punjab', response.data.state_wise.Punjab.active],
      ['IN-CT','Chhattisgarh', response.data.state_wise.Chhattisgarh.active],
      ['IN-HR','Haryana', response.data.state_wise.Haryana.active],
      ['IN-JK','Jammu and Kashmir', 1171],
      ['IN-UT','Uttarakhand', response.data.state_wise.Uttarakhand.active],
      ['IN-HP','Himachal Pradesh', 1137],
      ['IN-TR','Tripura', response.data.state_wise.Tripura.active],
      ['IN-ML','Meghalaya', response.data.state_wise.Meghalaya.active],
      ['IN-MN','Manipur', response.data.state_wise.Manipur.active],
      ['IN-NL','Nagaland', response.data.state_wise.Nagaland.active],
      ['IN-GA','Goa', response.data.state_wise.Goa.active],
      ['IN-AR','Arunachal Pradesh', 4252],
      ['IN-MZ','Mizoram', response.data.state_wise.Mizoram.active],
      ['IN-SK','Sikkim', response.data.state_wise.Sikkim.active],
      ['IN-DL','Delhi', response.data.state_wise.Delhi.active],
      ['IN-PY','Puducherry', response.data.state_wise.Puducherry.active],
      ['IN-CH','Chandigarh', response.data.state_wise.Chandigarh.active],
      ['IN-AN','Andaman and Nicobar Islands', 10],
      ['IN-DN','Dadra and Nagar Haveli', 1],
      ['IN-DD','Daman and Diu', 0],
      ['IN-LD','Lakshadweep', response.data.state_wise.Lakshadweep.active]
    ]);

        var opts = {
          region: 'IN',
          domain:'IN',
          displayMode: 'regions',
          colorAxis: {colors: ['#e5ef88', '#d4b114', '#e85a03','#ff3333', '#e60000', '#980000', '#4d0000']},
          resolution: 'provinces',
          /*backgroundColor: '#81d4fa',*/
          /*datalessRegionColor: '#81d4fa',*/
          defaultColor: '#f5f5f5',
          width: 640,
          height: 480
        };
        var geochart = new google.visualization.GeoChart(
            document.getElementById('visualization'));
        geochart.draw(data, opts);
      };


}).catch(function (error) {
	console.error(error);
});