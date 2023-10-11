        		// Selecteer alle afbeeldingselementen en de modale elementen
				var afbeeldingen = document.querySelectorAll(".containerPhotoPage img");
				var modaal = document.getElementById("vergroteAfbeelding");
		
				// Selecteer de vergrote afbeelding en de sluitknop in het modale element
				var vergroteAfbeelding = document.getElementById("vergroteAfbeeldingImg");
				var sluitknop = document.getElementById("sluitknop");
		
				// Voeg een klikgebeurtenis toe aan alle afbeeldingselementen
				for (var i = 0; i < afbeeldingen.length; i++) {
					afbeeldingen[i].addEventListener("click", function() {
						// Toon het modale element
						modaal.style.display = "block";
						// Stel de bron van de vergrote afbeelding in op de bron van het geklikte afbeeldingselement
						vergroteAfbeelding.src = this.src;
					});
				}
		
				// Voeg een klikgebeurtenis toe aan de sluitknop in het modale element
				sluitknop.addEventListener("click", function() {
					// Verberg het modale element
					modaal.style.display = "none";
				});