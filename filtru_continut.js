
function filtrare_continut() {
	
	// preluam valorile din selectoare
	
	var marca = document.getElementById('marca').value;
	var culoare = document.getElementById('culoare').value;
	var anfabricatie = document.getElementById('anfabricatie').value;
	
	// preluam div-urile de continut
	
	var continut = document.getElementById('content').getElementsByTagName('div');
	
	for (x in continut) {
		
		var container = continut[x];
		
		if (typeof container != 'object'){
			
			continue;
			
		}
		
		// verific indeplinirea conditiilor de filtrare
		
		var rezultat_valid = true;
		
		var c_marca = container.getAttribute('data-marca');
		
		if (marca != 0 && marca != c_marca) {
			rezultat_valid = false;			
		}
		
		var c_culoare = container.getAttribute('data-culoare');
		
		if (rezultat_valid == true && culoare != 0 && culoare != c_culoare) {
			rezultat_valid = false;			
		}
		
		var c_anfabricatie = container.getAttribute('data-anfabricatie');
		
		if (rezultat_valid == true && anfabricatie != 0 && anfabricatie != c_anfabricatie) {
			rezultat_valid = false;			
		}
		
		// schimb vizibilitatea div-ului
		
		if (rezultat_valid == true) {
			
			container.style.display = 'block';
			
		} else {
			
			container.style.display = 'none';
			
		}
		
	}
	
}

function set_events() {

	var selectors = document.getElementById('formular_filtrare').getElementsByTagName('select');

	for (x in selectors) {
		
		var selector = selectors[x];
		
		selector.onchange = function() {
			
			filtrare_continut();
			
		};
		
	}

}

set_events();

