//------------------------------------- FUNCIONES --------------------------------------

function botones_añadidos0()
{
	var lista0,nom_id0,pos0;
	
	$('input[type="button"').on("click",function()
	{			
		//Añadir campo de experiencia
		if($(this).attr("id")=="añadir0")
			{
				lista0 = $("#experiencia ul li input");
				nom_id0 = lista0.eq(lista0.length-1).attr("id");
				pos0 = parseInt(nom_id0.substr(nom_id0.length-2,nom_id0.length));
				
				campoExperiencia = '<li>';
					campoExperiencia += '<input type="text" class="info" id="emp0'+(pos0+1)+'" name="emp0'+(pos0+1)+'"><span class="msnError1"></span>';
					campoExperiencia += '<input type="text" class="info" id="carg0'+(pos0+1)+'" name="carg0'+(pos0+1)+'"><span class="msnError1"></span>';
					campoExperiencia += '<input type="number" class="info" id="antig0'+(pos0+1)+'" name="antig0'+(pos0+1)+'" maxlength="3" style="width:10vw; padding:5px 1px;"><span class="msnError1"></span>';
				campoExperiencia += '</li>';	

				$("#experiencia ul").append(campoExperiencia);
				val_entradas()
			}			
	});	
}

function botones_añadidos1()
{	
	var lista1,nom_id1,pos1;	
	
	$('input[type="button"').on("click",function()
	{
		//Añadir campo de Idioma
		if($(this).attr("id")=="añadir1")
		{
			lista1 = $("#idiomas ul li input");
			nom_id1 = lista1.eq(lista1.length-1).attr("id");
			pos1 = parseInt(nom_id1.substr(nom_id1.length-2,nom_id1.length));

			campoIdioma = '<li>'
				campoIdioma += '<input type="text" class="info" id="idioma0'+(pos1+1)+'" name="idioma0'+(pos1+1)+'"><span class="msnError1"></span>';
				campoIdioma += '<select class="info" id="nivel0'+(pos1+1)+'" name="nivel0'+(pos1+1)+'">';
					campoIdioma += '<option>---</option>';
					campoIdioma += '<option value="basico">Basico</option>';
					campoIdioma += '<option value="medio">Medio</option>';
					campoIdioma += '<option value="alto">Alto</option>';
				campoIdioma += '</select><span class="msnError1"></span>';
			campoIdioma += '</li>';

			$("#idiomas ul").append(campoIdioma);
			val_entradas();				
		}		
	});	
}

function botones_añadidos2()
{
	var lista2,nom_id2,pos2;
	var nom_frm="";
	$('input[type="button"').on("click",function()
	{
		//Añadir campo de Aficiones
		if($(this).attr("id")=="afic1")
		{
			nom_frm = $(this).attr("id").substring(0,$(this).attr("id").length-1);
			lista2 = $("#aficiones ul li label");
			nom_id2 = lista2.eq(lista2.length-1).html();
			pos2 = parseInt(nom_id2);

			campoAficiones = '<li>';
				campoAficiones += '<label for="afic0'+(pos2+1)+'" class="numeros">'+(pos2+1)+'</label>';
				campoAficiones += '<input type="text" class="info" id="afic0'+(pos2+1)+'"><span class="msnError1"></span>';
			campoAficiones += '</li>';
			
			$("#aficiones ul").append(campoAficiones);
			val_entradas();				
		}
	});	
}

function botones_añadidos3()
{
	var lista3,nom_id3,pos3;
	var nom_frm="";
	$('input[type="button"').on("click",function()
	{
		//Añadir campo de enlaces.
		if($(this).attr("id")=="enla1")
		{
			lista3 = $("#enlaces ul li label");
			nom_id3 = lista3.eq(lista3.length-1).html();
			pos3 = parseInt(nom_id3);

			campoPagInteres = '<li>';
			campoPagInteres += '<label for="enla0'+(pos3+1)+'" class="numeros">'+(pos3+1)+'</label>';
			campoPagInteres += '<input type="text" class="info" id="enla0'+(pos3+1)+'"><span class="msnError1"></span>';
			campoPagInteres += '</li>';
			
			$("#enlaces ul").append(campoPagInteres  );
			val_entradas();				
		}
	});	
}

