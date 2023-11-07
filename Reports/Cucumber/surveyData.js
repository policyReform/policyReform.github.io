var bestTeamChart;
  var currentFanChart;
  var alumniDonorChart;
  var adminChart;
  var expandingFansChart;  
  var athleteChart  
  var tvChart;
  var collegiateChart;

function loadSurvey(chartID) {
  

  if (chartID == "bestTeamChart") {
    bestTeamChart = new CanvasJS.Chart("bestTeamChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For determining the definitive best team in the country…",
      },
      axisY: {
        interval: 10,
        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 7, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 0, label: "Tennis" },
            { y: 4, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 4, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 6, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 1, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 4, label: "Golf" },
            { y: 4, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 1, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 5, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 14, label: "Golf" },
            { y: 5, label: "Gymnastics" },
            { y: 20, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
      ],
    });
    bestTeamChart.render();
  } else if (bestTeamChart) {
    bestTeamChart.destroy();
  }

  if (chartID == "currentFanChart") {
    currentFanChart = new CanvasJS.Chart("currentFanChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For getting the most engagement from the current fan base…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 0, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 1, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 5, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 4, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 5, label: "Golf" },
            { y: 4, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 3, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 17, label: "Golf" },
            { y: 5, label: "Gymnastics" },
            { y: 16, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
      ],
    });
    currentFanChart.render();
  } else if (currentFanChart) {
    currentFanChart.destroy();
  }

  if (chartID == "alumniDonorChart") {
    alumniDonorChart = new CanvasJS.Chart("alumniDonorChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For getting the most engagement from alumni and donors…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 0, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 1, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 13, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 7, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 4, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 4, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 13, label: "Golf" },
            { y: 4, label: "Gymnastics" },
            { y: 16, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
      ],
    });
    alumniDonorChart.render();
  } else if (alumniDonorChart) {
    alumniDonorChart.destroy();
  }

  if (chartID == "adminChart") {
    adminChart = new CanvasJS.Chart("adminChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For getting the most school administration support…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 0, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 7, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 0, label: "Tennis" },
            { y: 0, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 13, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 3, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 4, label: "Tennis" },
            { y: 1, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 4, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 13, label: "Golf" },
            { y: 6, label: "Gymnastics" },
            { y: 16, label: "Tennis" },
            { y: 4, label: "Wrestling" },
          ],
        },
      ],
    });
    adminChart.render();
  } else if (adminChart) {
    adminChart.destroy();
  }

  if (chartID == "expandingFansChart") {
    expandingFansChart = new CanvasJS.Chart("expandingFansChart", {
      animationEnabled: true,
      theme: "light1", //"light1", "dark1", "dark2"
      title: {
        text: "For expanding the fan base…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 2, label: "Tennis" },
            { y: 1, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 6, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 2, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 6, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 14, label: "Golf" },
            { y: 6, label: "Gymnastics" },
            { y: 15, label: "Tennis" },
            { y: 4, label: "Wrestling" },
          ],
        },
      ],
    });
    expandingFansChart.render();
  } else if (expandingFansChart) {
    expandingFansChart.destroy();
  }

  if (chartID == "athleteChart") {
    athleteChart = new CanvasJS.Chart("athleteChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For providing opportunities to the athletes on your roster…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 4, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 4, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 1, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 4, label: "Tennis" },
            { y: 1, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 8, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 5, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 6, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 2, label: "Tennis" },
            { y: 0, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 3, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 10, label: "Golf" },
            { y: 5, label: "Gymnastics" },
            { y: 8, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
      ],
    });
    athleteChart.render();
  } else if (athleteChart) {
    athleteChart.destroy();
  }

  if (chartID == "tvChart") {
    tvChart = new CanvasJS.Chart("tvChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For TV Viewership…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 0, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 4, label: "Fencing" },
            { y: 3, label: "Golf" },
            { y: 1, label: "Gymnastics" },
            { y: 2, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 9, label: "Golf" },
            { y: 2, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 4, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 14, label: "Golf" },
            { y: 6, label: "Gymnastics" },
            { y: 12, label: "Tennis" },
            { y: 5, label: "Wrestling" },
          ],
        },
      ],
    });
    tvChart.render();
  } else if (tvChart) {
    tvChart.destroy();
  }

  if (chartID == "collegiateChart") {
    collegiateChart = new CanvasJS.Chart("collegiateChart", {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "For collegiate competition…",
      },
      axisY: {
        interval: 10,

        valueFormatString: "0'%'",
      },
      axisX: {
        reversed: true,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "stackedBar100",
          toolTipContent: "{label}<br><b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Significantly better",
          color: "#0924D6",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 1, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Individual Centric Model is Slightly better",
          color: "#401DA3",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 0, label: "Fencing" },
            { y: 2, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 1, label: "Tennis" },
            { y: 2, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "Neutral: Both are Equal",
          color: "#b1a4bd",
          dataPoints: [
            { y: 0, label: "Bowling" },
            { y: 3, label: "Fencing" },
            { y: 7, label: "Golf" },
            { y: 0, label: "Gymnastics" },
            { y: 3, label: "Tennis" },
            { y: 6, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Slightly better",
          color: "#AF103C",
          dataPoints: [
            { y: 2, label: "Bowling" },
            { y: 1, label: "Fencing" },
            { y: 3, label: "Golf" },
            { y: 4, label: "Gymnastics" },
            { y: 6, label: "Tennis" },
            { y: 1, label: "Wrestling" },
          ],
        },
        {
          type: "stackedBar100",
          toolTipContent: "<b>{name}:</b> #percent%",
          showInLegend: true,
          name: "The Team Centric Model is Significantly better",
          color: "#e60909",
          dataPoints: [
            { y: 4, label: "Bowling" },
            { y: 2, label: "Fencing" },
            { y: 17, label: "Golf" },
            { y: 6, label: "Gymnastics" },
            { y: 12, label: "Tennis" },
            { y: 3, label: "Wrestling" },
          ],
        },
      ],
    });
    collegiateChart.render();
  } else if (collegiateChart) {
    collegiateChart.destroy();
  }
  // var conflictVisionChart = new CanvasJS.Chart("prefChart", {
  //   animationEnabled: true,
  //   title: {
  //     text: "Crude Oil Reserves vs Production, 2016",
  //   },
  //   axisY: {
  //     title: "Billions of Barrels",
  //     titleFontColor: "#4F81BC",
  //     lineColor: "#4F81BC",
  //     labelFontColor: "#4F81BC",
  //     tickColor: "#4F81BC",
  //   },
  //   axisY2: {
  //     title: "Millions of Barrels/day",
  //     titleFontColor: "#C0504E",
  //     lineColor: "#C0504E",
  //     labelFontColor: "#C0504E",
  //     tickColor: "#C0504E",
  //   },
  //   toolTip: {
  //     shared: true,
  //   },
  //   legend: {
  //     cursor: "pointer",
  //     itemclick: toggleDataSeries,
  //   },
  //   data: [
  //     {
  //       type: "column",
  //       name: "Proven Oil Reserves (bn)",
  //       legendText: "Proven Oil Reserves",
  //       showInLegend: true,
  //       dataPoints: [
  //         { label: "Saudi", y: 266.21 },
  //         { label: "Venezuela", y: 302.25 },
  //         { label: "Iran", y: 157.2 },
  //         { label: "Iraq", y: 148.77 },
  //         { label: "Kuwait", y: 101.5 },
  //         { label: "UAE", y: 97.8 },
  //       ],
  //     },
  //     {
  //       type: "column",
  //       name: "Oil Production (million/day)",
  //       legendText: "Oil Production",
  //       axisYType: "secondary",
  //       showInLegend: true,
  //       dataPoints: [
  //         { label: "Saudi", y: 10.46 },
  //         { label: "Venezuela", y: 2.27 },
  //         { label: "Iran", y: 3.99 },
  //         { label: "Iraq", y: 4.45 },
  //         { label: "Kuwait", y: 2.92 },
  //         { label: "UAE", y: 3.1 },
  //       ],
  //     },
  //   ],
  // });
  // conflictVisionChart.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    conflictVisionChart.render();
  }

  // var perfInd = new CanvasJS.Chart("preferIndividualChampionship", {
  //   title: {
  //     text: "Preferred Collegiate Model for Respondends who Believe the Individual Centric Championship Model is Best for Determining the Definitive Best team in the Country ",
  //     fontWeight: "lighter",
  //     fontSize: 20,
  //     fontFamily: "arial",
  //   },
  //   axisY: {
  //     interval: 5,
  //     suffix: "",
  //   },
  //   data: [
  //     {
  //       toolTipContent: "{y}% {legendText}",
  //       type: "pie",
  //       dataPoints: [
  //         {
  //           color: "#0924D6",
  //           y: 22,
  //           legendText: "The Individual Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#401DA3",
  //           y: 14,
  //           legendText: "The Individual Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#b1a4bd",
  //           y: 50,
  //           legendText: "Neutral: Both are Equal",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#AF103C",
  //           y: 0,
  //           legendText: "The Team Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#e60909",
  //           y: 14,
  //           legendText: "The Team Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //       ],
  //     },
  //   ],
  // });

  // perfInd.render();

  // var neutral = new CanvasJS.Chart("preferEqualChampionship", {
  //   title: {
  //     text: "Both Models are Equal for Determining the Definitive Best team in the Country",
  //     fontWeight: "lighter",
  //     fontSize: 20,
  //     fontFamily: "arial",
  //   },
  //   axisY: {
  //     interval: 5,
  //     suffix: "%",
  //   },
  //   data: [
  //     {
  //       toolTipContent: "{y}% {legendText}",
  //       type: "pie",
  //       dataPoints: [
  //         {
  //           color: "#0924D6",
  //           y: 0,
  //           legendText: "The Individual Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#401DA3",
  //           y: 11,
  //           legendText: "The Individual Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#b1a4bd",
  //           y: 66,
  //           legendText: "Neutral: Both are Equal",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#AF103C",
  //           y: 11,
  //           legendText: "The Team Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#e60909",
  //           y: 11,
  //           legendText: "The Team Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //       ],
  //     },
  //   ],
  // });

  // neutral.render();

  // var perfTeam = new CanvasJS.Chart("preferTeamChampionship", {
  //   title: {
  //     text: "Preferred Collegiate Model for Respondends who Believe the Team Centric Championship Model is Best for Determining the Definitive Best team in the Country ",
  //     fontWeight: "lighter",
  //     fontSize: 20,
  //     fontFamily: "arial",
  //   },
  //   axisY: {
  //     interval: 5,
  //     suffix: "%",
  //   },
  //   data: [
  //     {
  //       toolTipContent: "{y}% {legendText}",
  //       type: "pie",
  //       dataPoints: [
  //         {
  //           color: "#0924D6",
  //           y: 0,
  //           legendText: "The Individual Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#401DA3",
  //           y: 2,
  //           legendText: "The Individual Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#b1a4bd",
  //           y: 9,
  //           legendText: "Neutral: Both are Equal",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#AF103C",
  //           y: 24,
  //           legendText: "The Team Centric Model is Slightly better",
  //           showInLegend: true,
  //         },
  //         {
  //           color: "#e60909",
  //           y: 65,
  //           legendText: "The Team Centric Model is Significantly better",
  //           showInLegend: true,
  //         },
  //       ],
  //     },
  //   ],
  // });

  // perfTeam.render();
}
