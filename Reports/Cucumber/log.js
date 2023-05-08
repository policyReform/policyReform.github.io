	
		var currentURL;
        var loggedIn = false;//keyGranted();
        //var loggedIn = keyGranted();
        var requestedPage;
        var currentPage;
        var matrix = [{"k":"angrysize","id":"9821"},{"k":"feelneed","id":"9822"},{"k":"todaynoon","id":"9823"},{"k":"eastspell","id":"9824"},{"k":"elsetree","id":"9825"},{"k":"seemseven","id":"9826"},{"k":"scorefind","id":"9827"},{"k":"typemuch","id":"9828"},{"k":"facestar","id":"9829"},{"k":"whosebuilt","id":"9830"},{"k":"gladlong","id":"9831"},{"k":"suitNepal","id":"9832"},{"k":"wildnews","id":"9833"},{"k":"feartall","id":"9834"},{"k":"Congofifth","id":"9835"},{"k":"cropsround","id":"9836"},{"k":"guardmade","id":"9837"},{"k":"duckfight","id":"9838"},{"k":"tubeduty","id":"9839"},{"k":"stormmusic","id":"9840"},{"k":"throwgreat","id":"9841"},{"k":"seemlead","id":"9842"},{"k":"niecejudge","id":"9843"},{"k":"ninespeed","id":"9844"},{"k":"ironseeds","id":"9845"},{"k":"pickfifth","id":"9846"},{"k":"womandance","id":"9847"},{"k":"darepair","id":"9848"},{"k":"allowgrave","id":"9849"},{"k":"piecepaint","id":"9850"},{"k":"thinbegin","id":"9851"},{"k":"graveroll","id":"9852"},{"k":"alongsays","id":"9853"},{"k":"thereduty","id":"9854"},{"k":"Spainarms","id":"9855"},{"k":"moonjoin","id":"9856"},{"k":"pushangle","id":"9857"},{"k":"landgive","id":"9858"},{"k":"elseheavy","id":"9859"},{"k":"losebones","id":"9860"},{"k":"grownwater","id":"9861"},{"k":"placedish","id":"9862"},{"k":"thinglose","id":"9863"},{"k":"beenneed","id":"9864"},{"k":"coastbegan","id":"9865"},{"k":"noisewild","id":"9866"},{"k":"chairchief","id":"9867"},{"k":"busyrest","id":"9868"},{"k":"coolfool","id":"9869"},{"k":"Maltabeen","id":"9870"},{"k":"drinkwear","id":"9871"},{"k":"sinceever","id":"9872"},{"k":"enemytrack","id":"9873"},{"k":"hugeafter","id":"9874"},{"k":"CubaJune","id":"9875"},{"k":"fieldunder","id":"9876"},{"k":"abovecross","id":"9877"},{"k":"shallguide","id":"9878"},{"k":"landtest","id":"9879"},{"k":"amongstand","id":"9880"},{"k":"blockheard","id":"9881"},{"k":"whichsail","id":"9882"},{"k":"somehome","id":"9883"},{"k":"enemyduty","id":"9884"},{"k":"broadbelow","id":"9885"},{"k":"everyshake","id":"9886"},{"k":"listcloth","id":"9887"},{"k":"fromleft","id":"9888"},{"k":"racequick","id":"9889"},{"k":"longfavor","id":"9890"},{"k":"hersenjoy","id":"9891"},{"k":"fifthwith","id":"9892"},{"k":"feetfact","id":"9893"},{"k":"sensegave","id":"9894"},{"k":"wheredear","id":"9895"},{"k":"greatless","id":"9896"},{"k":"againmany","id":"9897"},{"k":"spotbuilt","id":"9898"},{"k":"tillform","id":"9899"},{"k":"largeterms","id":"9900"},{"k":"loveMarch","id":"9901"},{"k":"sandnerve","id":"9902"},{"k":"washslow","id":"9903"},{"k":"plainleast","id":"9904"},{"k":"talksell","id":"9905"},{"k":"heretouch","id":"9906"},{"k":"worldheat","id":"9907"},{"k":"saidtalk","id":"9908"},{"k":"weakshort","id":"9909"},{"k":"labormoney","id":"9910"},{"k":"nounsuch","id":"9911"},{"k":"thatocean","id":"9912"},{"k":"stickmade","id":"9913"},{"k":"meetshop","id":"9914"},{"k":"moonfound","id":"9915"},{"k":"ironthem","id":"9916"},{"k":"ninefifth","id":"9917"},{"k":"lightcross","id":"9918"},{"k":"marchwhat","id":"9919"},{"k":"roadtype","id":"9920"},{"k":"laborTokyo","id":"9921"},{"k":"startneck","id":"9922"},{"k":"fullrest","id":"9923"},{"k":"stepshop","id":"9924"},{"k":"knownbread","id":"9925"},{"k":"heldwell","id":"9926"},{"k":"coldglad","id":"9927"},{"k":"hurtfast","id":"9928"},{"k":"meatknown","id":"9929"},{"k":"gaveJuly","id":"9930"},{"k":"withnone","id":"9931"},{"k":"enjoyweak","id":"9932"},{"k":"hallmine","id":"9933"},{"k":"tripdish","id":"9934"},{"k":"polesame","id":"9935"},{"k":"feetclose","id":"9936"},{"k":"mustinch","id":"9937"},{"k":"gonegame","id":"9938"},{"k":"bothgold","id":"9939"},{"k":"grewfree","id":"9940"},{"k":"fishkill","id":"9941"},{"k":"joincook","id":"9942"},{"k":"oughtbeen","id":"9943"},{"k":"fivefield","id":"9944"},{"k":"smallpoint","id":"9945"},{"k":"giveteach","id":"9946"},{"k":"fortythese","id":"9947"},{"k":"thinghalt","id":"9948"},{"k":"tallPluto","id":"9949"},{"k":"meatsent","id":"9950"},{"k":"wordedge","id":"9951"},{"k":"centspaper","id":"9952"},{"k":"lowernever","id":"9953"},{"k":"shortfight","id":"9954"},{"k":"madebuilt","id":"9955"},{"k":"storysand","id":"9956"},{"k":"newsforce","id":"9957"},{"k":"wheelprice","id":"9958"},{"k":"ruleshot","id":"9959"},{"k":"thusmeet","id":"9960"},{"k":"jumpfair","id":"9961"},{"k":"jumpcried","id":"9962"},{"k":"criedmarch","id":"9963"},{"k":"trainroad","id":"9964"},{"k":"lifeears","id":"9965"},{"k":"weeklead","id":"9966"},{"k":"wrotedaily","id":"9967"},{"k":"carefound","id":"9968"},{"k":"stockshoe","id":"9969"},{"k":"heavydeath","id":"9970"},{"k":"Italyfair","id":"9971"},{"k":"fieldfifty","id":"9972"},{"k":"crowdfall","id":"9973"},{"k":"nailmark","id":"9974"},{"k":"proveApril","id":"9975"},{"k":"stonefancy","id":"9976"},{"k":"loudpush","id":"9977"},{"k":"chieffull","id":"9978"},{"k":"metalable","id":"9979"},{"k":"missEgypt","id":"9980"},{"k":"pushwaves","id":"9981"},{"k":"keptMoon","id":"9982"},{"k":"wisemajor","id":"9983"},{"k":"basewrong","id":"9984"},{"k":"waveswith","id":"9985"},{"k":"Moontried","id":"9986"},{"k":"understar","id":"9987"},{"k":"lordbean","id":"9988"},{"k":"signquite","id":"9989"},{"k":"servepower","id":"9990"},{"k":"heartcent","id":"9991"},{"k":"Romeship","id":"9992"},{"k":"losesaid","id":"9993"},{"k":"tiedsure","id":"9994"},{"k":"kepthard","id":"9995"},{"k":"causemake","id":"9996"},{"k":"lovesoon","id":"9997"},{"k":"holestart","id":"9998"},{"k":"musicwhose","id":"9999"},{"k":"beganride","id":"10000"},{"k":"soundVenus","id":"10001"},{"k":"hardsong","id":"10002"},{"k":"shirtjudge","id":"10003"},{"k":"pressshot","id":"10004"},{"k":"angerdish","id":"10005"},{"k":"noonapple","id":"10006"},{"k":"marrybird","id":"10007"},{"k":"musicseeds","id":"10008"},{"k":"majorwrong","id":"10009"},{"k":"floormany","id":"10010"},{"k":"landblack","id":"10011"},{"k":"laterbeat","id":"10012"},{"k":"fortyfence","id":"10013"},{"k":"mustspot","id":"10014"},{"k":"leaddown","id":"10015"},{"k":"enjoymuch","id":"10016"},{"k":"unclebird","id":"10017"},{"k":"lateSpain","id":"10018"},{"k":"blacklift","id":"10019"},{"k":"causesoft","id":"10020"},{"k":"bonethen","id":"10021"},{"k":"stockknown","id":"10022"},{"k":"shirtPeru","id":"10023"},{"k":"openlook","id":"10024"},{"k":"floortaste","id":"10025"},{"k":"marryflat","id":"10026"},{"k":"cameblue","id":"10027"},{"k":"finelate","id":"10028"},{"k":"liarpoor","id":"10029"},{"k":"Fijinorth","id":"10030"},{"k":"dreamstill","id":"10031"},{"k":"lifthuge","id":"10032"},{"k":"wifegood","id":"10033"},{"k":"breadalong","id":"10034"},{"k":"wagonrace","id":"10035"},{"k":"whiteleft","id":"10036"},{"k":"hallmetal","id":"10037"},{"k":"voicegold","id":"10038"},{"k":"couldhope","id":"10039"},{"k":"steelshop","id":"10040"},{"k":"leaddried","id":"10041"},{"k":"giveuntil","id":"10042"},{"k":"timedeep","id":"10043"},{"k":"everyfront","id":"10044"},{"k":"bellupon","id":"10045"},{"k":"ninesent","id":"10046"},{"k":"Kenyacorn","id":"10047"},{"k":"Asiaflier","id":"10048"},{"k":"fulltotal","id":"10049"},{"k":"bellgoes","id":"10050"},{"k":"gavemayor","id":"10051"},{"k":"studyplan","id":"10052"},{"k":"tinycoat","id":"10053"},{"k":"whatnice","id":"10054"},{"k":"smallMoon","id":"10055"},{"k":"heavytotal","id":"10056"},{"k":"deadshot","id":"10057"},{"k":"dutywish","id":"10058"},{"k":"whitegone","id":"10059"},{"k":"blackguess","id":"10060"},{"k":"hellospot","id":"10061"},{"k":"watershoe","id":"10062"},{"k":"planthouse","id":"10063"},{"k":"evenbegin","id":"10064"},{"k":"nightgood","id":"10065"},{"k":"Spainride","id":"10066"},{"k":"wantswell","id":"10067"},{"k":"poemcost","id":"10068"},{"k":"traintore","id":"10069"},{"k":"doorcross","id":"10070"},{"k":"stockrose","id":"10071"},{"k":"hangtried","id":"10072"},{"k":"termsslow","id":"10073"},{"k":"Italywater","id":"10074"},{"k":"leveltoday","id":"10075"},{"k":"trustknown","id":"10076"},{"k":"mayortell","id":"10077"},{"k":"latesays","id":"10078"},{"k":"fieldItaly","id":"10079"},{"k":"linedown","id":"10080"},{"k":"brokelabor","id":"10081"},{"k":"againdied","id":"10082"},{"k":"onlyserve","id":"10083"},{"k":"goodrope","id":"10084"},{"k":"spellform","id":"10085"},{"k":"wedgemuch","id":"10086"},{"k":"halltown","id":"10087"},{"k":"glasswhat","id":"10088"},{"k":"Junelegs","id":"10089"},{"k":"totalwhom","id":"10090"},{"k":"angerlabor","id":"10091"},{"k":"roomsize","id":"10092"},{"k":"bonespiece","id":"10093"},{"k":"sickwoman","id":"10094"},{"k":"feetangry","id":"10095"},{"k":"forceclean","id":"10096"},{"k":"handnine","id":"10097"},{"k":"ropegreen","id":"10098"},{"k":"typeserve","id":"10099"},{"k":"meansmall","id":"10100"},{"k":"weekdeal","id":"10101"},{"k":"safedraw","id":"10102"},{"k":"careever","id":"10103"},{"k":"niecewaves","id":"10104"},{"k":"sleptsweet","id":"10105"},{"k":"stilldress","id":"10106"},{"k":"wifelike","id":"10107"},{"k":"birdshard","id":"10108"},{"k":"lineswim","id":"10109"},{"k":"paintpair","id":"10110"},{"k":"Japantest","id":"10111"},{"k":"bornwish","id":"10112"},{"k":"fearhurt","id":"10113"},{"k":"nonewhile","id":"10114"},{"k":"northgift","id":"10115"},{"k":"ringhalt","id":"10116"},{"k":"wherebird","id":"10117"},{"k":"ropemove","id":"10118"},{"k":"houseyard","id":"10119"},{"k":"happylegs","id":"10120"},{"k":"madecost","id":"10121"},{"k":"Asiatold","id":"10122"},{"k":"crowdcorn","id":"10123"},{"k":"doorfruit","id":"10124"},{"k":"greatchair","id":"10125"},{"k":"Marsalso","id":"10126"},{"k":"roomNepal","id":"10127"},{"k":"uncletouch","id":"10128"},{"k":"bringbelow","id":"10129"},{"k":"Marsseven","id":"10130"},{"k":"shalldare","id":"10131"},{"k":"holeangle","id":"10132"},{"k":"pastworth","id":"10133"},{"k":"laborroot","id":"10134"},{"k":"nervethat","id":"10135"},{"k":"applehunt","id":"10136"},{"k":"Indiashape","id":"10137"},{"k":"MarchPluto","id":"10138"},{"k":"teartrue","id":"10139"},{"k":"learnbreak","id":"10140"}];
        var approvedKeys =[];// = ['approve'];
        var matrixMap = new Map();
        var errorCount = 0;
        var menuActive = false;
        var scrollPosition =0;
        var yposition=0;
        function onLoad() {
            buildMatrixMap();
            checkLogin();
        }
        function buildMatrixMap(){
            for(i=0;i<matrix.length;i++){
                matrixMap.set(matrix[i].k,matrix[i].id);
                approvedKeys.push(matrix[i].k);
            }
        }
        function keyGranted(){
            var x = window.localStorage.getItem('CucumberPK');
            return (x == 'true');
        }
        function getPage(){
            var currentPathArray = document.location.href.split("/");
            return currentPathArray[currentPathArray.length -1];
        }
        function checkLogin() {
            //check if the key grants access
            if (!keyGranted()) {
                if( getPage() != 'login.html'){
                    requestedPage = document.location.href;
                    window.localStorage.setItem('requestedPage',requestedPage);
                    document.location.href="login.html";    
                }else{
                   
                }
            }else { 
                
                if( getPage() == 'login.html'){
                    //redirect
                    redirectToRequestedPage();
                }else{
                    makeDataViewable();
                }
            }
        }
        function showID(name,bool){
            if(document.getElementById(name) != undefined){
                document.getElementById(name).style.display = bool ? 'initial':'none';      
            }
        }

       
        function makeDataViewable(){
            showID('spin',false);
            showID('home',true);
            showID('menuBar',true);

        }
        function redirectToRequestedPage(){
            var routeTo = window.localStorage.getItem('requestedPage');
            if(routeTo == '' || routeTo == undefined ){
                document.location.href="home.html";  
            }else{
                document.location.href=routeTo;
            }
        }
        var ps = document.querySelector("#passSubmit");
        if(ps != undefined){
            ps.addEventListener("click", function (event) {
                var pk = document.getElementById("passKey");
                if (pk != undefined) {
                    if (approvedKeys.includes(pk.value)) {
                        window.localStorage.setItem('CucumberPK','true');
                        loggedIn = true;
                        //document.getElementById('loginError').style.visibility = "hidden";
                        document.getElementById('loginError').style.display = "none";
                        
                        //get the key mapping and padd to grant access
                        document.location.href="grantaccess.html?Rev=" + matrixMap.get(pk.value);
                        
                    } else {
                        errorCount++;
                        //document.getElementById('loginError').style.visibility = "visible";
                        document.getElementById('loginError').style.display = "";
                        document.getElementById('errorCount').innerText = errorCount;
                    }
                    event.preventDefault();
                }
            }, false);
    
        }
        function checkAccess(){
            if(keyGranted){
                redirectToRequestedPage();
            }else{
                document.location.href="login.html";
            }
        }
       

        $(".menu").click(function() {
            //added functionality to allow the menu to be viewable with canvas elements.  Added blur to handle
            if(menuActive){   
                //$( ".canvasjs-chart-container" ).css('z-index',1);
                $( ".canvasjs-chart-canvas" ).show();
                $( ".datamaps-subunits" ).show();
                $( "#home" ).removeClass( "blurIt" );
                menuActive = false;
            }else{
                //$( ".canvasjs-chart-container" ).css('z-index',-1000);
                $( ".canvasjs-chart-canvas" ).hide();
                $( ".datamaps-subunits" ).hide();
                
                $( "#home" ).addClass( "blurIt" );
                menuActive = true;
            }

            //standard functionality
            $(".menu").toggleClass("active");
            $(".navbar-menu").toggleClass("active");
          });

          