function val_entradas()
{
	//Valida las entradas, despues de pulsar cada letra del teclado.
	$('input[class="info"]').keyup(function()
	{
		var posicion = $(this).attr("id");
		var info_entrada = $(this).val();
		var resul;			
		resul = validar(posicion,info_entrada);				

		if(resul[0])
		{
			$(this).attr('class','info correcto');
			$(this).next().html("");
		}else
		{
			$(this).attr('class','info error');
			$(this).next().html(resul[1]);				
		}			
	});	

	//Valida el Nivel de Idioma.
	$(".nivel").blur(function()
	{
		var posicion = $(this).attr("id");
		var info_entrada = $(this).val();
		var resul = validar(posicion,info_entrada);
		var resul;						

		if(resul[0])
		{
			$(this).attr('class','info correcto');
			$(this).next().html("");
		}else
		{
			$(this).attr('class','info error');
			$(this).next().html(resul[1]);				
		}

	});	

	//Valida la antiguedad.
	$('input[type="number"]').blur(function()
	{
		var posicion = $(this).attr("id");
		var info_entrada = $(this).val();
		var resul = validar(posicion,info_entrada);
		var resul;						

		if(resul[0])
		{
			$(this).attr('class','info correcto');
			$(this).next().html("");
		}else
		{
			$(this).attr('class','info error');
			$(this).next().html(resul[1]);				
		}

	});		
}

function validar(pos,inf)
{	
	//Valida todos los campos de entradas y select.
	var num_tel = inf.substring(0,1);
	var nombreId = pos.substring(0,5);

	if(pos=="nombre" || pos=="apellido1" || pos=="apellido2"){
		return [/^[a-z A-Z]{3,20}$/.test(inf),"Error, debe tener mas de 3 caracteres"]	

	}else if(pos=="dni"){

		if(/^\d{8}[a-zA-Z]{1}$/.test(inf)){
			var letra =["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
			var numero = parseInt(inf.substr(0,inf.length-1));
			var let = inf.substr(inf.length-1,inf.length).toUpperCase();
			var resto = numero%23;

			if(let==letra[resto])
				return [/^\d{8}[a-zA-Z]{1}$/.test(inf),""];
			else
				return [false,"La letra no coincide con el numero!"];
			
		}else{
			return [false,"DNI erroneo!"];
		}	

	}else if(pos=="direc"){		
		return [/^[a-z A-Z0-9ª/º#.-]{3,50}$/.test(inf),"Solo aceptan ciertos caracteres especiales \"/.#ºª-\""];

	}else if(pos=="tel"){

		if(num_tel==9 || num_tel==7 || num_tel==6 )
			return [/^[0-9]{9,9}$/.test(inf),"Debe haber nueve numeros"];
		else
			return [false,"El numero debe comenzar por 9,7,6 y debe haber 9 numeros."];

	}else if(pos=="fechaNac"){

		if(/^([0-2][0-9]|3[0-1])(\/)(0[0-9]|1[0-2])\2(\d{4})$/.test(inf)){			
			var cambio = inf.split("/");
			return [true,cambio[2]+"-"+cambio[1]+"-"+cambio[0]];
		}else{
			return [false,"La fecha debe ir dd/mm/yyyy"];
		}

	}else if(pos=="estado"){		

		if(inf=="soltero")
			return [true,"soltero"];		
		else if(inf =="casado")
			return [true,"casado"];
		else			
			return[false,"Debe escribir: soltero/casado"];
		
	}else if(nombreId=="nivel" || pos=="number" || nombreId=="antig"){		

		if(inf>0 || inf=="basico" || inf=="medio" || inf=="alto")
			return [true,""];		
		else			
			return [false,"Falta datos en esta linea"];

	}else{

		if(inf.length>=2)
			return [true,""];		
		else
			return [false,"**"];
	}		
}