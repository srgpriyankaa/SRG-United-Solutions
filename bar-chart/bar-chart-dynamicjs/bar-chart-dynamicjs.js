(function() {
  'use strict';
  Polymer({
    is: 'bar-chart-dynamic',
  barchartloading:function(e){
    document.getElementById("chartContainer").innerHTML = "barchart is loaded.";
        var chart = new CanvasJS.Chart("chartContainer",{
        title: {
          text: "ItemDetails"
        },
        data: [
        {
          type: "column",
          indexLabel: "{y}",
          dataPoints: e
        }
        ]
      });
        chart.render();
    }
  });
})();
