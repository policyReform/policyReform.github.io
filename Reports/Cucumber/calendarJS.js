var showAdmins = false;
var scheduleToShow = null;
var ind1Note ='';
var ind2Note ='';
var teamNote ='';
function activateClass(className, boolean) {
  var switcher = boolean ? "visible" : "hidden";
  var roundb = document.getElementsByClassName(className);
  for (var i = 0; i < roundb.length; i++) {
    roundb[i].style.visibility = switcher;
  }
}

function process() {
  var hasError = false;
  showByID("error", false);
  showByID("error2", false);
  if (
    document.getElementById("teamBye").checked &&
    (document.getElementById("teamEvents").value == "1" ||
      document.getElementById("teamEvents").value == "0")
  ) {
    showByID("error2", true);
    hasError = true;
  } else if (
    !(
      document.getElementById("who").value == "0" ||
      (document.getElementById("teamEvents").value != "" &&
        document.getElementById("individualEvents").value != "")
    )
  ) {
    showByID("error", true);
    hasError = true;
  }
  if (hasError) {
    //console.log("hasERROR");
    showByID("toggles", true);
  }
  // else{
  //     console.log('NOERROR');
  //     showByID("toggles", false);
  // }
  return !hasError;
}
function hide() {
  //.style.style.visibility = "hidden";
}
function whoUpdate() {
  ind1Note = '';
  ind2Note ='';
  teamNote ='';
  document.getElementById("teamEvents").selectedIndex = "";
  document.getElementById("individualEvents").selectedIndex = "0";
  showAdmins = false;
  var val = document.getElementById("who").value;
  if (val == "0" || val == 0) {
    //console.log("show all");
    showByID("notes", false);
    activateClass("admin", true);
    showByID("error", false);
    showByID("error2", false);
    showByID("toggles", false);
    //$( "#calendarWrapID" ).load(window.location.href + " #calendarWrapID" );
  } else {
    if (val == "3") {
      showAdmins = true;
    }
    activateClass("admin", false);
    showByID("error", true);
    showByID("toggles", true);
    userUpdate();
  }
  //
}

function updateNotes(val) {
  showByID("notes", true);
  document.getElementById("notes").innerText = "Note: " + val;
}
function showByID(idVal, boolean) {
  if (boolean == true) {
    document.getElementById(idVal).style.visibility = "visible";
    document.getElementById(idVal).style.maxHeight = "none";
  } else {
    document.getElementById(idVal).style.visibility = "hidden";
    document.getElementById(idVal).style.maxHeight = "0px";
  }
}

function setTeamSchedule(eventNumber, schedule) {
  
  var dualCounter = 0;
  var dualRound = '';
  if (eventNumber == "0"){
    teamNote = "The athlete's team did not qualify for the NCAA Wrestling (Team) Championship. "
    return;
  } 
  activateClass("adminTeam", true);
  if (showAdmins) {
    activateClass("adminTeam", true);
  }
  var teamEv = parseInt(eventNumber);
  //if the team event is greater than 0 and there is not a bye then first round is active
  if (teamEv > 0 && !document.getElementById("teamBye").checked) {
    activateClass("rnd1" + schedule, true);
    dualRound = 'first round';
    dualCounter ++;
  }
  if (teamEv > 1) {
    activateClass("rnd2" + schedule, true);
    dualRound = 'second round';
    dualCounter ++;
  }
  if (teamEv > 2) {
    activateClass("rnd3" + schedule, true);
    dualRound = 'quarterfinals';
    dualCounter ++;
  }
  if (teamEv > 3) {
    activateClass("rnd4", true);
    dualRound = 'semifinals';
    dualCounter ++;
  }
  if (teamEv > 4) {
    activateClass("rnd5", true);
    dualRound = 'finals';
    dualCounter ++;
  }
  var dualCountertext = dualCounter > 1 ? dualCounter+ " duals": dualCounter+' dual';
  teamNote = 'The athlete\'s team will advance to the '+dualRound+' of the NCAA Wrestling Championship competing in '+dualCountertext+" during the team championship. ";
  //console.log(teamNote);
}
function userUpdate() {
  if (!process()) {
    //console.log("returned without Processing");
    return;
  }
 // console.log("processed");
  //clear all options
  activateClass("admin", false);
  var teamEv = document.getElementById("teamEvents").value;
  var indEv = document.getElementById("individualEvents").value;
  var tf = flipCoin();
  var schedule = getSchedule();
  //oldCalendarLogic(teamEv, indEv, schedule);
  setTeamSchedule(teamEv, schedule);
  setIndividualSchedule(indEv, teamEv, schedule);
  updateNotes(ind1Note+teamNote+ind2Note);
}
function getSchedule() {
  if (scheduleToShow == null) {
    var tf = flipCoin();
    scheduleToShow = flipCoin() ? "b" : "a";
  }
  return scheduleToShow;
}

