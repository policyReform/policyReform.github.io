var currentURL;
var loggedIn = false; //keyGranted();
//var loggedIn = keyGranted();
var requestedPage;
var currentPage;
var matrix = [
  { k: "angrysize".toLowerCase(), id: "9821" },
  { k: "feelneed".toLowerCase(), id: "9822" },
  { k: "todaynoon".toLowerCase(), id: "9823" },
  { k: "eastspell".toLowerCase(), id: "9824" },
  { k: "elsetree".toLowerCase(), id: "9825" },
  { k: "seemseven".toLowerCase(), id: "9826" },
  { k: "scorefind".toLowerCase(), id: "9827" },
  { k: "typemuch".toLowerCase(), id: "9828" },
  { k: "facestar".toLowerCase(), id: "9829" },
  { k: "whosebuilt".toLowerCase(), id: "9830" },
  { k: "gladlong".toLowerCase(), id: "9831" },
  { k: "suitNepal".toLowerCase(), id: "9832" },
  { k: "wildnews".toLowerCase(), id: "9833" },
  { k: "feartall".toLowerCase(), id: "9834" },
  { k: "Congofifth".toLowerCase(), id: "9835" },
  { k: "cropsround".toLowerCase(), id: "9836" },
  { k: "guardmade".toLowerCase(), id: "9837" },
  { k: "duckfight".toLowerCase(), id: "9838" },
  { k: "tubeduty".toLowerCase(), id: "9839" },
  { k: "stormmusic".toLowerCase(), id: "9840" },
  { k: "throwgreat".toLowerCase(), id: "9841" },
  { k: "seemlead".toLowerCase(), id: "9842" },
  { k: "niecejudge".toLowerCase(), id: "9843" },
  { k: "ninespeed".toLowerCase(), id: "9844" },
  { k: "ironseeds".toLowerCase(), id: "9845" },
  { k: "pickfifth".toLowerCase(), id: "9846" },
  { k: "womandance".toLowerCase(), id: "9847" },
  { k: "darepair".toLowerCase(), id: "9848" },
  { k: "allowgrave".toLowerCase(), id: "9849" },
  { k: "piecepaint".toLowerCase(), id: "9850" },
  { k: "thinbegin".toLowerCase(), id: "9851" },
  { k: "graveroll".toLowerCase(), id: "9852" },
  { k: "alongsays".toLowerCase(), id: "9853" },
  { k: "thereduty".toLowerCase(), id: "9854" },
  { k: "Spainarms".toLowerCase(), id: "9855" },
  { k: "moonjoin".toLowerCase(), id: "9856" },
  { k: "pushangle".toLowerCase(), id: "9857" },
  { k: "landgive".toLowerCase(), id: "9858" },
  { k: "elseheavy".toLowerCase(), id: "9859" },
  { k: "losebones".toLowerCase(), id: "9860" },
  { k: "grownwater".toLowerCase(), id: "9861" },
  { k: "placedish".toLowerCase(), id: "9862" },
  { k: "thinglose".toLowerCase(), id: "9863" },
  { k: "beenneed".toLowerCase(), id: "9864" },
  { k: "coastbegan".toLowerCase(), id: "9865" },
  { k: "noisewild".toLowerCase(), id: "9866" },
  { k: "chairchief".toLowerCase(), id: "9867" },
  { k: "busyrest".toLowerCase(), id: "9868" },
  { k: "coolfool".toLowerCase(), id: "9869" },
  { k: "Maltabeen".toLowerCase(), id: "9870" },
  { k: "drinkwear".toLowerCase(), id: "9871" },
  { k: "sinceever".toLowerCase(), id: "9872" },
  { k: "enemytrack".toLowerCase(), id: "9873" },
  { k: "hugeafter".toLowerCase(), id: "9874" },
  { k: "CubaJune".toLowerCase(), id: "9875" },
  { k: "fieldunder".toLowerCase(), id: "9876" },
  { k: "abovecross".toLowerCase(), id: "9877" },
  { k: "shallguide".toLowerCase(), id: "9878" },
  { k: "landtest".toLowerCase(), id: "9879" },
  { k: "amongstand".toLowerCase(), id: "9880" },
  { k: "blockheard".toLowerCase(), id: "9881" },
  { k: "whichsail".toLowerCase(), id: "9882" },
  { k: "somehome".toLowerCase(), id: "9883" },
  { k: "enemyduty".toLowerCase(), id: "9884" },
  { k: "broadbelow".toLowerCase(), id: "9885" },
  { k: "everyshake".toLowerCase(), id: "9886" },
  { k: "listcloth".toLowerCase(), id: "9887" },
  { k: "fromleft".toLowerCase(), id: "9888" },
  { k: "racequick".toLowerCase(), id: "9889" },
  { k: "longfavor".toLowerCase(), id: "9890" },
  { k: "hersenjoy".toLowerCase(), id: "9891" },
  { k: "fifthwith".toLowerCase(), id: "9892" },
  { k: "feetfact".toLowerCase(), id: "9893" },
  { k: "sensegave".toLowerCase(), id: "9894" },
  { k: "wheredear".toLowerCase(), id: "9895" },
  { k: "greatless".toLowerCase(), id: "9896" },
  { k: "againmany".toLowerCase(), id: "9897" },
  { k: "spotbuilt".toLowerCase(), id: "9898" },
  { k: "tillform".toLowerCase(), id: "9899" },
  { k: "largeterms".toLowerCase(), id: "9900" },
  { k: "loveMarch".toLowerCase(), id: "9901" },
  { k: "sandnerve".toLowerCase(), id: "9902" },
  { k: "washslow".toLowerCase(), id: "9903" },
  { k: "plainleast".toLowerCase(), id: "9904" },
  { k: "talksell".toLowerCase(), id: "9905" },
  { k: "heretouch".toLowerCase(), id: "9906" },
  { k: "worldheat".toLowerCase(), id: "9907" },
  { k: "saidtalk".toLowerCase(), id: "9908" },
  { k: "weakshort".toLowerCase(), id: "9909" },
  { k: "labormoney".toLowerCase(), id: "9910" },
  { k: "nounsuch".toLowerCase(), id: "9911" },
  { k: "thatocean".toLowerCase(), id: "9912" },
  { k: "stickmade".toLowerCase(), id: "9913" },
  { k: "meetshop".toLowerCase(), id: "9914" },
  { k: "moonfound".toLowerCase(), id: "9915" },
  { k: "ironthem".toLowerCase(), id: "9916" },
  { k: "ninefifth".toLowerCase(), id: "9917" },
  { k: "lightcross".toLowerCase(), id: "9918" },
  { k: "marchwhat".toLowerCase(), id: "9919" },
  { k: "roadtype".toLowerCase(), id: "9920" },
  { k: "laborTokyo".toLowerCase(), id: "9921" },
  { k: "startneck".toLowerCase(), id: "9922" },
  { k: "fullrest".toLowerCase(), id: "9923" },
  { k: "stepshop".toLowerCase(), id: "9924" },
  { k: "knownbread".toLowerCase(), id: "9925" },
  { k: "heldwell".toLowerCase(), id: "9926" },
  { k: "coldglad".toLowerCase(), id: "9927" },
  { k: "hurtfast".toLowerCase(), id: "9928" },
  { k: "meatknown".toLowerCase(), id: "9929" },
  { k: "gaveJuly".toLowerCase(), id: "9930" },
  { k: "withnone".toLowerCase(), id: "9931" },
  { k: "enjoyweak".toLowerCase(), id: "9932" },
  { k: "hallmine".toLowerCase(), id: "9933" },
  { k: "tripdish".toLowerCase(), id: "9934" },
  { k: "polesame".toLowerCase(), id: "9935" },
  { k: "feetclose".toLowerCase(), id: "9936" },
  { k: "mustinch".toLowerCase(), id: "9937" },
  { k: "gonegame".toLowerCase(), id: "9938" },
  { k: "bothgold".toLowerCase(), id: "9939" },
  { k: "grewfree".toLowerCase(), id: "9940" },
  { k: "fishkill".toLowerCase(), id: "9941" },
  { k: "joincook".toLowerCase(), id: "9942" },
  { k: "oughtbeen".toLowerCase(), id: "9943" },
  { k: "fivefield".toLowerCase(), id: "9944" },
  { k: "smallpoint".toLowerCase(), id: "9945" },
  { k: "giveteach".toLowerCase(), id: "9946" },
  { k: "fortythese".toLowerCase(), id: "9947" },
  { k: "thinghalt".toLowerCase(), id: "9948" },
  { k: "tallPluto".toLowerCase(), id: "9949" },
  { k: "meatsent".toLowerCase(), id: "9950" },
  { k: "wordedge".toLowerCase(), id: "9951" },
  { k: "centspaper".toLowerCase(), id: "9952" },
  { k: "lowernever".toLowerCase(), id: "9953" },
  { k: "shortfight".toLowerCase(), id: "9954" },
  { k: "madebuilt".toLowerCase(), id: "9955" },
  { k: "storysand".toLowerCase(), id: "9956" },
  { k: "newsforce".toLowerCase(), id: "9957" },
  { k: "wheelprice".toLowerCase(), id: "9958" },
  { k: "ruleshot".toLowerCase(), id: "9959" },
  { k: "thusmeet".toLowerCase(), id: "9960" },
  { k: "jumpfair".toLowerCase(), id: "9961" },
  { k: "jumpcried".toLowerCase(), id: "9962" },
  { k: "criedmarch".toLowerCase(), id: "9963" },
  { k: "trainroad".toLowerCase(), id: "9964" },
  { k: "lifeears".toLowerCase(), id: "9965" },
  { k: "weeklead".toLowerCase(), id: "9966" },
  { k: "wrotedaily".toLowerCase(), id: "9967" },
  { k: "carefound".toLowerCase(), id: "9968" },
  { k: "stockshoe".toLowerCase(), id: "9969" },
  { k: "heavydeath".toLowerCase(), id: "9970" },
  { k: "Italyfair".toLowerCase(), id: "9971" },
  { k: "fieldfifty".toLowerCase(), id: "9972" },
  { k: "crowdfall".toLowerCase(), id: "9973" },
  { k: "nailmark".toLowerCase(), id: "9974" },
  { k: "proveApril".toLowerCase(), id: "9975" },
  { k: "stonefancy".toLowerCase(), id: "9976" },
  { k: "loudpush".toLowerCase(), id: "9977" },
  { k: "chieffull".toLowerCase(), id: "9978" },
  { k: "metalable".toLowerCase(), id: "9979" },
  { k: "missEgypt".toLowerCase(), id: "9980" },
  { k: "pushwaves".toLowerCase(), id: "9981" },
  { k: "keptMoon".toLowerCase(), id: "9982" },
  { k: "wisemajor".toLowerCase(), id: "9983" },
  { k: "basewrong".toLowerCase(), id: "9984" },
  { k: "waveswith".toLowerCase(), id: "9985" },
  { k: "Moontried".toLowerCase(), id: "9986" },
  { k: "understar".toLowerCase(), id: "9987" },
  { k: "lordbean".toLowerCase(), id: "9988" },
  { k: "signquite".toLowerCase(), id: "9989" },
  { k: "servepower".toLowerCase(), id: "9990" },
  { k: "heartcent".toLowerCase(), id: "9991" },
  { k: "Romeship".toLowerCase(), id: "9992" },
  { k: "losesaid".toLowerCase(), id: "9993" },
  { k: "tiedsure".toLowerCase(), id: "9994" },
  { k: "kepthard".toLowerCase(), id: "9995" },
  { k: "causemake".toLowerCase(), id: "9996" },
  { k: "lovesoon".toLowerCase(), id: "9997" },
  { k: "holestart".toLowerCase(), id: "9998" },
  { k: "musicwhose".toLowerCase(), id: "9999" },
  { k: "beganride".toLowerCase(), id: "10000" },
  { k: "soundVenus".toLowerCase(), id: "10001" },
  { k: "hardsong".toLowerCase(), id: "10002" },
  { k: "shirtjudge".toLowerCase(), id: "10003" },
  { k: "presscold".toLowerCase(), id: "10004" },
  { k: "angerdish".toLowerCase(), id: "10005" },
  { k: "noonapple".toLowerCase(), id: "10006" },
  { k: "marrybird".toLowerCase(), id: "10007" },
  { k: "musicseeds".toLowerCase(), id: "10008" },
  { k: "majorwrong".toLowerCase(), id: "10009" },
  { k: "floormany".toLowerCase(), id: "10010" },
  { k: "landblack".toLowerCase(), id: "10011" },
  { k: "laterbeat".toLowerCase(), id: "10012" },
  { k: "fortyfence".toLowerCase(), id: "10013" },
  { k: "mustspot".toLowerCase(), id: "10014" },
  { k: "leaddown".toLowerCase(), id: "10015" },
  { k: "enjoymuch".toLowerCase(), id: "10016" },
  { k: "unclebird".toLowerCase(), id: "10017" },
  { k: "lateSpain".toLowerCase(), id: "10018" },
  { k: "blacklift".toLowerCase(), id: "10019" },
  { k: "causesoft".toLowerCase(), id: "10020" },
  { k: "bonethen".toLowerCase(), id: "10021" },
  { k: "stockknown".toLowerCase(), id: "10022" },
  { k: "shirtPeru".toLowerCase(), id: "10023" },
  { k: "openlook".toLowerCase(), id: "10024" },
  { k: "floortaste".toLowerCase(), id: "10025" },
  { k: "marryflat".toLowerCase(), id: "10026" },
  { k: "cameblue".toLowerCase(), id: "10027" },
  { k: "finelate".toLowerCase(), id: "10028" },
  { k: "liarpoor".toLowerCase(), id: "10029" },
  { k: "Fijinorth".toLowerCase(), id: "10030" },
  { k: "dreamstill".toLowerCase(), id: "10031" },
  { k: "lifthuge".toLowerCase(), id: "10032" },
  { k: "wifegood".toLowerCase(), id: "10033" },
  { k: "breadalong".toLowerCase(), id: "10034" },
  { k: "wagonrace".toLowerCase(), id: "10035" },
  { k: "whiteleft".toLowerCase(), id: "10036" },
  { k: "hallmetal".toLowerCase(), id: "10037" },
  { k: "voicegold".toLowerCase(), id: "10038" },
  { k: "couldhope".toLowerCase(), id: "10039" },
  { k: "steelshop".toLowerCase(), id: "10040" },
  { k: "leaddried".toLowerCase(), id: "10041" },
  { k: "giveuntil".toLowerCase(), id: "10042" },
  { k: "timedeep".toLowerCase(), id: "10043" },
  { k: "everyfront".toLowerCase(), id: "10044" },
  { k: "bellupon".toLowerCase(), id: "10045" },
  { k: "ninesent".toLowerCase(), id: "10046" },
  { k: "Kenyacorn".toLowerCase(), id: "10047" },
  { k: "Asiaflier".toLowerCase(), id: "10048" },
  { k: "fulltotal".toLowerCase(), id: "10049" },
  { k: "bellgoes".toLowerCase(), id: "10050" },
  { k: "gavemayor".toLowerCase(), id: "10051" },
  { k: "studyplan".toLowerCase(), id: "10052" },
  { k: "tinycoat".toLowerCase(), id: "10053" },
  { k: "whatnice".toLowerCase(), id: "10054" },
  { k: "smallMoon".toLowerCase(), id: "10055" },
  { k: "heavytotal".toLowerCase(), id: "10056" },
  { k: "deadshot".toLowerCase(), id: "10057" },
  { k: "dutywish".toLowerCase(), id: "10058" },
  { k: "whitegone".toLowerCase(), id: "10059" },
  { k: "blackguess".toLowerCase(), id: "10060" },
  { k: "hellospot".toLowerCase(), id: "10061" },
  { k: "watershoe".toLowerCase(), id: "10062" },
  { k: "planthouse".toLowerCase(), id: "10063" },
  { k: "evenbegin".toLowerCase(), id: "10064" },
  { k: "nightgood".toLowerCase(), id: "10065" },
  { k: "Spainride".toLowerCase(), id: "10066" },
  { k: "wantswell".toLowerCase(), id: "10067" },
  { k: "poemcost".toLowerCase(), id: "10068" },
  { k: "traintore".toLowerCase(), id: "10069" },
  { k: "doorcross".toLowerCase(), id: "10070" },
  { k: "stockrose".toLowerCase(), id: "10071" },
  { k: "hangtried".toLowerCase(), id: "10072" },
  { k: "termsslow".toLowerCase(), id: "10073" },
  { k: "Italywater".toLowerCase(), id: "10074" },
  { k: "leveltoday".toLowerCase(), id: "10075" },
  { k: "trustknown".toLowerCase(), id: "10076" },
  { k: "mayortell".toLowerCase(), id: "10077" },
  { k: "latesays".toLowerCase(), id: "10078" },
  { k: "fieldItaly".toLowerCase(), id: "10079" },
  { k: "linedown".toLowerCase(), id: "10080" },
  { k: "brokelabor".toLowerCase(), id: "10081" },
  { k: "againdied".toLowerCase(), id: "10082" },
  { k: "onlyserve".toLowerCase(), id: "10083" },
  { k: "goodrope".toLowerCase(), id: "10084" },
  { k: "spellform".toLowerCase(), id: "10085" },
  { k: "wedgemuch".toLowerCase(), id: "10086" },
  { k: "halltown".toLowerCase(), id: "10087" },
  { k: "glasswhat".toLowerCase(), id: "10088" },
  { k: "Junelegs".toLowerCase(), id: "10089" },
  { k: "totalwhom".toLowerCase(), id: "10090" },
  { k: "angerlabor".toLowerCase(), id: "10091" },
  { k: "roomsize".toLowerCase(), id: "10092" },
  { k: "bonespiece".toLowerCase(), id: "10093" },
  { k: "sickwoman".toLowerCase(), id: "10094" },
  { k: "feetangry".toLowerCase(), id: "10095" },
  { k: "forceclean".toLowerCase(), id: "10096" },
  { k: "handnine".toLowerCase(), id: "10097" },
  { k: "ropegreen".toLowerCase(), id: "10098" },
  { k: "typeserve".toLowerCase(), id: "10099" },
  { k: "meansmall".toLowerCase(), id: "10100" },
  { k: "weekdeal".toLowerCase(), id: "10101" },
  { k: "safedraw".toLowerCase(), id: "10102" },
  { k: "careever".toLowerCase(), id: "10103" },
  { k: "niecewaves".toLowerCase(), id: "10104" },
  { k: "sleptsweet".toLowerCase(), id: "10105" },
  { k: "stilldress".toLowerCase(), id: "10106" },
  { k: "wifelike".toLowerCase(), id: "10107" },
  { k: "birdshard".toLowerCase(), id: "10108" },
  { k: "lineswim".toLowerCase(), id: "10109" },
  { k: "paintpair".toLowerCase(), id: "10110" },
  { k: "Japantest".toLowerCase(), id: "10111" },
  { k: "bornwish".toLowerCase(), id: "10112" },
  { k: "fearhurt".toLowerCase(), id: "10113" },
  { k: "nonewhile".toLowerCase(), id: "10114" },
  { k: "northgift".toLowerCase(), id: "10115" },
  { k: "ringhalt".toLowerCase(), id: "10116" },
  { k: "wherebird".toLowerCase(), id: "10117" },
  { k: "ropemove".toLowerCase(), id: "10118" },
  { k: "houseyard".toLowerCase(), id: "10119" },
  { k: "happylegs".toLowerCase(), id: "10120" },
  { k: "madecost".toLowerCase(), id: "10121" },
  { k: "Asiatold".toLowerCase(), id: "10122" },
  { k: "crowdcorn".toLowerCase(), id: "10123" },
  { k: "doorfruit".toLowerCase(), id: "10124" },
  { k: "greatchair".toLowerCase(), id: "10125" },
  { k: "Marsalso".toLowerCase(), id: "10126" },
  { k: "roomNepal".toLowerCase(), id: "10127" },
  { k: "uncletooth".toLowerCase(), id: "10128" },
  { k: "bringbelow".toLowerCase(), id: "10129" },
  { k: "Marsseven".toLowerCase(), id: "10130" },
  { k: "shalldare".toLowerCase(), id: "10131" },
  { k: "holeangle".toLowerCase(), id: "10132" },
  { k: "pastworth".toLowerCase(), id: "10133" },
  { k: "laborroot".toLowerCase(), id: "10134" },
  { k: "nervethat".toLowerCase(), id: "10135" },
  { k: "applehunt".toLowerCase(), id: "10136" },
  { k: "Indiashape".toLowerCase(), id: "10137" },
  { k: "MarchPluto".toLowerCase(), id: "10138" },
  { k: "teartrue".toLowerCase(), id: "10139" },
  { k: "learnbreak".toLowerCase(), id: "10140" },
  /*{ k: "startsoup".toLowerCase(), id: "5622" },
  { k: "handsdebt".toLowerCase(), id: "5623" },
  { k: "middlebrain".toLowerCase(), id: "5624" },
  { k: "eargate".toLowerCase(), id: "5625" },
  { k: "eatfold".toLowerCase(), id: "5626" },
  { k: "wandertrees".toLowerCase(), id: "5627" },
  { k: "scarpneck".toLowerCase(), id: "5628" },
  { k: "mittenbeam".toLowerCase(), id: "5629" },
  { k: "angleroom".toLowerCase(), id: "5630" },
  { k: "blueflock".toLowerCase(), id: "5631" },
  { k: "mintfold".toLowerCase(), id: "5632" },
  { k: "matchsize".toLowerCase(), id: "5633" },
  { k: "anttown".toLowerCase(), id: "5634" },
  { k: "incomeyear".toLowerCase(), id: "5635" },
  { k: "deardebt".toLowerCase(), id: "5636" },
  { k: "eggsday".toLowerCase(), id: "5637" },
  { k: "sleetoatmeal".toLowerCase(), id: "5638" },
  { k: "sprayweek".toLowerCase(), id: "5639" },
  { k: "scanmask".toLowerCase(), id: "5640" },
  { k: "skirtbone".toLowerCase(), id: "5641" },
  { k: "lovemonth".toLowerCase(), id: "5642" },
  { k: "dirtbat".toLowerCase(), id: "5643" },
  { k: "lacespark".toLowerCase(), id: "5644" },
  { k: "lunchroomcat".toLowerCase(), id: "5645" },
  { k: "sidesand".toLowerCase(), id: "5646" },
  { k: "delayapple".toLowerCase(), id: "5647" },
  { k: "widenote".toLowerCase(), id: "5648" },
  { k: "sobtray".toLowerCase(), id: "5649" },
  { k: "leathertrees".toLowerCase(), id: "5650" },
  { k: "contractblow".toLowerCase(), id: "5651" },
  { k: "needperson".toLowerCase(), id: "5652" },
  { k: "trainspy".toLowerCase(), id: "5653" },
  { k: "inputchin".toLowerCase(), id: "5654" },
  { k: "kickloss".toLowerCase(), id: "5655" },
  { k: "pleadhat".toLowerCase(), id: "5656" },
  { k: "extendboot".toLowerCase(), id: "5657" },
  { k: "faintnote".toLowerCase(), id: "5658" },
  { k: "shattertoy".toLowerCase(), id: "5659" },
  { k: "shinypage".toLowerCase(), id: "5660" },
  { k: "wintersmile".toLowerCase(), id: "5661" },
  { k: "reachcare".toLowerCase(), id: "5662" },
  { k: "hearingstove".toLowerCase(), id: "5663" },
  { k: "trampgold".toLowerCase(), id: "5664" },
  { k: "blowcrime".toLowerCase(), id: "5665" },
  { k: "vasefang".toLowerCase(), id: "5666" },
  { k: "gluedime".toLowerCase(), id: "5667" },
  { k: "rusticmilk".toLowerCase(), id: "5668" },
  { k: "supportcare".toLowerCase(), id: "5669" },
  { k: "boatnut".toLowerCase(), id: "5670" },
  { k: "growthyarn".toLowerCase(), id: "5671" },
  { k: "cutecow".toLowerCase(), id: "5672" },
  { k: "trickink".toLowerCase(), id: "5673" },
  { k: "noiseart".toLowerCase(), id: "5674" },
  { k: "worryflag".toLowerCase(), id: "5675" },
  { k: "netdirt".toLowerCase(), id: "5676" },
  { k: "dealcork".toLowerCase(), id: "5677" },
  { k: "traysalt".toLowerCase(), id: "5678" },
  { k: "railear".toLowerCase(), id: "5679" },
  { k: "dyelove".toLowerCase(), id: "5680" },
  { k: "suckhand".toLowerCase(), id: "5681" },
  { k: "controlday".toLowerCase(), id: "5682" },
  { k: "opttown".toLowerCase(), id: "5683" },
  { k: "royalcomb".toLowerCase(), id: "5684" },
  { k: "carvesand".toLowerCase(), id: "5685" },
  { k: "scowlticket".toLowerCase(), id: "5686" },
  { k: "vastbread".toLowerCase(), id: "5687" },
  { k: "goldzebra".toLowerCase(), id: "5688" },
  { k: "babiesbeast".toLowerCase(), id: "5689" },
  { k: "cornwound".toLowerCase(), id: "5690" },
  { k: "wingpart".toLowerCase(), id: "5691" },
  { k: "ticketsnow".toLowerCase(), id: "5692" },
  { k: "dresspan".toLowerCase(), id: "5693" },
  { k: "sixchairs".toLowerCase(), id: "5694" },
  { k: "coverleg".toLowerCase(), id: "5695" },
  { k: "mapskin".toLowerCase(), id: "5696" },
  { k: "enjoyslave".toLowerCase(), id: "5697" },
  { k: "boiltalk".toLowerCase(), id: "5698" },
  { k: "hurtship".toLowerCase(), id: "5699" },
  { k: "mutetent".toLowerCase(), id: "5700" },
  { k: "loseant".toLowerCase(), id: "5701" },
  { k: "losscord".toLowerCase(), id: "5702" },
  { k: "sortcrow".toLowerCase(), id: "5703" },
  { k: "servantboy".toLowerCase(), id: "5704" },
  { k: "celerycub".toLowerCase(), id: "5705" },
  { k: "icearmy".toLowerCase(), id: "5706" },
  { k: "gatezipper".toLowerCase(), id: "5707" },
  { k: "zoohead".toLowerCase(), id: "5708" },
  { k: "cleancloud".toLowerCase(), id: "5709" },
  { k: "airportsleet".toLowerCase(), id: "5710" },
  { k: "drumlock".toLowerCase(), id: "5711" },
  { k: "rulelow".toLowerCase(), id: "5712" },
  { k: "mixuse".toLowerCase(), id: "5713" },
  { k: "crazysmile".toLowerCase(), id: "5714" },
  { k: "slimleg".toLowerCase(), id: "5715" },
  { k: "fixbook".toLowerCase(), id: "5716" },
  { k: "pressknife".toLowerCase(), id: "5717" },
  { k: "tigersleep".toLowerCase(), id: "5718" },
  { k: "agreeclub".toLowerCase(), id: "5719" },
  { k: "fancycrime".toLowerCase(), id: "5720" },
  { k: "wittyair".toLowerCase(), id: "5721" },
  { k: "foldballs".toLowerCase(), id: "5722" },
  { k: "skyson".toLowerCase(), id: "5723" },
  { k: "fanboot".toLowerCase(), id: "5724" },
  { k: "birthdaycard".toLowerCase(), id: "5725" },
  { k: "swiftsun".toLowerCase(), id: "5726" },
  { k: "flatuse".toLowerCase(), id: "5727" },
  { k: "milkyard".toLowerCase(), id: "5728" },
  { k: "bulbskin".toLowerCase(), id: "5729" },
  { k: "sawidea".toLowerCase(), id: "5730" },
  { k: "workson".toLowerCase(), id: "5731" },
  { k: "repairtwist".toLowerCase(), id: "5732" },
  { k: "beecows".toLowerCase(), id: "5733" },
  { k: "dampnews".toLowerCase(), id: "5734" },
  { k: "vexgate".toLowerCase(), id: "5735" },
  { k: "listbike".toLowerCase(), id: "5736" },
  { k: "petsvoice".toLowerCase(), id: "5737" },
  { k: "ironhole".toLowerCase(), id: "5738" },
  { k: "scarrain".toLowerCase(), id: "5739" },
  { k: "flopfrogs".toLowerCase(), id: "5740" },
  { k: "dollslove".toLowerCase(), id: "5741" },
  { k: "owltrain".toLowerCase(), id: "5742" },
  { k: "dryboys".toLowerCase(), id: "5743" },
  { k: "chiefsand".toLowerCase(), id: "5744" },
  { k: "dogfire".toLowerCase(), id: "5745" },
  { k: "messystraw".toLowerCase(), id: "5746" },
  { k: "bestmist".toLowerCase(), id: "5747" },
  { k: "shamebite".toLowerCase(), id: "5748" },
  { k: "schoolcrush".toLowerCase(), id: "5749" },
  { k: "missfarm".toLowerCase(), id: "5750" },
  { k: "guidetrees".toLowerCase(), id: "5751" },
  { k: "ajargun".toLowerCase(), id: "5752" },
  { k: "tidytacky".toLowerCase(), id: "5753" },
  { k: "statebouncy".toLowerCase(), id: "5754" },
  { k: "auntsave".toLowerCase(), id: "5755" },
  { k: "tartfixed".toLowerCase(), id: "5756" },
  { k: "spinjail".toLowerCase(), id: "5757" },
  { k: "bootdust".toLowerCase(), id: "5758" },
  { k: "gashski".toLowerCase(), id: "5759" },
  { k: "deathjam".toLowerCase(), id: "5760" },
  { k: "teamqueen".toLowerCase(), id: "5761" },
  { k: "brotherrural".toLowerCase(), id: "5762" },
  { k: "alertcaress".toLowerCase(), id: "5763" },
  { k: "retirethankful".toLowerCase(), id: "5764" },
  { k: "knifeboy".toLowerCase(), id: "5765" },
  { k: "dimefirst".toLowerCase(), id: "5766" },
  { k: "seagodly".toLowerCase(), id: "5767" },
  { k: "birdsconsole".toLowerCase(), id: "5768" },
  { k: "painoatmeal".toLowerCase(), id: "5769" },
  { k: "steepeyes".toLowerCase(), id: "5770" },
  { k: "balancegreedy".toLowerCase(), id: "5771" },
  { k: "brushtight".toLowerCase(), id: "5772" },
  { k: "scalediffer".toLowerCase(), id: "5773" },
  { k: "pollutionfowl".toLowerCase(), id: "5774" },
  { k: "nodvolleyball".toLowerCase(), id: "5775" },
  { k: "landspooky".toLowerCase(), id: "5776" },
  { k: "toeframe".toLowerCase(), id: "5777" },
  { k: "deercook".toLowerCase(), id: "5778" },*/
  { k: "tinhot".toLowerCase(), id: "10145" },
  { k: "dreamrain".toLowerCase(), id: "10146" },
  { k: "gofeet".toLowerCase(), id: "10147" },
  { k: "kiteslide".toLowerCase(), id: "10148" },
  { k: "downcap".toLowerCase(), id: "10149" },
  { k: "pigear".toLowerCase(), id: "10150" },
  { k: "spoonhat".toLowerCase(), id: "10151" },
  { k: "benchcoat".toLowerCase(), id: "10152" },
  { k: "kinghippo".toLowerCase(), id: "10153" },
  { k: "cupcherry".toLowerCase(), id: "10154" },
  { k: "nightfloat".toLowerCase(), id: "10155" },
  { k: "matball".toLowerCase(), id: "10156" },
  { k: "firewater".toLowerCase(), id: "10157" },
  { k: "hairshow".toLowerCase(), id: "10158" },
  { k: "shoeplant".toLowerCase(), id: "10159" },
  { k: "conebook".toLowerCase(), id: "10160" },
  { k: "frogleaf".toLowerCase(), id: "10161" },
  { k: "boxcar".toLowerCase(), id: "10162" },
  { k: "musicant".toLowerCase(), id: "10163" },
  { k: "starmoon".toLowerCase(), id: "10164" },
  { k: "crabman".toLowerCase(), id: "10165" },
  { k: "doglemon".toLowerCase(), id: "10166" },
  { k: "cornbike".toLowerCase(), id: "10167" },
  { k: "lionhand".toLowerCase(), id: "10168" },
  { k: "familyflag".toLowerCase(), id: "10169" },
  { k: "flaghand".toLowerCase(), id: "10170" },
  { k: "boxflag".toLowerCase(), id: "10171" },
  { k: "kitelion".toLowerCase(), id: "10172" },
  { k: "crabhand".toLowerCase(), id: "10173" },
  { k: "ballman".toLowerCase(), id: "10174" },
  { k: "dogkite".toLowerCase(), id: "10175" },
  { k: "headcorn".toLowerCase(), id: "10176" },
  { k: "milkdrum".toLowerCase(), id: "10177" },
  { k: "milkcup".toLowerCase(), id: "10178" },
  { k: "snailhat".toLowerCase(), id: "10179" },
  { k: "chairmitten".toLowerCase(), id: "10180" },
  { k: "birdboat".toLowerCase(), id: "10181" },
  { k: "seatoad".toLowerCase(), id: "10182" },
  { k: "pizzapen".toLowerCase(), id: "10183" },
  { k: "zigzag".toLowerCase(), id: "10184" },
  { k: "keyknee".toLowerCase(), id: "10185" },
  { k: "sunsheep".toLowerCase(), id: "10186" },
  { k: "bunkbed".toLowerCase(), id: "10187" },
  { k: "starfish".toLowerCase(), id: "10188" },
  { k: "carrotlamp".toLowerCase(), id: "10189" },
  { k: "barkrobot".toLowerCase(), id: "10190" },
  { k: "fishface".toLowerCase(), id: "10191" },
  { k: "treebat".toLowerCase(), id: "10192" },
  { k: "hookriver".toLowerCase(), id: "10193" },
  { k: "heartline".toLowerCase(), id: "10194" },
  { k: "beachtrain".toLowerCase(), id: "10195" },
  { k: "swingtrain".toLowerCase(), id: "10196" },
  { k: "stairsbug".toLowerCase(), id: "10197" },
  { k: "doorfork".toLowerCase(), id: "10198" },
  { k: "bluetrain".toLowerCase(), id: "12010" },
  { k: "greenplan".toLowerCase(), id: "12011" },
  { k: "redbroken".toLowerCase(), id: "12012" },
  { k: "bluemat".toLowerCase(), id: "12013" },
  { k: "ballgreen".toLowerCase(), id: "12014" },
  { k: "roundblue".toLowerCase(), id: "12015" },
  { k: "grassgo".toLowerCase(), id: "12016" },
  { k: "soccertree".toLowerCase(), id: "12017" },
  { k: "stadiumlight".toLowerCase(), id: "12018" },
  { k: "purpledog".toLowerCase(), id: "12019" },
  { k: "goodsun".toLowerCase(), id: "12020" },
  { k: "hotread".toLowerCase(), id: "12021" },
  { k: "danceplay".toLowerCase(), id: "12022" },
  { k: "earthblue".toLowerCase(), id: "12023" },
  { k: "canleft".toLowerCase(), id: "12024" },
  { k: "intofirst".toLowerCase(), id: "12025" },
  { k: "bigbad".toLowerCase(), id: "12026" },
  { k: "badgood".toLowerCase(), id: "12027" },
  { k: "goodgreen".toLowerCase(), id: "12028" },
  { k: "smallshort".toLowerCase(), id: "12029" },
  { k: "newday".toLowerCase(), id: "12030" },
  { k: "oldnight".toLowerCase(), id: "12031" },
  { k: "nightday".toLowerCase(), id: "12032" },
  { k: "bigsmall".toLowerCase(), id: "12033" },
  { k: "downleft".toLowerCase(), id: "12034" },
  { k: "upright".toLowerCase(), id: "12035" },
  { k: "outold".toLowerCase(), id: "12036" },
  { k: "lowbar".toLowerCase(), id: "12037" },
  { k: "hightree".toLowerCase(), id: "12038" },
  { k: "hatdesk".toLowerCase(), id: "12039" },
  { k: "songsand".toLowerCase(), id: "12040" },
  { k: "dirtsoda".toLowerCase(), id: "12041" },
  { k: "ricegreen".toLowerCase(), id: "12042" },
  { k: "leafseed".toLowerCase(), id: "12043" },
  { k: "roofnail".toLowerCase(), id: "12044" },
  { k: "bellball".toLowerCase(), id: "12045" },
  { k: "sockshoe".toLowerCase(), id: "12046" },
  { k: "meatcorn".toLowerCase(), id: "12047" },
  { k: "drumbeat".toLowerCase(), id: "12048" },
  { k: "bikerain".toLowerCase(), id: "12049" },
  { k: "fireice".toLowerCase(), id: "12050" },
  { k: "hairsky".toLowerCase(), id: "12051" },
  { k: "lipdoor".toLowerCase(), id: "12052" },
  { k: "lampchair".toLowerCase(), id: "12053" },
  { k: "dollball".toLowerCase(), id: "12054" },
  { k: "ringship".toLowerCase(), id: "12055" },
  { k: "boxbus".toLowerCase(), id: "12056" },
  { k: "frogmoon".toLowerCase(), id: "12057" },
  { k: "fishfrog".toLowerCase(), id: "12058" },
  { k: "armfoot".toLowerCase(), id: "12059" },
  { k: "facefoot".toLowerCase(), id: "12060" },
  { k: "noseleg".toLowerCase(), id: "12061" },
  { k: "carkey".toLowerCase(), id: "12062" },
  { k: "bagkey".toLowerCase(), id: "12063" },
  { k: "starbook".toLowerCase(), id: "12064" },
  { k: "bedblue".toLowerCase(), id: "12065" },
  { k: "handred".toLowerCase(), id: "12066" },
  { k: "windbox".toLowerCase(), id: "12067" },
  { k: "runsun".toLowerCase(), id: "12068" },
  { k: "pencar".toLowerCase(), id: "12069" },
  { k: "carcat".toLowerCase(), id: "12070" },
  { k: "dogbird".toLowerCase(), id: "12071" },
  { k: "eggtoy".toLowerCase(), id: "12072" },
  { k: "redmountain".toLowerCase(), id: "12073" },
  { k: "bluefrog".toLowerCase(), id: "12074" },
  { k: "redtree".toLowerCase(), id: "12075" },
  { k: "redband".toLowerCase(), id: "12076" },
  { k: "bluebed".toLowerCase(), id: "12077" },
  { k: "handbook".toLowerCase(), id: "12078" },
  { k: "toysun".toLowerCase(), id: "12079" },
  { k: "keybed".toLowerCase(), id: "12080" },
  {k: "courtyard".toLowerCase(), id: "13010" },
{k: "waterproof".toLowerCase(), id: "13011" },
{k: "supermen".toLowerCase(), id: "13012" },
{k: "slowdown".toLowerCase(), id: "13013" },
{k: "somebody".toLowerCase(), id: "13014" },
{k: "taskmaster".toLowerCase(), id: "13015" },
{k: "cheesecake".toLowerCase(), id: "13016" },
{k: "softball".toLowerCase(), id: "13017" },
{k: "timesaving".toLowerCase(), id: "13018" },
{k: "keyway".toLowerCase(), id: "13019" },
{k: "sideburns".toLowerCase(), id: "13020" },
{k: "hookworm".toLowerCase(), id: "13021" },
{k: "highway".toLowerCase(), id: "13022" },
{k: "rainbow".toLowerCase(), id: "13023" },
{k: "superscript".toLowerCase(), id: "13024" },
{k: "backside".toLowerCase(), id: "13025" },
{k: "whitewash".toLowerCase(), id: "13026" },
{k: "watchtower".toLowerCase(), id: "13027" },
{k: "foreman".toLowerCase(), id: "13028" },
{k: "saucepan".toLowerCase(), id: "13029" },
{k: "southwest".toLowerCase(), id: "13030" },
{k: "cannot".toLowerCase(), id: "13031" },
{k: "ashtray".toLowerCase(), id: "13032" },
{k: "upside".toLowerCase(), id: "13033" },
{k: "schoolboy".toLowerCase(), id: "13034" },
{k: "grandstand".toLowerCase(), id: "13035" },
{k: "setback".toLowerCase(), id: "13036" },
{k: "superstrong".toLowerCase(), id: "13037" },
{k: "airtime".toLowerCase(), id: "13038" },
{k: "skintight".toLowerCase(), id: "13039" },
{k: "waterline".toLowerCase(), id: "13040" },
{k: "keyboard".toLowerCase(), id: "13041" },
{k: "sunfish".toLowerCase(), id: "13042" },
{k: "footlocker".toLowerCase(), id: "13043" },
{k: "blacktop".toLowerCase(), id: "13044" },
{k: "bellboy".toLowerCase(), id: "13045" },
{k: "airlift".toLowerCase(), id: "13046" },
{k: "firebreak".toLowerCase(), id: "13047" },
{k: "standby".toLowerCase(), id: "13048" },
{k: "pancake".toLowerCase(), id: "13049" },
{k: "below".toLowerCase(), id: "13050" },
{k: "grandnephew".toLowerCase(), id: "13051" },
{k: "pickup".toLowerCase(), id: "13052" },
{k: "moonlight".toLowerCase(), id: "13053" },
{k: "blueprint".toLowerCase(), id: "13054" },
{k: "foresight".toLowerCase(), id: "13055" },
{k: "timepieces".toLowerCase(), id: "13056" },
{k: "sunflower".toLowerCase(), id: "13057" },
{k: "fishnet".toLowerCase(), id: "13058" },
{k: "spokesperson".toLowerCase(), id: "13059" },
{k: "watchdog".toLowerCase(), id: "13060" },
{k: "drawbridge".toLowerCase(), id: "13061" },
{k: "earthward".toLowerCase(), id: "13062" },
{k: "keypunch".toLowerCase(), id: "13063" },
{k: "wallpaper".toLowerCase(), id: "13064" },
{k: "himself".toLowerCase(), id: "13065" },
{k: "uptight".toLowerCase(), id: "13066" },
{k: "forearm".toLowerCase(), id: "13067" },
{k: "blackmail".toLowerCase(), id: "13068" },
];

