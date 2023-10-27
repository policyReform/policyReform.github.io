var currentURL;
var loggedIn = false; //keyGranted();
//var loggedIn = keyGranted();
var requestedPage;
var currentPage;
var matrix = [
  { k: "angrysize", id: "9821" },
  { k: "feelneed", id: "9822" },
  { k: "todaynoon", id: "9823" },
  { k: "eastspell", id: "9824" },
  { k: "elsetree", id: "9825" },
  { k: "seemseven", id: "9826" },
  { k: "scorefind", id: "9827" },
  { k: "typemuch", id: "9828" },
  { k: "facestar", id: "9829" },
  { k: "whosebuilt", id: "9830" },
  { k: "gladlong", id: "9831" },
  { k: "suitNepal", id: "9832" },
  { k: "wildnews", id: "9833" },
  { k: "feartall", id: "9834" },
  { k: "Congofifth", id: "9835" },
  { k: "cropsround", id: "9836" },
  { k: "guardmade", id: "9837" },
  { k: "duckfight", id: "9838" },
  { k: "tubeduty", id: "9839" },
  { k: "stormmusic", id: "9840" },
  { k: "throwgreat", id: "9841" },
  { k: "seemlead", id: "9842" },
  { k: "niecejudge", id: "9843" },
  { k: "ninespeed", id: "9844" },
  { k: "ironseeds", id: "9845" },
  { k: "pickfifth", id: "9846" },
  { k: "womandance", id: "9847" },
  { k: "darepair", id: "9848" },
  { k: "allowgrave", id: "9849" },
  { k: "piecepaint", id: "9850" },
  { k: "thinbegin", id: "9851" },
  { k: "graveroll", id: "9852" },
  { k: "alongsays", id: "9853" },
  { k: "thereduty", id: "9854" },
  { k: "Spainarms", id: "9855" },
  { k: "moonjoin", id: "9856" },
  { k: "pushangle", id: "9857" },
  { k: "landgive", id: "9858" },
  { k: "elseheavy", id: "9859" },
  { k: "losebones", id: "9860" },
  { k: "grownwater", id: "9861" },
  { k: "placedish", id: "9862" },
  { k: "thinglose", id: "9863" },
  { k: "beenneed", id: "9864" },
  { k: "coastbegan", id: "9865" },
  { k: "noisewild", id: "9866" },
  { k: "chairchief", id: "9867" },
  { k: "busyrest", id: "9868" },
  { k: "coolfool", id: "9869" },
  { k: "Maltabeen", id: "9870" },
  { k: "drinkwear", id: "9871" },
  { k: "sinceever", id: "9872" },
  { k: "enemytrack", id: "9873" },
  { k: "hugeafter", id: "9874" },
  { k: "CubaJune", id: "9875" },
  { k: "fieldunder", id: "9876" },
  { k: "abovecross", id: "9877" },
  { k: "shallguide", id: "9878" },
  { k: "landtest", id: "9879" },
  { k: "amongstand", id: "9880" },
  { k: "blockheard", id: "9881" },
  { k: "whichsail", id: "9882" },
  { k: "somehome", id: "9883" },
  { k: "enemyduty", id: "9884" },
  { k: "broadbelow", id: "9885" },
  { k: "everyshake", id: "9886" },
  { k: "listcloth", id: "9887" },
  { k: "fromleft", id: "9888" },
  { k: "racequick", id: "9889" },
  { k: "longfavor", id: "9890" },
  { k: "hersenjoy", id: "9891" },
  { k: "fifthwith", id: "9892" },
  { k: "feetfact", id: "9893" },
  { k: "sensegave", id: "9894" },
  { k: "wheredear", id: "9895" },
  { k: "greatless", id: "9896" },
  { k: "againmany", id: "9897" },
  { k: "spotbuilt", id: "9898" },
  { k: "tillform", id: "9899" },
  { k: "largeterms", id: "9900" },
  { k: "loveMarch", id: "9901" },
  { k: "sandnerve", id: "9902" },
  { k: "washslow", id: "9903" },
  { k: "plainleast", id: "9904" },
  { k: "talksell", id: "9905" },
  { k: "heretouch", id: "9906" },
  { k: "worldheat", id: "9907" },
  { k: "saidtalk", id: "9908" },
  { k: "weakshort", id: "9909" },
  { k: "labormoney", id: "9910" },
  { k: "nounsuch", id: "9911" },
  { k: "thatocean", id: "9912" },
  { k: "stickmade", id: "9913" },
  { k: "meetshop", id: "9914" },
  { k: "moonfound", id: "9915" },
  { k: "ironthem", id: "9916" },
  { k: "ninefifth", id: "9917" },
  { k: "lightcross", id: "9918" },
  { k: "marchwhat", id: "9919" },
  { k: "roadtype", id: "9920" },
  { k: "laborTokyo", id: "9921" },
  { k: "startneck", id: "9922" },
  { k: "fullrest", id: "9923" },
  { k: "stepshop", id: "9924" },
  { k: "knownbread", id: "9925" },
  { k: "heldwell", id: "9926" },
  { k: "coldglad", id: "9927" },
  { k: "hurtfast", id: "9928" },
  { k: "meatknown", id: "9929" },
  { k: "gaveJuly", id: "9930" },
  { k: "withnone", id: "9931" },
  { k: "enjoyweak", id: "9932" },
  { k: "hallmine", id: "9933" },
  { k: "tripdish", id: "9934" },
  { k: "polesame", id: "9935" },
  { k: "feetclose", id: "9936" },
  { k: "mustinch", id: "9937" },
  { k: "gonegame", id: "9938" },
  { k: "bothgold", id: "9939" },
  { k: "grewfree", id: "9940" },
  { k: "fishkill", id: "9941" },
  { k: "joincook", id: "9942" },
  { k: "oughtbeen", id: "9943" },
  { k: "fivefield", id: "9944" },
  { k: "smallpoint", id: "9945" },
  { k: "giveteach", id: "9946" },
  { k: "fortythese", id: "9947" },
  { k: "thinghalt", id: "9948" },
  { k: "tallPluto", id: "9949" },
  { k: "meatsent", id: "9950" },
  { k: "wordedge", id: "9951" },
  { k: "centspaper", id: "9952" },
  { k: "lowernever", id: "9953" },
  { k: "shortfight", id: "9954" },
  { k: "madebuilt", id: "9955" },
  { k: "storysand", id: "9956" },
  { k: "newsforce", id: "9957" },
  { k: "wheelprice", id: "9958" },
  { k: "ruleshot", id: "9959" },
  { k: "thusmeet", id: "9960" },
  { k: "jumpfair", id: "9961" },
  { k: "jumpcried", id: "9962" },
  { k: "criedmarch", id: "9963" },
  { k: "trainroad", id: "9964" },
  { k: "lifeears", id: "9965" },
  { k: "weeklead", id: "9966" },
  { k: "wrotedaily", id: "9967" },
  { k: "carefound", id: "9968" },
  { k: "stockshoe", id: "9969" },
  { k: "heavydeath", id: "9970" },
  { k: "Italyfair", id: "9971" },
  { k: "fieldfifty", id: "9972" },
  { k: "crowdfall", id: "9973" },
  { k: "nailmark", id: "9974" },
  { k: "proveApril", id: "9975" },
  { k: "stonefancy", id: "9976" },
  { k: "loudpush", id: "9977" },
  { k: "chieffull", id: "9978" },
  { k: "metalable", id: "9979" },
  { k: "missEgypt", id: "9980" },
  { k: "pushwaves", id: "9981" },
  { k: "keptMoon", id: "9982" },
  { k: "wisemajor", id: "9983" },
  { k: "basewrong", id: "9984" },
  { k: "waveswith", id: "9985" },
  { k: "Moontried", id: "9986" },
  { k: "understar", id: "9987" },
  { k: "lordbean", id: "9988" },
  { k: "signquite", id: "9989" },
  { k: "servepower", id: "9990" },
  { k: "heartcent", id: "9991" },
  { k: "Romeship", id: "9992" },
  { k: "losesaid", id: "9993" },
  { k: "tiedsure", id: "9994" },
  { k: "kepthard", id: "9995" },
  { k: "causemake", id: "9996" },
  { k: "lovesoon", id: "9997" },
  { k: "holestart", id: "9998" },
  { k: "musicwhose", id: "9999" },
  { k: "beganride", id: "10000" },
  { k: "soundVenus", id: "10001" },
  { k: "hardsong", id: "10002" },
  { k: "shirtjudge", id: "10003" },
  { k: "pressshot", id: "10004" },
  { k: "angerdish", id: "10005" },
  { k: "noonapple", id: "10006" },
  { k: "marrybird", id: "10007" },
  { k: "musicseeds", id: "10008" },
  { k: "majorwrong", id: "10009" },
  { k: "floormany", id: "10010" },
  { k: "landblack", id: "10011" },
  { k: "laterbeat", id: "10012" },
  { k: "fortyfence", id: "10013" },
  { k: "mustspot", id: "10014" },
  { k: "leaddown", id: "10015" },
  { k: "enjoymuch", id: "10016" },
  { k: "unclebird", id: "10017" },
  { k: "lateSpain", id: "10018" },
  { k: "blacklift", id: "10019" },
  { k: "causesoft", id: "10020" },
  { k: "bonethen", id: "10021" },
  { k: "stockknown", id: "10022" },
  { k: "shirtPeru", id: "10023" },
  { k: "openlook", id: "10024" },
  { k: "floortaste", id: "10025" },
  { k: "marryflat", id: "10026" },
  { k: "cameblue", id: "10027" },
  { k: "finelate", id: "10028" },
  { k: "liarpoor", id: "10029" },
  { k: "Fijinorth", id: "10030" },
  { k: "dreamstill", id: "10031" },
  { k: "lifthuge", id: "10032" },
  { k: "wifegood", id: "10033" },
  { k: "breadalong", id: "10034" },
  { k: "wagonrace", id: "10035" },
  { k: "whiteleft", id: "10036" },
  { k: "hallmetal", id: "10037" },
  { k: "voicegold", id: "10038" },
  { k: "couldhope", id: "10039" },
  { k: "steelshop", id: "10040" },
  { k: "leaddried", id: "10041" },
  { k: "giveuntil", id: "10042" },
  { k: "timedeep", id: "10043" },
  { k: "everyfront", id: "10044" },
  { k: "bellupon", id: "10045" },
  { k: "ninesent", id: "10046" },
  { k: "Kenyacorn", id: "10047" },
  { k: "Asiaflier", id: "10048" },
  { k: "fulltotal", id: "10049" },
  { k: "bellgoes", id: "10050" },
  { k: "gavemayor", id: "10051" },
  { k: "studyplan", id: "10052" },
  { k: "tinycoat", id: "10053" },
  { k: "whatnice", id: "10054" },
  { k: "smallMoon", id: "10055" },
  { k: "heavytotal", id: "10056" },
  { k: "deadshot", id: "10057" },
  { k: "dutywish", id: "10058" },
  { k: "whitegone", id: "10059" },
  { k: "blackguess", id: "10060" },
  { k: "hellospot", id: "10061" },
  { k: "watershoe", id: "10062" },
  { k: "planthouse", id: "10063" },
  { k: "evenbegin", id: "10064" },
  { k: "nightgood", id: "10065" },
  { k: "Spainride", id: "10066" },
  { k: "wantswell", id: "10067" },
  { k: "poemcost", id: "10068" },
  { k: "traintore", id: "10069" },
  { k: "doorcross", id: "10070" },
  { k: "stockrose", id: "10071" },
  { k: "hangtried", id: "10072" },
  { k: "termsslow", id: "10073" },
  { k: "Italywater", id: "10074" },
  { k: "leveltoday", id: "10075" },
  { k: "trustknown", id: "10076" },
  { k: "mayortell", id: "10077" },
  { k: "latesays", id: "10078" },
  { k: "fieldItaly", id: "10079" },
  { k: "linedown", id: "10080" },
  { k: "brokelabor", id: "10081" },
  { k: "againdied", id: "10082" },
  { k: "onlyserve", id: "10083" },
  { k: "goodrope", id: "10084" },
  { k: "spellform", id: "10085" },
  { k: "wedgemuch", id: "10086" },
  { k: "halltown", id: "10087" },
  { k: "glasswhat", id: "10088" },
  { k: "Junelegs", id: "10089" },
  { k: "totalwhom", id: "10090" },
  { k: "angerlabor", id: "10091" },
  { k: "roomsize", id: "10092" },
  { k: "bonespiece", id: "10093" },
  { k: "sickwoman", id: "10094" },
  { k: "feetangry", id: "10095" },
  { k: "forceclean", id: "10096" },
  { k: "handnine", id: "10097" },
  { k: "ropegreen", id: "10098" },
  { k: "typeserve", id: "10099" },
  { k: "meansmall", id: "10100" },
  { k: "weekdeal", id: "10101" },
  { k: "safedraw", id: "10102" },
  { k: "careever", id: "10103" },
  { k: "niecewaves", id: "10104" },
  { k: "sleptsweet", id: "10105" },
  { k: "stilldress", id: "10106" },
  { k: "wifelike", id: "10107" },
  { k: "birdshard", id: "10108" },
  { k: "lineswim", id: "10109" },
  { k: "paintpair", id: "10110" },
  { k: "Japantest", id: "10111" },
  { k: "bornwish", id: "10112" },
  { k: "fearhurt", id: "10113" },
  { k: "nonewhile", id: "10114" },
  { k: "northgift", id: "10115" },
  { k: "ringhalt", id: "10116" },
  { k: "wherebird", id: "10117" },
  { k: "ropemove", id: "10118" },
  { k: "houseyard", id: "10119" },
  { k: "happylegs", id: "10120" },
  { k: "madecost", id: "10121" },
  { k: "Asiatold", id: "10122" },
  { k: "crowdcorn", id: "10123" },
  { k: "doorfruit", id: "10124" },
  { k: "greatchair", id: "10125" },
  { k: "Marsalso", id: "10126" },
  { k: "roomNepal", id: "10127" },
  { k: "uncletouch", id: "10128" },
  { k: "bringbelow", id: "10129" },
  { k: "Marsseven", id: "10130" },
  { k: "shalldare", id: "10131" },
  { k: "holeangle", id: "10132" },
  { k: "pastworth", id: "10133" },
  { k: "laborroot", id: "10134" },
  { k: "nervethat", id: "10135" },
  { k: "applehunt", id: "10136" },
  { k: "Indiashape", id: "10137" },
  { k: "MarchPluto", id: "10138" },
  { k: "teartrue", id: "10139" },
  { k: "learnbreak", id: "10140" },
  /*{ k: "startsoup", id: "5622" },
  { k: "handsdebt", id: "5623" },
  { k: "middlebrain", id: "5624" },
  { k: "eargate", id: "5625" },
  { k: "eatfold", id: "5626" },
  { k: "wandertrees", id: "5627" },
  { k: "scarpneck", id: "5628" },
  { k: "mittenbeam", id: "5629" },
  { k: "angleroom", id: "5630" },
  { k: "blueflock", id: "5631" },
  { k: "mintfold", id: "5632" },
  { k: "matchsize", id: "5633" },
  { k: "anttown", id: "5634" },
  { k: "incomeyear", id: "5635" },
  { k: "deardebt", id: "5636" },
  { k: "eggsday", id: "5637" },
  { k: "sleetoatmeal", id: "5638" },
  { k: "sprayweek", id: "5639" },
  { k: "scanmask", id: "5640" },
  { k: "skirtbone", id: "5641" },
  { k: "lovemonth", id: "5642" },
  { k: "dirtbat", id: "5643" },
  { k: "lacespark", id: "5644" },
  { k: "lunchroomcat", id: "5645" },
  { k: "sidesand", id: "5646" },
  { k: "delayapple", id: "5647" },
  { k: "widenote", id: "5648" },
  { k: "sobtray", id: "5649" },
  { k: "leathertrees", id: "5650" },
  { k: "contractblow", id: "5651" },
  { k: "needperson", id: "5652" },
  { k: "trainspy", id: "5653" },
  { k: "inputchin", id: "5654" },
  { k: "kickloss", id: "5655" },
  { k: "pleadhat", id: "5656" },
  { k: "extendboot", id: "5657" },
  { k: "faintnote", id: "5658" },
  { k: "shattertoy", id: "5659" },
  { k: "shinypage", id: "5660" },
  { k: "wintersmile", id: "5661" },
  { k: "reachcare", id: "5662" },
  { k: "hearingstove", id: "5663" },
  { k: "trampgold", id: "5664" },
  { k: "blowcrime", id: "5665" },
  { k: "vasefang", id: "5666" },
  { k: "gluedime", id: "5667" },
  { k: "rusticmilk", id: "5668" },
  { k: "supportcare", id: "5669" },
  { k: "boatnut", id: "5670" },
  { k: "growthyarn", id: "5671" },
  { k: "cutecow", id: "5672" },
  { k: "trickink", id: "5673" },
  { k: "noiseart", id: "5674" },
  { k: "worryflag", id: "5675" },
  { k: "netdirt", id: "5676" },
  { k: "dealcork", id: "5677" },
  { k: "traysalt", id: "5678" },
  { k: "railear", id: "5679" },
  { k: "dyelove", id: "5680" },
  { k: "suckhand", id: "5681" },
  { k: "controlday", id: "5682" },
  { k: "opttown", id: "5683" },
  { k: "royalcomb", id: "5684" },
  { k: "carvesand", id: "5685" },
  { k: "scowlticket", id: "5686" },
  { k: "vastbread", id: "5687" },
  { k: "goldzebra", id: "5688" },
  { k: "babiesbeast", id: "5689" },
  { k: "cornwound", id: "5690" },
  { k: "wingpart", id: "5691" },
  { k: "ticketsnow", id: "5692" },
  { k: "dresspan", id: "5693" },
  { k: "sixchairs", id: "5694" },
  { k: "coverleg", id: "5695" },
  { k: "mapskin", id: "5696" },
  { k: "enjoyslave", id: "5697" },
  { k: "boiltalk", id: "5698" },
  { k: "hurtship", id: "5699" },
  { k: "mutetent", id: "5700" },
  { k: "loseant", id: "5701" },
  { k: "losscord", id: "5702" },
  { k: "sortcrow", id: "5703" },
  { k: "servantboy", id: "5704" },
  { k: "celerycub", id: "5705" },
  { k: "icearmy", id: "5706" },
  { k: "gatezipper", id: "5707" },
  { k: "zoohead", id: "5708" },
  { k: "cleancloud", id: "5709" },
  { k: "airportsleet", id: "5710" },
  { k: "drumlock", id: "5711" },
  { k: "rulelow", id: "5712" },
  { k: "mixuse", id: "5713" },
  { k: "crazysmile", id: "5714" },
  { k: "slimleg", id: "5715" },
  { k: "fixbook", id: "5716" },
  { k: "pressknife", id: "5717" },
  { k: "tigersleep", id: "5718" },
  { k: "agreeclub", id: "5719" },
  { k: "fancycrime", id: "5720" },
  { k: "wittyair", id: "5721" },
  { k: "foldballs", id: "5722" },
  { k: "skyson", id: "5723" },
  { k: "fanboot", id: "5724" },
  { k: "birthdaycard", id: "5725" },
  { k: "swiftsun", id: "5726" },
  { k: "flatuse", id: "5727" },
  { k: "milkyard", id: "5728" },
  { k: "bulbskin", id: "5729" },
  { k: "sawidea", id: "5730" },
  { k: "workson", id: "5731" },
  { k: "repairtwist", id: "5732" },
  { k: "beecows", id: "5733" },
  { k: "dampnews", id: "5734" },
  { k: "vexgate", id: "5735" },
  { k: "listbike", id: "5736" },
  { k: "petsvoice", id: "5737" },
  { k: "ironhole", id: "5738" },
  { k: "scarrain", id: "5739" },
  { k: "flopfrogs", id: "5740" },
  { k: "dollslove", id: "5741" },
  { k: "owltrain", id: "5742" },
  { k: "dryboys", id: "5743" },
  { k: "chiefsand", id: "5744" },
  { k: "dogfire", id: "5745" },
  { k: "messystraw", id: "5746" },
  { k: "bestmist", id: "5747" },
  { k: "shamebite", id: "5748" },
  { k: "schoolcrush", id: "5749" },
  { k: "missfarm", id: "5750" },
  { k: "guidetrees", id: "5751" },
  { k: "ajargun", id: "5752" },
  { k: "tidytacky", id: "5753" },
  { k: "statebouncy", id: "5754" },
  { k: "auntsave", id: "5755" },
  { k: "tartfixed", id: "5756" },
  { k: "spinjail", id: "5757" },
  { k: "bootdust", id: "5758" },
  { k: "gashski", id: "5759" },
  { k: "deathjam", id: "5760" },
  { k: "teamqueen", id: "5761" },
  { k: "brotherrural", id: "5762" },
  { k: "alertcaress", id: "5763" },
  { k: "retirethankful", id: "5764" },
  { k: "knifeboy", id: "5765" },
  { k: "dimefirst", id: "5766" },
  { k: "seagodly", id: "5767" },
  { k: "birdsconsole", id: "5768" },
  { k: "painoatmeal", id: "5769" },
  { k: "steepeyes", id: "5770" },
  { k: "balancegreedy", id: "5771" },
  { k: "brushtight", id: "5772" },
  { k: "scalediffer", id: "5773" },
  { k: "pollutionfowl", id: "5774" },
  { k: "nodvolleyball", id: "5775" },
  { k: "landspooky", id: "5776" },
  { k: "toeframe", id: "5777" },
  { k: "deercook", id: "5778" },*/
  { k: "tinhot", id: "10145" },
  { k: "dreamrain", id: "10146" },
  { k: "gofeet", id: "10147" },
  { k: "kiteslide", id: "10148" },
  { k: "downcap", id: "10149" },
  { k: "pigear", id: "10150" },
  { k: "spoonhat", id: "10151" },
  { k: "benchcoat", id: "10152" },
  { k: "kinghippo", id: "10153" },
  { k: "cupcherry", id: "10154" },
  { k: "nightfloat", id: "10155" },
  { k: "matball", id: "10156" },
  { k: "firewater", id: "10157" },
  { k: "hairshow", id: "10158" },
  { k: "shoeplant", id: "10159" },
  { k: "conebook", id: "10160" },
  { k: "frogleaf", id: "10161" },
  { k: "boxcar", id: "10162" },
  { k: "musicant", id: "10163" },
  { k: "starmoon", id: "10164" },
  { k: "crabman", id: "10165" },
  { k: "doglemon", id: "10166" },
  { k: "cornbike", id: "10167" },
  { k: "lionhand", id: "10168" },
  { k: "familyflag", id: "10169" },
  { k: "flaghand", id: "10170" },
  { k: "boxflag", id: "10171" },
  { k: "kitelion", id: "10172" },
  { k: "crabhand", id: "10173" },
  { k: "ballman", id: "10174" },
  { k: "dogkite", id: "10175" },
  { k: "headcorn", id: "10176" },
  { k: "milkdrum", id: "10177" },
  { k: "milkcup", id: "10178" },
  { k: "snailhat", id: "10179" },
  { k: "chairmitten", id: "10180" },
  { k: "birdboat", id: "10181" },
  { k: "seatoad", id: "10182" },
  { k: "pizzapen", id: "10183" },
  { k: "zigzag", id: "10184" },
  { k: "keyknee", id: "10185" },
  { k: "sunsheep", id: "10186" },
  { k: "bunkbed", id: "10187" },
  { k: "starfish", id: "10188" },
  { k: "carrotlamp", id: "10189" },
  { k: "barkrobot", id: "10190" },
  { k: "fishface", id: "10191" },
  { k: "treebat", id: "10192" },
  { k: "hookriver", id: "10193" },
  { k: "heartline", id: "10194" },
  { k: "beachtrain", id: "10195" },
  { k: "swingtrain", id: "10196" },
  { k: "stairsbug", id: "10197" },
  { k: "doorfork", id: "10198" },
  { k: "bluetrain", id: "12010" },
  { k: "greenplan", id: "12011" },
  { k: "redbroken", id: "12012" },
  { k: "bluemat", id: "12013" },
  { k: "ballgreen", id: "12014" },
  { k: "roundblue", id: "12015" },
  { k: "grassgo", id: "12016" },
  { k: "soccertree", id: "12017" },
  { k: "stadiumlight", id: "12018" },
  { k: "purpledog", id: "12019" },
  { k: "goodsun", id: "12020" },
  { k: "hotread", id: "12021" },
  { k: "danceplay", id: "12022" },
  { k: "earthblue", id: "12023" },
  { k: "canleft", id: "12024" },
  { k: "intofirst", id: "12025" },
  { k: "bigbad", id: "12026" },
  { k: "badgood", id: "12027" },
  { k: "goodgreen", id: "12028" },
  { k: "smallshort", id: "12029" },
  { k: "newday", id: "12030" },
  { k: "oldnight", id: "12031" },
  { k: "nightday", id: "12032" },
  { k: "bigsmall", id: "12033" },
  { k: "downleft", id: "12034" },
  { k: "upright", id: "12035" },
  { k: "outold", id: "12036" },
  { k: "lowbar", id: "12037" },
  { k: "hightree", id: "12038" },
  { k: "hatdesk", id: "12039" },
  { k: "songsand", id: "12040" },
  { k: "dirtsoda", id: "12041" },
  { k: "ricegreen", id: "12042" },
  { k: "leafseed", id: "12043" },
  { k: "roofnail", id: "12044" },
  { k: "bellball", id: "12045" },
  { k: "sockshoe", id: "12046" },
  { k: "meatcorn", id: "12047" },
  { k: "drumbeat", id: "12048" },
  { k: "bikerain", id: "12049" },
  { k: "fireice", id: "12050" },
  { k: "hairsky", id: "12051" },
  { k: "lipdoor", id: "12052" },
  { k: "lampchair", id: "12053" },
  { k: "dollball", id: "12054" },
  { k: "ringship", id: "12055" },
  { k: "boxbus", id: "12056" },
  { k: "frogmoon", id: "12057" },
  { k: "fishfrog", id: "12058" },
  { k: "armfoot", id: "12059" },
  { k: "facefoot", id: "12060" },
  { k: "noseleg", id: "12061" },
  { k: "carkey", id: "12062" },
  { k: "bagkey", id: "12063" },
  { k: "starbook", id: "12064" },
  { k: "bedblue", id: "12065" },
  { k: "handred", id: "12066" },
  { k: "windbox", id: "12067" },
  { k: "runsun", id: "12068" },
  { k: "pencar", id: "12069" },
  { k: "carcat", id: "12070" },
  { k: "dogbird", id: "12071" },
  { k: "eggtoy", id: "12072" },
  { k: "redmountain", id: "12073" },
  { k: "bluefrog", id: "12074" },
  { k: "redtree", id: "12075" },
  { k: "redband", id: "12076" },
  { k: "bluebed", id: "12077" },
  { k: "handbook", id: "12078" },
  { k: "toysun", id: "12079" },
  { k: "keybed", id: "12080" },
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
  "9857",
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
  checkParam("&loc=" + val);
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
        if (approvedKeys.includes(pk.value)) {
          window.localStorage.setItem("CucumberPK", "true");
          window.localStorage.setItem("CucumberUser", matrixMap.get(pk.value));
          checkParam("");
          clicky.pageview();
          loggedIn = true;
          //document.getElementById('loginError').style.visibility = "hidden";
          document.getElementById("loginError").style.display = "none";

          //get the key mapping and padd to grant access
          document.location.href =
            "grantaccess.html?Rev=" + matrixMap.get(pk.value);
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
