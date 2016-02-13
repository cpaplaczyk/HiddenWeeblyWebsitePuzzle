

	// Note: there may be some unfinished code here, that needs finishing...

	// You should probably try to get this function working...
	function solvePuzzle(auth) {

			new Ajax.Request('/weebly/publicBackend.php', {
				parameters:{
					pos: 'solvepuzzle'
				},
				onSuccess:handlerSolvePuzzle,
				onFailure:function() { alert('Transmission error. Please try again.'); }
			});

	}

	function handlerSolvePuzzle(t) {

			var responseText = t.responseText;
			responseText = responseText.replace(/\n/, "");

			if (responseText.match(/!!$/)) {

				alert("Oops: "+responseText);

			} else {

				// Still need to decode the response

				// Once the response is decoded, we can fire off the alert
				// giving the user further instructions

				//alert('To complete the challenge, '+t.responseText);

			}

	}