var approvedKeys = []; // = ['approve'];
var matrixMap = new Map();
var errorCount = 0;
var menuActive = false;
var scrollPosition = 0;
var yposition = 0;
var divsLogged = [];
var loggedPageTime = Date.now();
var clicky_custom = clicky_custom || {};
clicky_custom.pageview_disable = 1;

var blackList = [
  "10123",
  "9841",
  "9886",
  "10012",
  //"9821",
  "10107",
  "9845",
  //"9857",
  //"9906",
  "10134",
  "10136",
  "10125",
  //"9939",
  //"9854",
  "9969",
  //"9844",
  //"10044",
  //"9898",
  "9853",
  /*"9897",*/
  "9830",
  //"10102",
  "9890",
  "9964",
];

function onLoad() {
  clicky.pageview();
  checkParam("");
  buildMatrixMap();
  checkLogin();
  clicky.pageview();
  setScrollReporting();

  window.onblur = function () {
    setAndLogURL(true);
  };
 window.onfocus = function () {
  setAndLogURL(false);
  }
}
  

function setScrollReporting() {
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains("trackIt")) {
      trackDiv(divs[i].id);
    }
  }
}
function trackDiv(divID) {
  var eTop = $("#" + divID).offset().top;
  var eBottom = eTop + (window.innerHeight / 100) * 90;

  $(window).on("scroll", function () {
    if (inView(eTop) && !divsLogged.includes(divID)) {
      setAndLogURL(divID);
      divsLogged.push(divID);
    }
  });
}

