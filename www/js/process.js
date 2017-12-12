let process = {
	menu:function(){
		let content = 
		<div><center><h1>Lutong Pinoy Recipe</h1><h2>Pinoy Foods</h2>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.recipe}>OPEN</a></div>	
		</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	recipe:function(){
		let content = 
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>

				<h3>List of Recipe</h3><br/>
				<center>
				<div><a href="img/sisigIng.png"><img src="img/sisig.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ebutidoIng.png"><img src="img/Embutido.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/calamaresIng.png"><img src="img/calamares.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/tahongIng.png"><img src="img/tahong.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ChickenFeetIng.png"><img src="img/ChickenFeet.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/AdoboSteakIng.png"><img src="img/AdoboSteak.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BatangasBulaloIng.png"><img src="img/BatangasBulalo.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefAsadoIng.png"><img src="img/BeefAsado.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefBicolExpressIng.png"><img src="img/BeefBicolExpress.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefCurryIng.png"><img src="img/BeefCurry.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefKalderetaIng.png"><img src="img/BeefKaldereta.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefKare-KareIng.png"><img src="img/BeefKare-Kare.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BistekSilogIng.png"><img src="img/BistekSilog.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BopisIng.png"><img src="img/Bopis.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/FilipinoStylePorkBBQIng.png"><img src="img/FilipinoStylePorkBBQ.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/LechonPaksiwIng.png"><img src="img/LechonPaksiw.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/LechonSisigIng.png"><img src="img/LechonSisig.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/SinigangIng.png"><img src="img/Sinigang.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/DinuguanIng.png"><img src="img/Dinuguan.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ChickenLomiIng.png"><img src="img/ChickenLomi.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/AfritadaIng.png"><img src="img/Afritada.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/CornedBeefIng.png"><img src="img/CornedBeef.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/nuggetsIng.png"><img src="img/nuggets.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/tilapiaIng.png"><img src="img/tilapia.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/hamIng.png"><img src="img/ham.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/macaroniSaladIng.png"><img src="img/macaroniSalad.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/buffalowingsIng.png"><img src="img/buffalowings.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/dynamitelumpiaIng.png"><img src="img/dynamitelumpia.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BasicPorkAdoboIng.png"><img src="img/BasicPorkAdobo.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BBQBeefIng.png"><img src="img/BBQBeef.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefandBroccoliIng.png"><img src="img/BeefandBroccoli.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefandPocheroIng.png"><img src="img/BeefandPochero.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BeefParesMamiIng.png"><img src="img/BeefParesMami.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BraisedPorkIng.png"><img src="img/BraisedPork.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ChicharonBulaklakIng.png"><img src="img/ChicharonBulaklak.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/LiempoIng.png"><img src="img/Liempo.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/PorkChopIng.png"><img src="img/PorkChop.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/PorkHamanonadoIng.png"><img src="img/PorkHamanonado.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/FilipinoSpaghettiIng.png"><img src="img/FilipinoSpaghetti.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/isawIng.png"><img src="img/isaw.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/LongganisaIng.png"><img src="img/Longganisa.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BinagoonganIng.png"><img src="img/Binagoongan.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/GinilingIng.png"><img src="img/Giniling.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/BinakolManokIng.png"><img src="img/BinakolManok.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/TinolaIng.png"><img src="img/Tinola.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ChickenNoodleIng.png"><img src="img/ChickenNoodle.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/ChickenSoupMisuaIng.png"><img src="img/ChickenSoupMisua.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/SinampalukangManokIng.png"><img src="img/SinampalukangManok.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/RellenongtalongIng.png"><img src="img/Rellenongtalong.jpg" onClick="alert('hi'); return true;"/></a></div>
				<div><a href="img/beefteriyakiIng.png"><img src="img/beefteriyaki.jpg" onClick="alert('hi'); return true;"/></a></div>
				</center>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

		loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1);