var Gauntlet = (function(OldGauntlet) {
	OldGauntlet.startAttack = function(studentObj, deathEaterObj){
		$("#studentStats").html("");
		$("#studentStats").append(studentObj.toString());
		$("#deathEaterStats").html("");
		$("#deathEaterStats").append(deathEaterObj.toString());
	};
	OldGauntlet.runAttack = function(studentObj, deathEaterObj, battleObj){
        studentObj.health -= deathEaterObj.weapon.damage;
				var studentHealthBar = $("#student_health");
				console.log("studentHealthBar.value", studentHealthBar);
				studentHealthBar.attr('value', studentObj.health);
        		console.log("student health, post damage: ",studentObj.health);
				deathEaterObj.health -= studentObj.weapon.damage;
				var deathEaterHealthBar = $("#deathEater_health");
        		deathEaterHealthBar.attr('value', deathEaterObj.health);
        		console.log("deathEater health, post damage: ",deathEaterObj.health);
				$("#battleStats").html(`<div> Battle${battleObj}: ${studentObj.playerName} has ${studentObj.health} health remaining</div>`);
        $("#battleStats").append(`<div> Battle${battleObj}: ${deathEaterObj.playerName} has ${deathEaterObj.health} health remaining</div>`);
        if (studentObj.health <= 0) {
            $("#loseMessage").append(`You lost to your enemy with ${studentObj.health} points!`)
			$("#userLose").modal('show');
			$(".card__button").addClass("disabledbutton");
        } else if (deathEaterObj.health <= 0) {
            $("#winMessage").append(`You won with ${studentObj.health} points over your enemy!`)
			$("#userWin").modal('show');
			$(".card__button").addClass("disabledbutton");
        }


	};
	OldGauntlet.castSpell = function(studentObj, deathEaterObj, battleObj){

	};
	return OldGauntlet;
})(Gauntlet || {});