function inView(elTop) {
  //accept the top of the element being checked
  var currentTopOfPage = window.pageYOffset - 5;
  return (
    elTop > currentTopOfPage &&
    elTop < window.pageYOffset + (window.innerHeight / 10) * 9
  );
}
function setAndLogURL(val) {
  //if(rerunPageview()){
    //s is the state of the tab
    if(val === true || val === false){
      checkParam('&hid='+val.toString());
    }else{
      checkParam("&loc=" + val);
    }
  

  clicky.pageview();
  loggedPageTime = Date.now();
  //}
}
function logParam(param) {
  window.history.replaceState(null, null, param);
  clicky.pageview();
  window.history.replaceState(null, null, "");
}
function rerunPageview() {
  var endTime = new Date();
  var timeDiff = endTime - loggedPageTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  return seconds > 2;
}

function buildMatrixMap() {
  for (i = 0; i < matrix.length; i++) {
    matrixMap.set(matrix[i].k, matrix[i].id);
    approvedKeys.push(matrix[i].k);
  }
}
function keyGranted() {
  var x = window.localStorage.getItem("CucumberPK");
  return x == "true";
}
function isBlackList() {
  return blackList.includes(window.localStorage.getItem("CucumberUser"));
}
function getPage() {
  var currentPathArray = document.location.href.split("/");
  var p = currentPathArray[currentPathArray.length - 1];
  if (p.includes("?")) {
    return p.split("?")[0];
  } else {
    return p;
  }
}
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
function checkPassPermitted() {
  return getQueryVariable("bypass") == "true";
}

