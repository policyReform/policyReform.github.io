
    var venues = [];
    var teamABVtoFull = new Map();
    var venueList = [{latitude:38.9371, longitude: -77.0869, name:'American',type:'dual','abv':'au',toggle:'TRUE',max:555},
    {latitude:33.421, longitude:-111.933, name:'Arizona State',type:'dual','abv':'azsu',toggle:'TRUE',max:8522},
    {latitude:42.0888, longitude:-75.967, name:'Binghamton',type:'dual','abv':'bing',toggle:'TRUE',max:3019},
    {latitude:41.008, longitude:-76.448, name:'Bloomsburg',type:'dual','abv':'bup',toggle:'TRUE',max:612},
    {latitude:41.827, longitude: -71.403, name:'Brown',type:'dual','abv':'brown',toggle:'TRUE',max:200},
    {latitude:40.955, longitude: -76.883, name:'Bucknell',type:'dual','abv':'buck',toggle:'TRUE',max:2127},
    {latitude:35.301667, longitude:-120.659819, name:'Cal Poly',type:'dual','abv':'cpu',toggle:'TRUE',max:2000},
    {latitude:33.93, longitude: -117.425, name:'California Baptist',type:'dual','abv':'cbu',toggle:'TRUE',max:3552},
    {latitude:35.35, longitude:-119.104, name:'CSU Bakersfield',type:'dual','abv':'csub',toggle:'TRUE',max:843},
    {latitude:43.5898, longitude:-84.7775, name:'Central Michigan',type:'dual','abv':'cmu',toggle:'TRUE',max:4273},
    {latitude:41.209, longitude:-79.378, name:'Clarion',type:'dual','abv':'cup',toggle:'TRUE',max:238},
    {latitude:41.5017, longitude:-81.6751, name:'Cleveland State',type:'dual','abv':'csu',toggle:'TRUE',max:2502},
    {latitude:42.453611, longitude:-76.473889, name:'Cornell',type:'dual','abv':'cornell',toggle:'TRUE',max:4425},
    {latitude:39.954, longitude:-75.188, name:'Drexel',type:'dual','abv':'drex',toggle:'TRUE',max:1070},
    {latitude:41.87, longitude: -80.122, name:'Edinboro',type:'dual','abv':'eup',toggle:'TRUE',max:3129},
    {latitude:40.046944, longitude:-76.320556, name:'Franklin & Marshall',type:'dual','abv':'fm',toggle:'TRUE',max:153},
    {latitude:40.714606, longitude:-73.600458, name:'Hofstra',type:'dual','abv':'hofstra',toggle:'TRUE',max:2228},
    {latitude:39.167222, longitude:-86.521389, name:'Indiana',type:'dual','abv':'iu',toggle:'TRUE',max:1962},
    {latitude:42.026111, longitude:-93.648333, name:'Iowa State',type:'dual','abv':'isu',toggle:'TRUE',max:11238},
    {latitude:41.146944, longitude:-81.343333, name:'Kent State',type:'dual','abv':'kent',toggle:'TRUE',max:469},
    {latitude:40.607167, longitude:-75.379, name:'Lehigh',type:'dual','abv':'lu',toggle:'TRUE',max:9896},
    {latitude:41.141, longitude:-77.461, name:'Lock Haven',type:'dual','abv':'lhu',toggle:'TRUE',max:2503},
    {latitude:38.9875, longitude: -76.94, name:'Maryland',type:'dual','abv':'md',toggle:'TRUE',max:2779},
    {latitude:40.110556, longitude:-88.228333, name:'Illinois',type:'dual','abv':'il',toggle:'TRUE',max:3573},
    {latitude:43, longitude: -78.789167, name:'Buffalo',type:'dual','abv':'buff',toggle:'TRUE',max:174},
    {latitude:41.393, longitude: -73.958, name:'Army West Point',type:'dual','abv':'army',toggle:'TRUE',max:1898},
    {latitude:40.28, longitude:-74.738, name:'Rider',type:'dual','abv':'rider',toggle:'TRUE',max:1600},
    {latitude:40.5025, longitude: -74.448611, name:'Rutgers',type:'dual','abv':'ru',toggle:'TRUE',max:16178},
    {latitude:41.175833, longitude:-73.271944, name:'Sacred Heart',type:'dual','abv':'shu',toggle:'TRUE',max:310},
    {latitude:44.318056, longitude: -96.783333, name:'South Dakota State',type:'dual','abv':'sdsu',toggle:'TRUE',max:4087},
    {latitude:38.793396, longitude: -90, name:'SIU-Edwardsville',type:'dual','abv':'siue',toggle:'TRUE',max:200},
    {latitude:37.428229, longitude:-122.168858, name:'Stanford',type:'dual','abv':'stan',toggle:'TRUE',max:2504},
    {latitude:32.797222, longitude: -79.961111, name:'The Citadel',type:'dual','abv':'cit',toggle:'TRUE',max:200},
    {latitude:39.01, longitude: -104.89, name:'Air Force',type:'dual','abv':'air',toggle:'TRUE',max:707},
    {latitude:43.075, longitude: -89.417222, name:'Wisconsin',type:'dual','abv':'wisc',toggle:'TRUE',max:4165},
    {latitude:41.313056, longitude: -105.581389, name:'Wyoming',type:'dual','abv':'wy',toggle:'TRUE',max:1753},
    {latitude:39.63582, longitude: -79.95453, name:'West Virginia',type:'dual','abv':'wvu',toggle:'TRUE',max:4517},
    {latitude:36.001111, longitude:-78.938889, name:'Duke',type:'dual','abv':'duke',toggle:'TRUE',max:200},
    {latitude:35.49999, longitude:-80.845296, name:'Davidson',type:'dual','abv':'david',toggle:'TRUE',max:200},
    {latitude:36.213843, longitude: -81.678621, name:'Appalachian State',type:'dual','abv':'app',toggle:'TRUE',max:200},
    {latitude:38.2198, longitude: -85.703, name:'Bellarmine',type:'dual','abv':'bell',toggle:'TRUE',max:200},
    {latitude:35.0458, longitude:-85.2999, name:'Chattanooga',type:'dual','abv':'utc',toggle:'TRUE',max:1600},
    {latitude:34.722472, longitude:-92.34065, name:'Little Rock',type:'dual','abv':'ualr',toggle:'TRUE',max:1543},
    {latitude:42.276944, longitude: -83.738056, name:'Michigan',type:'dual','abv':'mich',toggle:'TRUE',max:8303},
    {latitude:41.661667, longitude:-91.536389, name:'Iowa',type:'dual','abv':'iowa',toggle:'TRUE',max:42287},
    {latitude:44.974747, longitude:-93.235353, name:'Minnesota',type:'dual','abv':'umn',toggle:'TRUE',max:15646},
    {latitude:42.725, longitude:-84.48, name:'Michigan State',type:'dual','abv':'msu',toggle:'TRUE',max:3349},
    {latitude:38.9453, longitude:-92.3288, name:'Missouri',type:'dual','abv':'mizz',toggle:'TRUE',max:6197},
    {latitude:38.9828, longitude:-76.4851, name:'Navy',type:'dual','abv':'navy',toggle:'TRUE',max:3517},
    {latitude:40.8175, longitude:-96.701389, name:'Nebraska',type:'dual','abv':'neb',toggle:'TRUE',max:5960},
    {latitude:40.444565, longitude: -79.953274, name:'Pittsburgh',type:'dual','abv':'pitt',toggle:'TRUE',max:7103},
    {latitude:38.035556, longitude: -78.503333, name:'Virginia',type:'dual','abv':'uva',toggle:'TRUE',max:1798},
    {latitude:37.225, longitude: -80.425, name:'Virginia Tech',type:'dual','abv':'vt',toggle:'TRUE',max:5079},
    {latitude:40.277778, longitude:-111.713889, name:'Utah Valley',type:'dual','abv':'uvu',toggle:'TRUE',max:2846},
    {latitude:37.79, longitude: -79.44, name:'VMI',type:'dual','abv':'vmi',toggle:'TRUE',max:205},
    {latitude:39.95, longitude: -75.19, name:'Penn',type:'dual','abv':'penn',toggle:'TRUE',max:5109},
    {latitude:40.798333, longitude: -77.86, name:'Penn State',type:'dual','abv':'psu',toggle:'TRUE',max:15998},
    {latitude:44.565833, longitude: -123.278889, name:'Oregon State',type:'dual','abv':'orsu',toggle:'TRUE',max:3243},
    {latitude:40.425, longitude:-86.923056, name:'Purdue',type:'dual','abv':'purdue',toggle:'TRUE',max:2308},
    {latitude:40.345278, longitude:-74.656111, name:'Princeton',type:'dual','abv':'princeton',toggle:'TRUE',max:2284},
    {latitude:42.515, longitude: -92.460556, name:'Northern Iowa',type:'dual','abv':'uni',toggle:'TRUE',max:5831},
    {latitude:42.0548, longitude: -87.6739, name:'Northwestern',type:'dual','abv':'nw',toggle:'TRUE',max:1283},
    {latitude:40, longitude:-83.0125, name:'Ohio State',type:'dual','abv':'tosu',toggle:'TRUE',max:15338},
    {latitude:35.208611, longitude: -97.445833, name:'Oklahoma',type:'dual','abv':'ou',toggle:'TRUE',max:4553},
    {latitude:36.132222, longitude: -97.080833, name:'Oklahoma State',type:'dual','abv':'okst',toggle:'TRUE',max:14059},
    {latitude:40.404853, longitude:-104.696741, name:'Northern Colorado',type:'dual','abv':'unco',toggle:'TRUE',max:1086},
    {latitude:35.787222, longitude:-78.670556, name:'NC State',type:'dual','abv':'ncsu',toggle:'TRUE',max:4383},
    {latitude:35.908611, longitude: -79.049167, name:'North Carolina',type:'dual','abv':'uncch',toggle:'TRUE',max:1183},
    {latitude:39.324, longitude: -82.102, name:'Ohio',type:'dual','abv':'ohio',toggle:'TRUE',max:200},
    {latitude:46.8917, longitude:-96.8, name:'North Dakota State',type:'dual','abv':'ndsu',toggle:'TRUE',max:615},
    {latitude:41.933889, longitude:-88.777778, name:'Northern Illinois',type:'dual','abv':'niu',toggle:'TRUE',max:405},
    {latitude:36.813333, longitude: -119.75, name:'Fresno State',type:'dual','abv':'fsu',toggle:'FALSE',max:9750},
    {latitude:36.88654, longitude: -76.30522, name:'Old Dominion',type:'dual','abv':'odu',toggle:'FALSE',max:1489},
    {latitude:35.4099, longitude:-78.7403, name:'Campbell',type:'dual','abv':'camp',toggle:'TRUE',max:200},
    {latitude:40.8075, longitude:-73.961944, name:'Columbia',type:'dual','abv':'columbia',toggle:'TRUE',max:200},
    {latitude:35.247456, longitude:-81.670622, name:'Gardner-Webb ',type:'dual','abv':'gwu',toggle:'TRUE',max:200},
    {latitude:38.831, longitude:-77.308, name:'George Mason ',type:'dual','abv':'gmu',toggle:'TRUE',max:200},
    {latitude:42.374444, longitude:-71.116944, name:'Harvard ',type:'dual','abv':'harvard',toggle:'TRUE',max:200},
    {latitude:38.787, longitude: -90.503, name:'Lindenwood ',type:'dual','abv':'lin',toggle:'TRUE',max:200},
    {latitude:40.818889, longitude:-73.593889, name:'Long Island ',type:'dual','abv':'liu',toggle:'TRUE',max:200},
    {latitude:39.344, longitude: -76.585, name:'Morgan State ',type:'dual','abv':'morg',toggle:'TRUE',max:200},
    {latitude:34.464444, longitude: -81.87, name:'Presbyterian',type:'dual','abv':'pres',toggle:'TRUE',max:200},
    {latitude:35.188833, longitude: -80.832318, name:'Queens ',type:'dual','abv':'queens',toggle:'TRUE',max:200},
    {latitude:41.592667, longitude:-93.621139, name:'Wells Fargo Arena',type:'arena','abv':'',toggle:'FALSE',max:16110},
    {latitude:42.962222, longitude:-85.671944, name:'Van Andel Arena',type:'arena','abv':'',toggle:'FALSE',max:11500},
    {latitude:42.341111, longitude:-83.055, name:'Little Caesars Arena',type:'arena','abv':'',toggle:'FALSE',max:20332},
    {latitude:44.979444, longitude:-93.276111, name:'Target Center',type:'arena','abv':'',toggle:'FALSE',max:18798},
    {latitude:44.944722, longitude:-93.101111, name:'Xcel Energy Center',type:'arena','abv':'',toggle:'FALSE',max:17954},
    {latitude:38.626667, longitude:-90.2025, name:'Enterprise Center',type:'arena','abv':'',toggle:'FALSE',max:21000},
    {latitude:39.0975, longitude:-94.580278, name:'T-Mobile Center',type:'arena','abv':'',toggle:'FALSE',max:18972},
    {latitude:41.263, longitude:-95.928, name:'CHI Health Center Omaha',type:'arena','abv':'',toggle:'FALSE',max:18320},
    {latitude:40.733611, longitude:-74.171111, name:'Prudential Center',type:'arena','abv':'',toggle:'FALSE',max:18711},
    {latitude:39.355, longitude:-74.438611, name:'Boardwalk Hall',type:'arena','abv':'',toggle:'FALSE',max:11100},
    {latitude:40.712094, longitude:-73.727157, name:'UBS Arena',type:'arena','abv':'',toggle:'FALSE',max:17255},
    {latitude:40.750556, longitude:-73.993611, name:'Madison Square Garden',type:'arena','abv':'',toggle:'FALSE',max:19812},
    {latitude:40.682661, longitude:-73.975225, name:'Barclays Center',type:'arena','abv':'',toggle:'FALSE',max:17732},
    {latitude:39.969283, longitude:-83.006111, name:'Nationwide Arena',type:'arena','abv':'',toggle:'FALSE',max:19500},
    {latitude:41.496389, longitude:-81.688056, name:'Rocket Mortgage FieldHouse',type:'arena','abv':'',toggle:'FALSE',max:19432},
    {latitude:35.463333, longitude:-97.515, name:'Paycom Center',type:'arena','abv':'',toggle:'FALSE',max:18203},
    {latitude:36.152722, longitude:-95.996333, name:'BOK Center',type:'arena','abv':'',toggle:'FALSE',max:17839},
    {latitude:39.901111, longitude:-75.171944, name:'Wells Fargo Center',type:'arena','abv':'',toggle:'FALSE',max:20318},
    {latitude:40.439444, longitude:-79.989167, name:'PPG Paints Arena',type:'arena','abv':'',toggle:'FALSE',max:19000},
    {latitude:40.286389, longitude:-76.669167, name:'Giant Center',type:'arena','abv':'',toggle:'FALSE',max:10500},
    {latitude:43.561667, longitude:-96.75, name:'Denny Sanford Premier Center',type:'arena','abv':'',toggle:'FALSE',max:12000},
    {latitude:43.045028, longitude:-87.918167, name:'Fiserv Forum',type:'arena','abv':'',toggle:'FALSE',max:17385},
    {latitude:38.898056, longitude:-77.020833, name:'Capital One Arena',type:'arena','abv':'',toggle:'FALSE',max:20356},
    {latitude:40.6025, longitude:-75.472778, name:'PPL Center',type:'arena','abv':'',toggle:'FALSE',max:9000},
    {latitude:38.747768, longitude:-90.509443, name:'Family Arena',type:'arena','abv':'',toggle:'FALSE',max:10467},
    {latitude:42.071694, longitude:-88.209456, name:'Now Arena',type:'arena','abv':'',toggle:'FALSE',max:10543},
    {latitude:41.507837, longitude:-90.520437, name:'Tax Slayer Center',type:'arena','abv':'',toggle:'FALSE',max:9200},
    {latitude:34.852789, longitude:-82.391458, name:'Bon Secours Wellness Arena',type:'arena','abv':'',toggle:'FALSE',max:15000},
    {latitude:41.853611, longitude:-87.621389, name:'Wintrust Arena',type:'arena','abv':'',toggle:'FALSE',max:10387},
    {latitude:40.817778, longitude:-96.713333, name:'Pinnacle Bank Arena',type:'arena','abv':'',toggle:'FALSE',max:15500},
    {latitude:35.225, longitude:-80.839167, name:'Spectrum Center',type:'arena','abv':'',toggle:'FALSE',max:19077},
    {latitude:33.757222, longitude:-84.396389, name:'State Farm Arena',type:'arena','abv':'',toggle:'FALSE',max:16600},
    {latitude:39.763889, longitude:-86.155556, name:'Gainbridge Fieldhouse',type:'arena','abv':'',toggle:'FALSE',max:17923},
    {latitude:38.747768, longitude:-90.509443, name:'Family Arena',type:'arena','abv':'',toggle:'FALSE',max:10467},
    {latitude:35.37208, longitude:-119.013723, name:'Mechanics Bank Arena',type:'arena','abv':'',toggle:'FALSE',max:9333},
    {latitude:42.005278, longitude:-87.887778, name:'Allstate Arena',type:'arena','abv':'',toggle:'FALSE',max:17500},
    {latitude:39.748611, longitude:-105.0075, name:'Ball Arena',type:'arena','abv':'',toggle:'FALSE',max:19155},
    {latitude:35.803333, longitude:-78.721944, name:'PNC Arena',type:'arena','abv':'',toggle:'FALSE',max:19722},
    {latitude:40.768333, longitude:-111.901111, name:'Vivint Arena',type:'arena','abv':'',toggle:'FALSE',max:18360},
    {latitude:40.702722, longitude:-111.950417, name:'Maverik Center',type:'arena','abv':'',toggle:'FALSE',max:12500},
    {latitude:34.072947, longitude:-117.566401, name:'Toyota Arena',type:'arena','abv':'',toggle:'FALSE',max:10832},
    {latitude:36.733093, longitude:-119.78271, name:'Selland Arena',type:'arena','abv':'',toggle:'FALSE',max:9000},
    {latitude:42.648611, longitude:-73.754722, name:'MVP Arena',type:'arena','abv':'',toggle:'FALSE',max:15229},
    {latitude:43.153694, longitude:-77.610778, name:'Blue Cross Arena',type:'arena','abv':'',toggle:'FALSE',max:10662}
    ];    
    var firstRun = true;
    
    function reloadConferenceMap() {
        var oldDiv = document.getElementById("conferenceMap");
        if (oldDiv != undefined) {

            oldDiv.remove();
        }
        newDiv = document.createElement("div");
        newDiv.setAttribute("id", "conferenceMap");
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.position ='absolute';
        newDiv.style.left = "-47%";
        newDiv.style.top = "-155%";
        //newDiv.style.margin = "10% 10px 20px 10%";


        document.getElementById("conferenceMapAfter").insertAdjacentElement('afterend', newDiv);
        loadConferenceMap();
        
    }
    var conferenceMembershipForMap = [];
    function bubbleConferenceMap(){
        conferenceMembershipForMap = [];
        teamABVToConferenceMap.forEach((values, keys) => {
            var team = teamABVtoFull.get(keys);
            var conference = teamABVToConferenceMap.get(keys);
            var i = conferenceArray.indexOf(conference);

            if(team != undefined && i != undefined && conferenceMembershipForMap != undefined){
                bubbleIt(team, conference, conferenceMembershipForMap);
            }else{
            }
            
        
        });
        confMap.bubbles(
            conferenceMembershipForMap
        );

    }
    
    
    function reloadChampionshipMap() {
        var oldDiv = document.getElementById("championshipMap");
        if (oldDiv != undefined) {
            oldDiv.remove();
        }
        newDiv = document.createElement("div");
        newDiv.setAttribute("id", "championshipMap");
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";


        document.getElementById("mapAfterThis").insertAdjacentElement('afterend', newDiv);
        loadMap();
        bubbleMap();
    }
    function bubbleMap() {
        //reloadChampionshipMap();

        var selectedVenue = document.getElementById('venueSelectionPicklist').value;
        var showSchools = document.getElementById('showSchools').checked;

        var showVenues = document.getElementById('showVenues').checked;
        

        var arenaLat, arenaLong;
        var selectedVenueData;
        venues = [];
        if (selectedVenue != '') {
            for (var i = 0; i < venueList.length; i++) {
                if (selectedVenue == venueList[i].name) {
                    arenaLat = venueList[i].latitude;
                    arenaLong = venueList[i].longitude;
                    selectedVenueData = venueList[i]

                    break;
                }
            }
        }


        //check all the other venues.  Skip if they are within 600 miles.
        var miles = 600;

        for (var i = 0; i < venueList.length; i++) {
            if(true && venueList[i].type == 'dual'){
                
                teamABVtoFull.set(venueList[i].abv,venueList[i]);
            }
            //show arenas if selected
            if (venueList[i].type == 'arena' && showVenues) {
                //if a individual championship site is selected, limit the display of venues to within the mileage range.
                if (selectedVenue != '') {
                    //check distance
                    if (distance(arenaLat, arenaLong, venueList[i].latitude, venueList[i].longitude) > miles) {
                        bubbleIt(venueList[i], venueList[i].type, venues);
                    }
                } else {
                    bubbleIt(venueList[i], venueList[i].type, venues);
                }

            } else if (venueList[i].type == 'dual' && venueList[i].toggle == 'TRUE' && showSchools) {
                //show schools if selected
                bubbleIt(venueList[i], venueList[i].type, venues);
            } else {
                
            }
        }
        //add the selected venue last so it is always on top
        if (selectedVenueData != undefined) {
            bubbleIt(selectedVenueData, 'marker', venues);
        }

        //add all of the venues to display to the map
        champMap.bubbles(
            venues
        );
        firstRun = false;
    }
    function bubbleIt(v, type,arrayToUpdate) {
        var o = new Object();
        o.name = v.name ;
        if(v.type == 'arena'){
            o.name += ' (' + v.max.toLocaleString('en-US') + ')'
        }
        

        o.fillOpacity = 1;
        o.fillKey = type;
        o.borderWidth = 0;


        o.latitude = v.latitude;
        o.longitude = v.longitude;

        o.radius = v.type == 'arena' ? 3.5 : 2.5;
        arrayToUpdate.push(o);
    }
    function distance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km (change this constant to get miles)
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c) * 0.62137119;
        return Math.round(d);
    }

    var champMap;
    function loadMap() {

        champMap = new Datamap({
            element: document.getElementById("championshipMap"),
            scope: 'usa',// Currently supports 'usa' and 'world', however with custom map data you can specify your own
            projection: 'mercator',//'equirectangular', // Style of projection to be used. try "mercator"
            height: null, // If not null, datamaps will grab the height of 'element'
            width: null, // If not null, datamaps will grab the width of 'element',
            responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
            done: function () { }, // Callback when the map is done drawing
            fills: {
                defaultFill: '#d4e4f7',//'#e6f0e9', // The keys in this object map to the "fillKey" of [data] or [bubbles]
                'arena': 'black',//'#f50f26',
                'dual': '#2515d1',
                'hs': '#fabfb9',
                'marker': 'red'
            },
            //data: statesToHighlight,//statesToHighlight,
            dataType: 'json', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
            dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
            geographyConfig: {
                dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
                hideAntarctica: true,
                hideHawaiiAndAlaska: true,
                borderWidth: 1,
                borderOpacity: 1,
                borderColor: 'grey',//'#FDFDFD',
                /* popupTemplate: function (geography, data) { // This function should just return a string
                   return '&lt;div class="hoverinfo"&gt;&lt;strong&gt;' + geography.properties.name + '&lt;/strong&gt;&lt;/div&gt;';
                 },*/
                popupOnHover: true, // True to show the popup while hovering
                highlightOnHover: true,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1
            },
            bubblesConfig: {
                borderWidth: .2,
                borderOpacity: 1,
                borderColor: 'grey',//'#FFFFFF',
                popupOnHover: true, // True to show the popup while hovering
                radius: null,
                popupTemplate: function (geography, data) { // This function should just return a string
                    return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
                },
                fillOpacity: 0.5,
                animate: true,
                highlightOnHover: true,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1,
                highlightFillOpacity: 0.85,
                exitDelay: 100, // Milliseconds
                key: JSON.stringify
            }
        });

        window.onresize = function () {
            champMap.resize();
        }
    }

    var confMap;
    function loadConferenceMap() {
        confMap = new Datamap({
            element: document.getElementById("conferenceMap"),
            scope: 'usa',// Currently supports 'usa' and 'world', however with custom map data you can specify your own
            projection: 'mercator',//'equirectangular', // Style of projection to be used. try "mercator"
            height: null, // If not null, datamaps will grab the height of 'element'
            width: null, // If not null, datamaps will grab the width of 'element',
            responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
            done: function () { }, // Callback when the map is done drawing
            fills: {
                defaultFill: 'white', // The keys in this object map to the "fillKey" of [data] or [bubbles]
                'arena': 'black',//'#f50f26',
                'dual': '#2515d1',
                'hs': '#fabfb9',
                'marker': 'red',
                'Big Ten':'#4363d8',
                'ACC':'#e6194B',
                'EIWA':'#3cb44b',
                'MAC':'#ffe119',
                'Big 12':'#f58231',
                'Pac-12':'#911eb4',
                'Southern (SoCon)':'#42d4f4',
                'Colonial (CAA)':'#f032e6',
                'Pennsylvania State Ath. Con. (PSAC)':'#bfef45',
                'Patriot League':'#fabed4',
                'Big South':'#800000',
                'Ivy League':'#003c30',
                'Mountain West (MWC)':'#9A6324',
                'Summit League':'#469990',
                'Western Athleic Conference (WAC)':'#000075',
                'Northeast (NEC)':'#808000',
                'Ohio Valley (OVC)':'#a97afa',
                'Independent':'#ffd8b1',
                'Big West':'#01665e',
                'Mountain Pacific Sports Federation (MPSF)':'#dcbeff',
                'Atlantic 10':'#8c510a',
                'Atlantic Sun (A-Sun)':'#543005'
            },
            //data: statesToHighlight,//statesToHighlight,
            dataType: 'json', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
            dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
            geographyConfig: {
                dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
                hideAntarctica: true,
                hideHawaiiAndAlaska: true,
                borderWidth: .25,
                //borderOpacity: 10,
                borderColor: 'black',//'#FDFDFD',
                /* popupTemplate: function (geography, data) { // This function should just return a string
                   return '&lt;div class="hoverinfo"&gt;&lt;strong&gt;' + geography.properties.name + '&lt;/strong&gt;&lt;/div&gt;';
                 },*/
                popupOnHover: false, // True to show the popup while hovering
                highlightOnHover: false,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1
            },
            bubblesConfig: {
                borderWidth: 2,
                //borderOpacity: 1,
                //borderColor: 'black',//'#FFFFFF',
                popupOnHover: true, // True to show the popup while hovering
                radius: null,
                popupTemplate: function (geography, data) { // This function should just return a string
                    return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
                },
                fillOpacity: 0.5,
                animate: true,
                highlightOnHover: true,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1,
                highlightFillOpacity: 0.85,
                exitDelay: 100, // Milliseconds
                key: JSON.stringify
            }
        });

        window.onresize = function () {
            confMap.resize();
        }
    }
