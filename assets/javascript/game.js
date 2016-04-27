// Javascript Star Wars RPGH
function startGame() {
	

    // VARIABLES
    // ====================================================================
    // Here we create variables for tracking the number of sandwiches eaten
    var lukePower = 100;
    var obiPower = 120;
    var kyloPower = 150;
    var darthPower = 180;
    var yourCharacter;
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
    $("#luke").on("click", function(){
            yourCharacter='luke';
            $('#firstChoice').replaceWith('');
            attackPower=lukePower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Luke Skywalker</div>');
            $('.yourCharacter').append('<img src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
                         

            
            // $('#insertImage').after(attackPower);
            // $('#insertImage').after('<div><img src="assets/images/luke-skywalker.png" width=150px height=150px></div>');
            // $('#insertImage').after('<div>Luke Skywalker</div>');
            // $('#charName').html('Luke Skywalker');
            //$('#yourImage').html('<img src="assets/images/luke-skywalker.png" width=150px height=150px>');
            //$('#yourPower').html(attackPower);
    }) /* end luke click */

    $("#obi-wan").on("click", function(){
            yourChar='obi-wan';
            $('#firstChoice').replaceWith('');
            attackPower=obiPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Obi-Wan Kenobi</div>');
            $('.yourCharacter').append('<img src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
    }) /* end obi-wan click */

    $("#darth").on("click", function(){
            yourChar='darth';
            $('#firstChoice').replaceWith('');
            attackPower=darthPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Darth Vader</div>');
            $('.yourCharacter').append('<img src="assets/images/darth-vader.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
        
    }) /* end darth click */

    $("#kylo").on("click", function(){
            yourChar='kylo';
            $('#firstChoice').replaceWith('');
            attackPower=kyloPower;
            $('#yourChar').after('<div class ="yourCharacter"></div>');
            $('.yourCharacter').append('<div>Kylo Ren</div>');
            $('.yourCharacter').append('<img src="assets/images/kylo-ren.png" width=150px height=150px><br>');
            $('.yourCharacter').append(attackPower);
        
    }) /* end kylo click */



    



} //end startGame()