function checkParam(str) {
  if (
    window.localStorage.getItem("CucumberUser") != null /*&&
    !window.location.href.includes("?Rev")*/
  ) {
    if (window.location.href.includes("#")) {
      window.history.replaceState(
        null,
        null,
        getUser() + str + "#" + window.location.href.split("#")[1]
      );
    } else {
      window.history.replaceState(null, null, getUser() + str);
    }
  }
}

function checkLogin() {
  //check if the key grants access
  if (!keyGranted()) {
    if (getPage() != "login.html") {
      requestedPage = document.location.href;
      var paramValues = window.location.search ? window.location.search : "";
      window.localStorage.setItem("requestedPage", requestedPage);
      setAndLogURL(requestedPage);
      document.location.href = "login.html" + paramValues;
    } else {
    }
  } else {
    if (isBlackList()) {
      window.localStorage.setItem("blacklisted", true);
      document.location.href =
        "extendaccess.html" +
        "?uId=" +
        window.localStorage.getItem("CucumberUser");
    } else if (getPage() == "login.html") {
      //redirect
      redirectToRequestedPage();
    } else {
      makeDataViewable();
      checkParam("");
    }
  }
}
function showID(name, bool) {
  if (document.getElementById(name) != undefined) {
    document.getElementById(name).style.display = bool ? "initial" : "none";
  }
}