function setIndividualSchedule(indEv, teamEv, schedule) {
  ind1Note='';
  ind2Note='';
  if (indEv == "0") {
    //direct qualififer
    activateClass("athlete", true);
    ind1Note = 'The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season. '
    if(teamEv == "0"){
      ind2Note = 'The athlete will train to compete for a weight class title at the NCAA Wrestling Championships. ';
    }
    
    if (showAdmins) {
      activateClass("adminDirect", true);
    }
  } else if (indEv == "1") {
    //needs at large
    activateClass("athlete", true);
    var teamEv = parseInt(teamEv);
    if (teamEv < 3) {
      activateClass("regional" + schedule, true);
      ind2Note = 'In order to compete for a weight class championship, the athlete will need to compete in the regional supplemental qualifier. ';
    } else {
      ind2Note = 'In order to compete for a weight class championship, the athlete will need to earn an atlarge bid to the championship based on their season\'s body of work. ';
      if (showAdmins) {
        activateClass("adminAtlarge", true);
      }
    }
  }
  if (showAdmins) {
    activateClass("adminInd", true);
  }
}

function oldCalendarLogic(teamEv, indEv, schedule) {
  if (teamEv == "0") {
    //No TEAM POST SEASON
    if (indEv == "0") {
      //direct qualifier
      activateClass("athlete", true);
      updateNotes(
        "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The team did not earn a post-season bid.  The athlete will train for their weight class championship. "
      );
      if (showAdmins) {
        activateClass("adminDirect", true);
        activateClass("adminInd", true);
      }
    } else if (indEv == "1") {
      //needs atlarge
      if (flipCoin() == false) {
        activateClass("regional" + "b", true);
      } else {
        activateClass("regional" + "c", true);
      }

      activateClass("athlete", true);
      updateNotes(
        "The athlete has not yet qualified for the NCAA Wrestling Championships.  In order to compete for a weight class championship, the athlete will need to compete in the regional supplemental qualifier.  The team did not earn a post-season bid.  There will be no team competitions for the athlete."
      );

      if (showAdmins) {
        activateClass("adminInd", true);
      }
    }
  } else if (teamEv == "1") {
    //team first round
    if (indEv == "0") {
      //direct qualifier
      if (!document.getElementById("teamBye").checked) {
        activateClass("rnd1" + schedule, true);
      }

      activateClass("athlete", true);
      updateNotes(
        "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team will compete in one dual in the first round of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
      );
      if (showAdmins) {
        activateClass("adminDirect", true);
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    } else if (indEv == "1") {
      //needs atlarge
      activateClass("rnd1" + schedule, true);
      activateClass("athlete", true);
      activateClass("regional" + schedule, true);
      updateNotes(
        "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team will compete in one dual in the first round of the NCAA Wrestling Championship. In order to compete for a weight class championship, the athlete will need to compete in the regional supplemental qualifier."
      );
      if (showAdmins) {
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    }
  } else if (teamEv == "2") {
    //team second round
    if (indEv == "0") {
      //direct qualififer
      activateClass("athlete", true);
      if (!document.getElementById("teamBye").checked) {
        activateClass("rnd1" + schedule, true);
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team will compete in a total of two duals through the first and second rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      } else {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team earned a first round bye and will compete in one dualin the second round of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      }

      activateClass("rnd2" + schedule, true);

      if (showAdmins) {
        activateClass("adminDirect", true);
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    } else if (indEv == "1") {
      //needs at large
      activateClass("athlete", true);
      if (!document.getElementById("teamBye").checked) {
        activateClass("rnd1" + schedule, true);
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team will compete in a total of two duals in the first round and second rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship, the athlete will need to compete in the regional supplemental qualifier."
        );
      } else {
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team earned a bye and will compete in one dual in the second rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship, the athlete will need to compete in the regional supplemental qualifier."
        );
      }
      activateClass("rnd2" + schedule, true);
      activateClass("regional" + schedule, true);
      if (showAdmins) {
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    }
  } else if (teamEv == "3") {
    //team quarters
    if (!document.getElementById("teamBye").checked) {
      activateClass("rnd1" + schedule, true);
    }
    activateClass("rnd2" + schedule, true);
    activateClass("athlete", true);
    activateClass("rnd3" + schedule, true);
    if (indEv == "0") {
      //direct qualififer
      if (!document.getElementById("teamBye").checked) {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team will compete in a total of three duals through the first, second, and third rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      } else {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team earned a first round bye and will compete in a total of two duals through the second and third rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      }
      if (showAdmins) {
        activateClass("adminDirect", true);
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    } else if (indEv == "1") {
      //needs at large
      if (!document.getElementById("teamBye").checked) {
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team will compete in a total of three duals in the first, second, and third rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
        );
      } else {
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team earned a first round bye and will compete in a total of two duals in the second and third rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
        );
      }
      if (showAdmins) {
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    }
  } else if (teamEv == "4") {
    //team semi
    if (!document.getElementById("teamBye").checked) {
      activateClass("rnd1" + schedule, true);
    }
    activateClass("rnd2" + schedule, true);
    activateClass("athlete", true);
    activateClass("rnd3" + schedule, true);
    activateClass("rnd4", true);
    if (indEv == "0") {
      //direct qualififer
      if (!document.getElementById("teamBye").checked) {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team will compete in a total of four duals through the first, second, third, and fourth rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      } else {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team eanred a first round bye and will compete in a total of three duals through the second, third, an fourth rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      }
    }
    if (showAdmins) {
      activateClass("adminDirect", true);
      activateClass("adminInd", true);
      activateClass("adminTeam", true);
    }
  } else if (indEv == "1") {
    //needs at large
    if (!document.getElementById("teamBye").checked) {
      updateNotes(
        "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team will compete in a total of four duals in the first, second, third, and fourth rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
      );
    } else {
      updateNotes(
        "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team earned a bye in the first round and will compete in a total of three duals in the second, third, and fourth rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
      );
    }
    if (showAdmins) {
      activateClass("adminInd", true);
      activateClass("adminTeam", true);
    }
  } else if (teamEv == "5") {
    //team finals
    if (!document.getElementById("teamBye").checked) {
      activateClass("rnd1" + schedule, true);
    }
    activateClass("rnd2" + schedule, true);
    activateClass("athlete", true);
    activateClass("rnd3" + schedule, true);
    activateClass("rnd4", true);
    activateClass("rnd5", true);
    if (indEv == "0") {
      //direct qualififer
      if (!document.getElementById("teamBye").checked) {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team will compete in a total of five duals through the first, second, third, fourth and fifth rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      } else {
        updateNotes(
          "The athlete has qualified for the NCAA Wrestling Championships based on their performance over the course of the season.  The athlete's team eanred a bye in the first round and will compete in a total of four duals through the  second, third, fourth and fifth rounds of the NCAA Wrestling Championship.  After that round, the athlete will train to compete for a weight class title at the NCAA Wrestling Championships."
        );
      }
      if (showAdmins) {
        activateClass("adminDirect", true);
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    } else if (indEv == "1") {
      //needs at large
      if (!document.getElementById("teamBye").checked) {
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team will compete in a total of five duals in the first, second, third, fourth, and fifth rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
        );
      } else {
        updateNotes(
          "The athlete has not yet qualified for the NCAA Wrestling Championships.  The athlete's team has earned a bye in the first round and will compete in a total of four duals in the second, third, fourth, and fifth rounds of the NCAA Wrestling Championship. In order to compete for a weight class championship at the NCAA Wrestling Championships, the athlete will need to earn an at-large bid."
        );
      }
      if (showAdmins) {
        activateClass("adminInd", true);
        activateClass("adminTeam", true);
      }
    }
  }
}
function getRandom() {
  return Math.trunc(Math.random() * 10) + 1;
}
function flipCoin() {
  var num = getRandom();
  if (num > 5.5) {
    return true;
  }
  return false;
}

function load() {
  showByID("error", false);
  showByID("error2", false);
  showByID("toggles", false);
  if (document.getElementById("mobileNote").style.display == "none") {
    showByID("mobileNote", false);
  }
}
var load = load();
