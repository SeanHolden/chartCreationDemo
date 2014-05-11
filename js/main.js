var settings = {
  lines: false,
  columns: false,
  data: [],
  xaxisLabel: 'edit me',
  yaxisLabel: 'edit me',
  chartLabel: 'edit me'
};

$(function(){
  displayChart();
  initializeChartTypeButtons();
  initializeEnterDataButton();
  initializeChartTitleButtons();
});

function displayChart(){
    var values = [ [0, 3], [2, 8], [4, 5], [6, 13], [8,0], [10,5] ];

    var chart = [{
      data: settings.data,
      lines: { show: settings.lines },
      bars: { show: settings.columns }
    }];

    var options = {
      xaxis: { axisLabel: settings.xaxisLabel },
      yaxis: { axisLabel: settings.yaxisLabel }
    };

    $.plot("#placeholder", chart, options );
}

function initializeChartTypeButtons(){
  $('#line').click(function(){
    settings.lines = true;
    settings.columns = false;
    displayChart();
  });
  $('#column').click(function(){
    settings.lines = false;
    settings.columns = true;
    displayChart();
  });
}

function initializeEnterDataButton(){
  $('#enterdata').click(function(){
    var userinput = $('#userinput').val();
    var lines = userinput.split('\n')
    var xaxis = lines[0].split(',');
    var yaxis = lines[1].split(',');

    var dataValues = [];
    
    for(var i=0;i<xaxis.length;i++){
      dataValues.push([xaxis[i],yaxis[i]]);
    }
    settings.data = dataValues;
    displayChart();
  });
}

function initializeChartTitleButtons(){
  $('#editXaxisLabel').click(function(){
    settings.xaxisLabel = $('#XaxisLabelInput').val();
    displayChart();
  });
  $('#editYaxisLabel').click(function(){
    settings.yaxisLabel = $('#YaxisLabelInput').val();
    displayChart();
  });
  $('#editChartTitle').click(function(){
    var chartTitle = $('#ChartTitleInput').val();
    $('#mainTitle').html(chartTitle);
  });
}