function makeDataViewable() {
  showID("spin", false);
  showID("home", true);
  showID("menuBar", true);
}
function showWithoutMenuAccess() {
  showID("spin", false);
  showID("home", true);
}
function getUser() {
  var u = window.localStorage.getItem("CucumberUser");
  return u == null ? "" : "?Rev=" + u;
}
function redirectToRequestedPage() {
  var routeTo = window.localStorage.getItem("requestedPage");
  if (routeTo == "" || routeTo == undefined || routeTo.includes("login.html")) {
    document.location.href = "home.html" + getUser();
  } else {
    document.location.href = routeTo + getUser();
  }
}
var ps = document.querySelector("#passSubmit");
if (ps != undefined) {
  ps.addEventListener(
    "click",
    function (event) {
      var pk = document.getElementById("passKey");
      if (pk != undefined) {
        if (approvedKeys.includes(pk.value.toLowerCase())) {
          window.localStorage.setItem("CucumberPK", "true");
          window.localStorage.setItem(
            "CucumberUser",
            matrixMap.get(pk.value.toLowerCase())
          );
          checkParam("");
          clicky.pageview();
          loggedIn = true;
          //document.getElementById('loginError').style.visibility = "hidden";
          document.getElementById("loginError").style.display = "none";

          //get the key mapping and padd to grant access
          document.location.href =
            "grantaccess.html?Rev=" + matrixMap.get(pk.value.toLowerCase());
        } else {
          errorCount++;

          window.history.replaceState(
            null,
            null,
            "?errorCount=" + errorCount /*+ "&puser=" + pk.value*/
          );
          clicky.pageview();

          //document.getElementById('loginError').style.visibility = "visible";
          document.getElementById("loginError").style.display = "";
          document.getElementById("errorCount").innerText = errorCount;
          window.history.replaceState(null, null, "");
        }
        event.preventDefault();
      }
    },
    false
  );
}
function checkAccess() {
  if (keyGranted) {
    redirectToRequestedPage();
  } else {
    document.location.href = "login.html";
  }
}

$(".menu").click(function () {
  //added functionality to allow the menu to be viewable with canvas elements.  Added blur to handle
  if (menuActive) {
    //$( ".canvasjs-chart-container" ).css('z-index',1);
    $(".canvasjs-chart-canvas").show();
    $(".datamaps-subunits").show();
    $("#home").removeClass("blurIt");
    menuActive = false;
  } else {
    //$( ".canvasjs-chart-container" ).css('z-index',-1000);
    $(".canvasjs-chart-canvas").hide();
    $(".datamaps-subunits").hide();

    $("#home").addClass("blurIt");
    menuActive = true;
  }

  //standard functionality
  $(".menu").toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});
