// Javascript Star Wars RPG
function startGame() {
	

    // VARIABLES
    // ====================================================================
    // Here we create variables for tracking the number of sandwiches eaten
    var lukePower = 100;
    var obiPower = 120;
    var kyloPower = 150;
    var darthPower = 180;
    var yourFighter;
    var enemy;
    
    var attackPower;
    var enemyPower;
    
    $('#lukePower').html(lukePower);
    $('#obiPower').html(obiPower);
    $('#darthPower').html(darthPower);
    $('#kyloPower').html(kyloPower);


    // FUNCTIONS
    // ====================================================================
    // Here we create various on "click" functions which capture the clicks
    // Inside each click event is the code to create an alert, update the counter, then show the updated count.
 
 /* Choose Luke */

    $("#luke").on("click", function(){
            yourFighter='luke';
            $('#firstChoice').replaceWith('');
            attackPower=lukePower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Luke Skywalker</div>');
            $('.yourCharacter').append('<img src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
            yourEnemies();
                              
    }) /* end luke click */

    
/* Choose Obi-Wan */

    $("#obi-wan").on("click", function(){
            yourFighter='obi-wan';
            $('#firstChoice').replaceWith('');
            attackPower=obiPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Obi-Wan Kenobi</div>');
            $('.yourCharacter').append('<img src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
            yourEnemies();
    }) /* end obi-wan click */

 

/* Choose Darth Vader */

    $("#darth").on("click", function(){
            yourFighter='darth';
            $('#firstChoice').replaceWith('');
            attackPower=darthPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Darth Vader</div>');
            $('.yourCharacter').append('<img src="assets/images/darth-vader.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
            yourEnemies();
        
    }) /* end darth click */

  
/* Choose Kylo Ren */

    $("#kylo").on("click", function(){
            yourFighter='kylo';
            $('#firstChoice').replaceWith('');
            attackPower=kyloPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Kylo Ren</div>');
            $('.yourCharacter').append('<img src="assets/images/kylo-ren.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
            yourEnemies();
        
    }) /* end kylo click */


/* choose your enemy click events */

function yourEnemies()  {
    console.log(yourFighter)
    if (yourFighter=='luke')   {

        
        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);


        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower); 


    }   /* end  if luke */


    if (yourFighter=='obi-wan')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        
        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);

        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower);


    } /* end  if obi-wan */

    if (yourFighter=='darth')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower);

    } /* end  if darth */

    if (yourFighter=='kylo')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);
       

    } /* end  if kylo */

} /* end of function yourEnemies() */

    



} //end startGame()

