<h1>Validar formualario con jQuery y expresiones regulares</h1>
<p>
	Gracias a javascript podremos validar formularios desde el lado del cliente evitando realizar muchas consultas al servidor y que llegue informacion inutil. <br><br>
	Si bien validar el envio de datos antes de ser procesados con javascript es muy importante, tambien se debe tener en cuenta que las validaciones en el servidor nunca debe faltar, ya que el usuario puede tener deshabilitado javascript o bien puede burlar facilmente esta seguridad.<br><br>
	Existe una libreria con jQuery **validate.js** que lo hace mas facil, pero este proyecto se ha creado sin utilizar esa libreria.<br><br>
	La validacion del formulario se realiza con la libreria de jQuery y expresiones regulares. Cada vez que presionamos el teclado, la entrada se irá validando, en algunas entradas, aparece el mensaje de error explicando que debe hacer para que esa entrada sea correcta.
</p>

<h3>Pasos a seguir para el desarrollo de la aplicacion</h3>
<p>
	Mediante un botón inicial, se pedirá al usuario un **el nombre, el primer apellido, el
	segundo apellido, el DNI, la dirección, el teléfono y la fecha de nacimiento**. Datos necesarios
	para llenar un CV.<br><br>
	Los datos se pedirán mediante “prompt”, se validarán y si no son correctos se volverán a
	pedir.<br><br>
	Una vez se han pedido todos los datos se creará todo el formulario y se llenaran los campos
	con los datos introducidos. Una vez hecho, también se crearán las opciones añadir **experiencia
	laboral, idiomas, hobbies y páginas de interés propio**.<br><br>
	Cada una de estas opciones preguntará si quiere introducir datos y una vez confirmado, el total
	de campos que quiere introducir. Se crearán tantos campos para introducir datos como el
	número introducido por el usuario.<br>
	Una vez creados los campos con los datos, validarlos todos mediante funciones y si es
	necesario, expresiones regulares.<br>
	Los campos de experiencia laboral, idiomas y hobbies también deben estar validados. Se debe
	mostrar un color para un campo correcto y otro para los incorrectos. Además, se ha de
	mostrar un mensaje al lado del campo incorrecto indicando como ha de ser el texto.<br><br>
	Aparecerá y desaparecerá en el instante en el que el contenido esté bien o mal.
	Finalmente habrá un botón para enviar los datos. Este botón comprobará que todo está
	correcto; si lo está mostrará los datos principales en un “alert”, en caso contrario mostrará un
	mensaje de error indicando que falten campos por validar.
</p>