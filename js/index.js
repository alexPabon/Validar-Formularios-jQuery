$(document).ready(function()	
{
	val_entradas();
	$("#caja_gral").hide();
	$('input[type="button"').click(function()
	{
		//Introducir los datos personales.
		if($(this).attr("id")=="crear")
		{
			var datos = $("#d_pers label");
			var err,info,nom,flag,añadir = "",campos="",nom_frm = "",nom_corto = "",experiencia="",campoExperiencia="";
			var idioma="",campoIdioma="",campoAficiones="",campoPagInteres="";
			var posicion = "",info_entrada = "",resul,confi="",lbl1,frm,entradas,seleccionar;			
			
			$.each(datos,function(index)
			{
				err = "";
				do{
					nom = datos.eq(index).attr("for");
					info = prompt(err+"\n"+datos[index].innerHTML);

					if(info==null){
						$("#caja_gral").show("slow");
						$("#crear").hide();
					}

					if(nom=="fechaNac"){
						flag = validar(nom,info)
						$("#d_pers input").eq(index).val(flag[1]);									
					}
					else if(nom=="estado"){									
						flag = validar(nom,info.toLowerCase());
						$("#estado").val(flag[1]);

						if(flag[0]){
							$("#estado").attr('class','info correcto');
						}else{									
							$("#estado").attr('class','info error');
							err=flag[1];									
						}									
					}
					else{
						$("#d_pers input").eq(index).val(info);
						flag = validar(nom,info)									
					}							
					
					if(flag[0] && nom!="estado"){
						$("#d_pers input").eq(index).attr('class','info correcto');
					}else{
						if(nom!="estado"){
							$("#d_pers input").eq(index).attr('class','info error');
							err=flag[1];
						}
					}
				}while(flag[0]==false);
			});	

			$("#caja_gral").show("slow");
			$(this).hide();										
		}			

		//Crear entradas de Experiencia
		if($(this).attr("value")=="Experiencia")
		{					
			añadir = confirm("Desea añadir los campos de Experiencia?");					

			if(añadir)
			{
				campos = parseInt(prompt("Cuantos campos deseas crear?"));
				if(campos>0)
				{
					experiencia = '<ul><li>';					
					experiencia += '<label>Empresa</label><label>Cargo</label><label class="años" style="width:10vw;">Años</label>';
					experiencia += '</li></ul>';

					$("#experiencia").append(experiencia);
					for(var i=0; i<campos; i++)
					{
						campoExperiencia = '<li>';
						campoExperiencia += '<input type="text" class="info" id="emp0'+i+'" name="emp0'+i+'"><span class="msnError1"></span>';
						campoExperiencia += '<input type="text" class="info" id="carg0'+i+'" name="carg0'+i+'"><span class="msnError1"></span>';
						campoExperiencia += '<input type="number" class="info" id="antig0'+i+'" name="antig0'+i+'" maxlength="3" style="width:10vw; padding:5px 1px;"><span class="msnError1"></span>';
						campoExperiencia += '</li>';
						$("#experiencia ul").append(campoExperiencia);
						
					}
					val_entradas();
					$("#experiencia").append('<input type="button" value="Añadir Campo" id="añadir0">');
					$(this).css("display","none");
					botones_añadidos0();																		
				}
			}					
		}

		//Crear entradas de Idiomas
		if($(this).attr("value")=="Idiomas")
		{					
			añadir = confirm("Desea añadir los campos de Idiomas?");
			

			if(añadir)
			{
				campos = parseInt(prompt("Cuantos campos deseas crear?"));
				if(campos>0)
				{
					idioma = '<ul><li>';
					idioma += '<label>Idioma</label><label style="width:7vw;">Nivel</label>';
					idioma +='</li></ul>';
					$("#idiomas").append(idioma);

					for(var i=0; i<campos; i++)
					{
						campoIdioma = '<li>'
							campoIdioma += '<input type="text" class="info" id="idioma0'+i+'" name="idioma0'+i+'"><span class="msnError1"></span>';
							campoIdioma += '<select class="info" id="nivel0'+i+'" name="nivel0'+i+'">';
								campoIdioma += '<option>---</option>';
								campoIdioma += '<option value="basico">Basico</option>';
								campoIdioma += '<option value="medio">Medio</option>';
								campoIdioma += '<option value="alto">Alto</option>';
							campoIdioma += '</select><span class="msnError1"></span>';
						campoIdioma += '</li>';
						$("#idiomas ul").append(campoIdioma);
						
					}
					val_entradas();
					$("#idiomas").append('<input type="button" value="Añadir Campo" id="añadir1">');
					$(this).css("display","none");
					botones_añadidos1();																		
				}
			}					
		}

		//Crear entradas de Aficiones
		if($(this).attr("value")=="Aficiones")
		{					
			añadir = confirm("Desea añadir los campos de Aficiones?");					

			if(añadir)
			{
				campos = parseInt(prompt("Cuantos campos deseas crear?"));
				if(campos>0)
				{
					$("#aficiones").append('<ul></ul>')
					for(var i=0; i<campos; i++)
					{
						campoAficiones = '<li>';
							campoAficiones += '<label for="afic0'+i+'" class="numeros">'+(i+1)+'</label>';
							campoAficiones += '<input type="text" class="info" id="afic0'+i+'"><span class="msnError1"></span>';
						campoAficiones += '</li>';
						$("#aficiones ul").append(campoAficiones);						
					}
					val_entradas();
					$("#aficiones").append('<input type="button" value="Añadir Campo" id="afic1">');
					$(this).css("display","none");
					botones_añadidos2();																		
				}
			}
		}

		//Crear entradas de Enlaces
		if($(this).attr("value")=="Enlaces")
		{
			añadir = confirm("Desea añadir los campos de Aficiones?");					

			if(añadir)
			{
				campos = parseInt(prompt("Cuantos campos deseas crear?"));
				if(campos>0)
				{
					$("#enlaces").append('<ul></ul>')
					for(var i=0; i<campos; i++)
					{
						campoPagInteres = '<li>';
						campoPagInteres += '<label for="enla0'+i+'" class="numeros">'+(i+1)+'</label>';
						campoPagInteres += '<input type="text" class="info" id="enla0'+i+'"><span class="msnError1"></span>';
						campoPagInteres += '</li>';
						$("#enlaces ul").append(campoPagInteres);
						
					}
					val_entradas();
					$("#enlaces").append('<input type="button" value="Añadir Campo" id="enla1">');
					$(this).css("display","none");
					botones_añadidos3();																		
				}
			}
		}

		//Editar el contenido de las entradas.
		if($(this).attr("id")=="editar")
		{
			$(".info").removeAttr('disabled');
			$("#estado").removeAttr('disabled');
			$("#nombre").select();
		}

		// ============================== Validar campos =========================================
		//========================================================================================

		//Confirmar el contenido que se ha escrito.
		if($(this).attr("id")=="confirmar")
		{
			lbl1 = $("#d_pers label")
			confi="";			
			var entradasOk = true;
			$(".info").removeAttr('disabled'); 

			$.each($(".info"),function(index)
				{					
					contenido = $(".info").eq(index).val();
					idEntrada = $(".info").eq(index).attr('id');
					

					if(idEntrada=="fechaNac"){
						var fecha = contenido.split("-").reverse().join("/");
						entradas = validar(idEntrada,fecha);
					}else{
						entradas = validar(idEntrada,contenido);						
					}

					if(entradas[0]){
						$(this).attr('class','info correcto');
					}else{
						$(this).attr('class','info error');
						entradasOk = false;
					}
					
				});			
			
			if(entradasOk){				

				$.each(lbl1,function(index)
				{
					if(lbl1.eq(index).attr("for")=="fechaNac"){

						var rev = $("#d_pers input").eq(index).val().split("-").reverse().join("-");
						confi += lbl1.eq(index).html()+" "+rev+"\n";

					}else if(lbl1.eq(index).attr("for")=="estado"){

						var est = $("#estado").val();
						confi += lbl1.eq(index).html()+" "+est+"\n";

					}else{						
						confi += lbl1.eq(index).html()+" "+$("#d_pers input").eq(index).val()+"\n";
					}							
				});
				alert("DATOS PERSONALES \n\n"+confi);

			}else{
				
				alert("Falta llenar algunos campos");				
			}					
		}								
	});		

	//Valida la entrada de la fecha cuando damos click en el seleccionador de fuechas.
	$('input#fechaNac').click(function()
	{
		posicion = $(this).attr("id");
		info_entrada = $(this).val();
		cambio = info_entrada.split("-").reverse();
		ca = cambio[0]+"/"+cambio[1]+"/"+cambio[2];				
		 
		resul = validar(posicion,ca);				

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

	//Valida la entrada de la fecha cuando damos salimos de el seleccionador de fuechas.	
	$('input#fechaNac').blur(function()
	{
		posicion = $(this).attr("id");
		info_entrada = $(this).val();
		cambio = info_entrada.split("-").reverse();
		ca = cambio[0]+"/"+cambio[1]+"/"+cambio[2];			
		 
		resul = validar(posicion,ca);				

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

	//Valida el estado de soltero o casado.
	$("#estado").blur(function()
	{
		posicion = $(this).attr("id");
		info_entrada = $(this).val();
		resul = validar(posicion,info_entrada);

		if(resul[0])
		{					
			$(this).next().html("");
			$(this).attr('class','info correcto');
		}else
		{					
			$(this).next().html(resul[1]);
			$(this).attr('class','info error');					
		}
	});							
});