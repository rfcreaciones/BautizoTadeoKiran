



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">Judith Flores Rivera <br><br> <p class="textos-alert-inicio-T3">Tengo el honor de invitar a usted y a su apreciable familia al Bautizo y primer aniversario de mi hijo:</p><br><p class="textos-alert-inicio-T2">Tadeo Kiran Flores Rivera</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#d7a435",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	background: '#fff url(img/indx.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
		$( "#onload" ).fadeOut(5000);
		$("body").removeClass("hidden");


	}

});



$('#ceremonia').click(function () {
Swal.fire({
	title:'Ubicación de la Ceremonía ',
	//text: '',
	html:'<p>Casa de retiros Agua Viva, Dominicos<br>Cuándo: Sábado 19 de Diciembre<br>Dirección: 562X+65 Santiago Cuauhtenco, Estado de México.</p><div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.02043005598!2d-98.7545848247926!3d19.150582982069686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3ca473e99cbb%3A0x1b5e5e3be1fbfa4a!2sCasa%20de%20retiros%20Agua%20Viva%2C%20Dominicos!5e0!3m2!1ses-419!2smx!4v1794283014821!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>',
	//icon:'success'
	confirmButtonText:'Cerrar',
	//footer:'Parroquia de Dulce Nombre de Jesus ',

});
});

$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Auditorio Bienes Comunales</p><p>Dirección: Reforma & Florida, Manzana 004, 56935 Santa Isabel Chalma, Méx.</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.2207273334265!2d-98.76378142622444!3d19.156602050362523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3d005a1b63cf%3A0x46ef7f01cc1ae460!2sBIENES%20COMUNALES%20SANTA%20ISABEL%20CHALMA!5e0!3m2!1ses-419!2smx!4v1794283406123!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
	});
	
	$('#liverpool').click(function () {
		Swal.fire({
			title:'Mesa de regalos Liverpool',
			//text: '',
		
			html:'<p>Número de Evento: 12345678<p/><br> <a href="https://mesaderegalos.liverpool.com.mx/eventodebusqueda" target="_blank"> Ir a Liverpool</a>',
			//icon:'success'
			confirmButtonText:'Cerrar',
			confirmButtonColor: "#917c07f1",
			//footer:'Parroquia de Dulce Nombre de Jesus ',
		
		});
	});
	
	$('#transferencia').click(function () {
			Swal.fire({
				title:'Datos para Transferencia',
				//text: '',
			
				html:'<p>Cuenta BBVA<p/><p>Nombre: Nombre de Cuenta<p/><br>Clabe: 0101234567891011',
				//icon:'success'
				confirmButtonText:'Cerrar',
				confirmButtonColor: "#917c07f1",
				//footer:'Parroquia de Dulce Nombre de Jesus ',
			
			});
	});
		
	
