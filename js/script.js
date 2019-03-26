
    let myChart = document.getElementById('myChart').getContext('2d');

    let massPopChart = new Chart(myChart, {
        type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:[ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10" ],
            datasets:[
            {
                label: "MorePopulation", 
                backgroundColor: "#80BFCA",
                data: [  190, 170, 220, 75, 430, 320, 120, 110, 710, 620 ]
            },
            {
                label: "Population", 
                backgroundColor: "#FF9A38",
                data: [ 350, 400, 300, 100, 450, 300, 180, 200, 210, 230 ]
            },
            {
                label: "EvenMorePopulation", 
            }
            ]
        },
        options:{}
    }); 
