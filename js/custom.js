$(document).ready(function() {

	// fullpage plugin initlalization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage', '6thPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});


	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 150){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}

	// Rellax pllugin initlalization
		


	// carousel pllugin initlalization
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
        	items:3
        },
        1000:{
            items:4
        }
    }
	})
// 	const app = require("express")()

// app.post("/", (req,res) =>{

//     const cookie = req.headers.cookie;
//     if (cookie)
//         res.sendFile(`${__dirname}/cookie.png`)
//     else{
//         res.sendStatus(403);
//         res.end();
//     }
// })
// app.post("/login", (req, res) => {
//     //const cookie = "user=hussein; samesite=strict; secure";
//     const cookie = "user=hussein; samesite=lax; secure";
//     //const cookie = "user=hussein; samesite=none; secure";
//     //const cookie = "user=hussein;";

//     res.setHeader("set-cookie", [cookie])
//     res.send("ok")
// })


// app.get("/", (req, res) => {
//     res.sendFile(`${__dirname}/index.html`)
// })

// app.get("/img", (req, res) => {
//     const cookie = req.headers.cookie;
//     if (cookie)
//         res.sendFile(`${__dirname}/cookie.png`)
//     else{
//         res.sendStatus(403);
//         res.end();
//     }
// })
  
// app.listen(8080, ()=>console.log("listening on port 8080"))
})
