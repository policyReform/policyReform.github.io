	
		var currentURL;
        var loggedIn = false;//keyGranted();
        //var loggedIn = keyGranted();
        var requestedPage;
        var currentPage;
        var matrix = [{"k":"zztop","id":"99821"}];
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
          
                if( getPage() != 'login.html'){
                    
                    document.location.href="login.html";    
                }else{
                   
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

          