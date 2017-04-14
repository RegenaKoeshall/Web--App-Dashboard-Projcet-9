//Traffic chart
 
    $('#popup').dialog({
      height: 300,
      width: 400,
     position: { my: "right top", at: "left bottom", of: "#notify-button" }
    });




   var Linectx = document.getElementById("lineChart").getContext("2d");
  
    // Line Chart Widget 
   
    //  HOURLY TRAFFIC
    var hourlyChartData = [80, 20, 135, 550, 1000, 1150, 900, 1100, 1183, 903, 801, 502, 420];
    var hourlyLabelData = ["1-2am", "3-4am", "5-6am", "7-8am", "9-10am", "10-11am", "12-13pm", "14-15pm", "16-17pm", "18-19pm", "20-21pm", "22-24am" ];
    var hourlyBackgroundColor = "rgba(180, 80,180, 0.4)";

    //  DAILY TRAFFIC 
    var dailyChartData =  [750, 250, 1000, 100, 1700, 1500, 1250, 950, 1350, 1000, 1450, 250];
    var dailyLabelData = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
     var dailyBackgroundColor = "rgba(80, 220, 60, 0.4)";

    //  WEEKLY CHART 
    var weeklyChartData = [1750, 2250, 2000, 2500, 3500, 2500, 5750, 2250, 6750, 4500, 3750, 5250];
    var weeklyLabelData = ["1-4wks", "5-9wks", "10-14wks", "15-19wks", "20-24wks", "25-29wks", "30-34wks", "35-39wks", "40-44wks", "45-59wks", "50-52wks"];
    var weeklyBackgroundColor = "rgba(180, 80, 130, 0.4)";

    //  MONTHLY CHART 
    var monthlyChartData = [10750, 21250, 1000, 12500, 13000, 4500, 15750, 14250, 16750, 14000, 13750, 14250];
    var monthlyLabelData = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var monthlyBackgroundColor = "rgba(0, 220,0, 0.4)";
   

    // Updates Graph to hourly 
    $("#hour3").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = hourlyChartData;
      myChart.data.labels = hourlyLabelData;
      myChart.data.datasets[0].backgroundColor = hourlyBackgroundColor;
      myChart.update();

    });

    // Updates Graph to daily 
    $("#day3").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = dailyChartData;
      myChart.data.labels = dailyLabelData;
      myChart.data.datasets[0].backgroundColor = dailyBackgroundColor;
      myChart.update();
    });

    // Updates Graph to weekly 
    $("#week3").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = weeklyChartData;
      myChart.data.labels = weeklyLabelData;
      myChart.data.datasets[0].backgroundColor = weeklyBackgroundColor;
      myChart.update();
    });

    // Updates Graph to monthly 
    $("#month3").on("click", function(e) {
      e.preventDefault();
      myChart.data.datasets[0].data = monthlyChartData;
      myChart.data.labels = monthlyLabelData;
      myChart.data.datasets[0].backgroundColor = monthlyBackgroundColor;
      myChart.update();
    });


   
    //  LINE CHART CONSTRUCTOR
   
    var myChart = new Chart(Linectx, {
        type: "line",
        data: {
            labels: hourlyLabelData,
            datasets: [{
                data: hourlyChartData, // DATA UPDATE ON CLICK EVENTS
                lineTension: 0,
                pointBorderColor: "rgba(150, 132, 208, 1)",
                pointRadius: 4,
                pointBorderWidth: 2,
                pointBackgroundColor: "#fff",
                backgroundColor: hourlyBackgroundColor,
                borderColor: "rgba(150, 132, 208, 1)",
                borderWidth: 2
            }]
        }, // CHART DATA VARIABLES ADDED 
        options: {
            responsive: true,
            legend: {
              display: false,
            },
           title: {
          display: true,
          text: 'TRAFFIC',
          position: 'top'
      }
          }
    });



 //Bar chart
  const BAR = document.getElementById("myBarChart");

 let myBarChart = new Chart(BAR, {
    type: 'bar',
    data:  {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Daily Traffic",
            backgroundColor: [
               'rgba(125, 100, 180, 0.7)',
              'rgba(125, 100, 180, 0.7)',
                'rgba(125, 100, 180, 0.7)',
                 'rgba(125, 100, 180, 0.7)',
                 'rgba(125, 100, 180, 0.7)',
                  'rgba(125, 100, 180, 0.7)',
                 'rgba(125, 100, 180, 0.7)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 20],
        }
    ]
    },
   options: {
    title: {
          display: true,
          text: 'Daily',
          position: 'top'
      },
      legend: {
              display: false,
            }
   
   }
});  
  
 // And for a doughnut chart
 const DOUGHNUT = document.getElementById("myDoughnutChart");

const myDoughnutChart = new Chart(DOUGHNUT, {
    type: 'doughnut',
    data: {
    labels: [
      "Phones",
        "Tablets",
        "Desktops",
          "Others"
    ],
    datasets: [
        {
            data: [300, 50, 100, 60],
            backgroundColor: [
                "#0000CC",
                "#00FF00",
                "#881188",
                "#441188"
            ],
            hoverBackgroundColor: [
               "#0000AA",
                "#00DD00",
                "#CC22EB",
                  "#FF00EE"
            ]
        }
        ]
        },
  options: {
          maintainAspectRatio: false,
    
    title: {
          display: true,
          text: 'Mobile Users',
          position: 'top'
      },
  
   legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 30,
              fontSize: 18,
              padding: 30
        }
   }
  }
     
});
 

//Hide bell icon on click
  $(document).ready(function() {
    $(".bell").click(function() {
        $(".dot").addClass("hidden");
        $(".bell").addClass("hidden");
    });
   
    $(".sendForm").click(function() {
        formSubmit();
    });
    
    
    //Form validation
     $("#send").click(function(){
        var alert = $("#alert");
        var search = $("#message-search");
        var message = $("#message"); 
        if ( search.val() === '' || message.val() === '' ){
            alert.css("display", "block");
           alert.css("background-color", "red");
            alert.css("color", "white");
                alert.text("Username and message are required!");
        }
        else {
            alert.css("display", "block");
            alert.css("background-color", "red");
            alert.css("color", "white");
                alert.text("Message Sent!").delay(500).fadeOut("slow");
        }
        return false;
    });
});
   

   

