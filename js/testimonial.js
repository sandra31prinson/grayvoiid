// JavaScript Document
*{
	padding:0;
	margin:0;
	}
body{
	box-sizing:border-box;
	text-align:center;	
	}
h1, h3{
	font-family: 'Raleway', sans-serif;
	 font-weight:bold;
	 text-align: left;
	}
p{
	font-family: 'Open Sans', sans-serif;	
	font-size:15px;
}
span{
	font-weight:bold;
	color:#dc3545;
	}

.topbot{
	padding-top:50px;
	padding-bottom:100px;
	}
a{
	color:white;
	}
a:hover{
	text-decoration:none;
	}
#headertop{
	padding:15px 0;
	}

.search-bar input{
	border:none;
	border-radius:0;
	}
.search-bar button{
	border:none;
	border-radius:0;
	}
.usersicons i{
	display:inline;
	float:right;
	color:white;
	padding: 10px 13px;;
	}
.usersicons i:hover{
	color:	#8E44AD;
	font-weight:bold;
	transition:0.1s;
	border-radius:5px;
	background-color:white;
	transition-timing-function:ease-in-out;
	}
.carousel-caption{
	width:500px;
	padding-bottom:240px;
	z-index:0;
	}
.carousel-caption p{
	text-align:justify;
	color: white;
	font-family: 'Open Sans', sans-serif;
	font-weight: 100;
	}
.carousel-caption h3{
	font-weight:500;
	text-align:left;	
	}
.carousel-caption a{
	text-decoration:none;
	color:rgba(255,255,255,1.00);
	}
.carousel-caption a{
	float:left;
	}

.testbutt{
	position:relative;
	}
.testbutt a{
	position:absolute;
	bottom:0;
	right:15%;
	}
.testbutt a:hover{
	background-color:#dc3545;
	border:none;
	}
.carousel-caption a:hover{
	background-color:rgba(47,148,231,1.00);
	}
#bannerdes{
	position:absolute;
	top:40%;
	left:15%;
	color:rgba(0,0,0,1.00);
}
#menufull{
	position:relative;
	}
#menubar{
	color:black;
	font-size:25px;
	line-height:50px;
	float:left ;
	padding:0;
	}
#menubar i{
	position:absolute;
	padding:8px 15px;
	}
#menubar i:hover{
	color: #8E44AD;
	transition:0.1s;
	transition-timing-function:ease-in-out;
	padding-top:0;
	padding-bottom:0;
	font-size:32px;
	}
	
/*best selling products*/
	
	
	/*modal*/
	
	
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1500; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.welcomemodal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1500; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.welcome-content{
	background-color: transparent;
	}
/* Modal Content */
.modal-content {
  position: relative;
  margin: auto;
  padding: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}
.locationmodal{
	width:50%;
	height:100%;
	}
/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #007bff;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
	
.welcomebody a{
	position:absolute;
	top:5px;
	right:5px;
	}

#locationmodal i{
	background-color:transparent;

	}


/*    */



.des {
  padding: 2px 16px;
 
}
.des h5{
	padding:5px 0;
	color: #000;
	
	}	
.des a{
	margin-bottom: 15px;;
}
.des strong{
	font-size: 20px;;
}
.sub p{
	font-size:14px;
	padding:5px 0;
	color:#ffffff;
	font-family: 'Poppins', sans-serif;
	letter-spacing:1px;
	}
/*pros section */

.pros-icon img{
	width:150px;
	padding:20px;
	border-radius:50%;
	background-color:#dc3545;
	border:2px solid #fff;
	}
.pros-icon img:hover{
	border:15px solid white;
	transition:0.2s;
	transition-timing-function:ease-in-out;
	
	}
.cata{
	
	width:100%;
	margin:0 auto;
	}
.cata h6{
	line-height:30px;
	margin:0;
	}
.cata a{
	color:rgba(0,0,0,1.00);
	font-size:15px;
	font-family: 'Poppins', sans-serif;
	font-weight:500;
	}
.cata:hover{
	background-color:#007bff;
	transition:0.1s;
	transition-timing-function:ease-in-out;
	}
.cata:hover a{
	color: white;
	text-decoration:none;
	transition:0.2s;
	transition-timing-function:ease-in-out;
	}

.more a{
	float:right;	
    margin-right:15px;
	font-family: 'Poppins', sans-serif;
	border:none;
	}
.more a:hover{
	background-color:#ffffff;
	color:#dc3545;
	text-decoration:none;
	font-weight:bold;
	}