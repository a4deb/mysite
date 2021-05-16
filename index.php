<?php include "sendEmail.php"; ?>

<!DOCTYPE html>

<!--
 	"D.A Portfolio" by Dibie Avila
	This portfolio is for personal use only & not for commercial used!
	If you want to use this for your personal stuff just contact or email me..

	Contact: +63 945 541 9417
	Gmail: debavila9@gmail.com
 -->

<html lang="EN">
<head>
	<title>Lets Grind!</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- icon -->
		<link rel="icon" type="image/png" data-lightbox="example-set" class="example-image example-image-link" href="images/logo.png">

		<!-- stylesheet -->
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/fontawesome-all.min.css">

		<!-- script -->
		<script src="js/blotter.min.js"></script>
</head>
	<body>

		<!-- header -->
		<a name="header"></a>
		<header>
			<div class="header-wrapper">
				<div class="header-background">
					<video autoplay muted loop id="headerVideo">
						<source src="images/background 3.mp4" type="video/mp4">
					</video>
				</div>
				<!-- preloader -->
				<div class="loader-box">
					<div class="svg-attributes-demo align-loader">
					<svg id="polygon" width="150" height="150" viewBox="0 0 128 128">
						<filter id="displacementFilter">
					    	<feTurbulence type="turbulence" baseFrequency=".05" numOctaves="2" result="turbulence"/>
					    	<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="15" xChannelSelector="R" yChannelSelector="G"/>
					  	</filter>
					  	<polygon id="active-polygon" points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100" style="filter: url(#displacementFilter)" fill="#ff8f42"/>
					</svg>
					</div>
				</div>
			</div>
			<div class="header-content">
				<div class="logo-wrapper header-elements">
					<div class="logo">
						<a href="http://127.0.0.1/dbavila/index.php" class="logo-text">
							<span style="font-family: 'poppins-extrabold';">D.A</span>
							<span style="font-family: 'poppins-extralight'; 
										 line-height: 23px;">PORTFOLIO</span></a>
					</div>
				</div>
				<div class="myheader header-elements">	
					<img src="images/id.png" alt="ID" class="header-id">
					<span class="mobile-header">OHAYO</span>
					<ul>
						<li>
							<span class="first-header">
								<span class="firstname-header">Be</span>
							</span>
						</li>
						<li>
							<span class="second-header">CREATIVE</span>
						</li>
					</ul>
						
					<div class="typing-wrapper">
						<p class="little-header">LET'S CREATE</p>
					</div>
					<div class="proj-nav header-elements">
						<a class="main-nav" href="#projects">
							<button class="nav-btn" data-text="PROYEKTOW">PROYEKTOW</button><br>
						</a>
					</div>
					<span class="proj-border"></span>
				</div>	
				
				<div class="down-btn-wrapper header-elements">
					<div class="down-btn-pos">
						<a class="down-nav" href="#projects">
							<button class="down-btn fa fa-arrow-down" id="white-btn-effect"></button>
							<span class="btn-border"></span>
							<span class="btn-border2"></span>
						</a>
						<span class="down-btn-title">scroll down</span>
					</div>
				</div>
				<!-- social media -->
				<ul class="social-icons header-elements">
					<li>
						<a href="http://www.facebook.com/debavila15" id="facebook" class="header-facebook" target="_blank">
							<i class="fab fa-facebook-f"></i>
						</a>
						<span class="social-border facebook-border"></span>
					</li>
					<li>
						<a href="http://www.instagram.com/dbavilaa" id="ig" class="header-ig" target="_blank">
							<i class="fab fa-instagram"></i>
						</a>
						<span class="social-border ig-border"></span>
					</li>
					<li>
						<a href="http://www.pinterest.ph/good_Dev" id="pinterest" class="header-pinterest" target="_blank">
							<i class="fab fa-pinterest"></i>
						</a>
						<span class="social-border pinterest-border"></span>
					</li>
					<li>
						<a href="#" id="github" class="header-github" target="_blank">
							<i class="fab fa-github"></i>
						</a>
						<span class="social-border github-border"></span>
					</li>
					<li>
						<a href="#" id="linkedin" class="header-linkedin" target="_blank">
							<i class="fab fa-linkedin"></i>
						</a>
						<span class="social-border linkedin-border"></span>
					</li>
				</ul>
			</div>
		</header>

		<!-- main -->
		<main>
			<ul class="main-section">

				<!-- project -->
				<a name="projects"></a>
				<li class="slides slides-3">
					<!-- social media -->
					<!-- <ul class="social-icons main-elements">
						<li>
							<a href="http://www.facebook.com/debavila15" id="facebook" class="main-facebook" target="_blank">
								<i class="fab fa-facebook-f"></i>
							</a>
							<span class="social-border facebook-border"></span>
						</li>
						<li>
							<a href="http://www.instagram.com/dbavilaa" id="ig" class="main-ig" target="_blank">
								<i class="fab fa-instagram"></i>
							</a>
							<span class="social-border ig-border"></span>
						</li>
						<li>
							<a href="http://www.pinterest.ph/good_Dev" id="pinterest" class="main-pinterest" target="_blank">
								<i class="fab fa-pinterest"></i>
							</a>
							<span class="social-border pinterest-border"></span>
						</li>
						<li>
							<a href="#" id="github" class="main-github" target="_blank">
								<i class="fab fa-github"></i>
							</a>
							<span class="social-border github-border"></span>
						</li>
						<li>
							<a href="#" id="linkedin" class="main-linkedin" target="_blank">
								<i class="fab fa-linkedin"></i>
							</a>
							<span class="social-border linkedin-border"></span>
						</li>
					</ul> -->
					<!-- scroll indicator -->
					<div class="percent">
			            <div class="fill"></div>
			            <div class="counter"><h1 class="scroll-text"></h1></div>
			        </div>
			        <div class="scroll-indicator">
			        	<div class="indicator-pos">
				        	<span>keep scrolling</span>
			        		<i class="fas fa-angle-double-down"></i>
				        </div>
			        </div>
					<div class="project-section">
						<div class="proj-title title">projects</div>
						<div class="grid" data-colcade="columns: .grid-col, items: .grid-item">
							<div class="grid-col grid-col--1"></div>
							<div class="grid-col grid-col--2"></div>
							<div class="grid-col grid-col--3"></div>
							<div class="grid-col grid-col--4"></div>

							<div class="grid-item visible-img visible-img-1">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/1.jpg">
									<img class="grayscale example-image" src="images/projects/1.jpg"/>
								</a>
							</div>
							<div class="grid-item visible-img visible-img-2">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/2.jpg">
									<img class="grayscale example-image" src="images/projects/2.jpg"/>
								</a>
							</div>
							<div class="grid-item visible-img visible-img-3">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/3.jpg">
									<img class="grayscale example-image" src="images/projects/3.jpg"/>
								</a>
							</div>
							<div class="grid-item visible-img visible-img-4">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/4.jpg">
									<img class="grayscale example-image" src="images/projects/4.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/5.jpg">
									<img class="grayscale" src="images/projects/5.jpg"/>
								</a>
							</div>  
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/6.jpg">
									<img class="grayscale" src="images/projects/6.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/7.jpg">
									<img class="grayscale" src="images/projects/7.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/8.jpg">
									<img class="grayscale" src="images/projects/8.jpg"/>
								</a>
							</div> 
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/9.jpg">
									<img class="grayscale" src="images/projects/9.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/10.jpg">
									<img class="grayscale" src="images/projects/10.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/11.jpg">
									<img class="grayscale" src="images/projects/11.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/12.jpg">
									<img class="grayscale" src="images/projects/12.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/13.jpg">
									<img class="grayscale" src="images/projects/13.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/14.jpg">
									<img class="grayscale" src="images/projects/14.jpg"/>
								</a>
							</div> 
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/15.jpg">
									<img class="grayscale" src="images/projects/15.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/16.jpg">
									<img class="grayscale" src="images/projects/16.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/17.jpg">
									<img class="grayscale" src="images/projects/17.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/18.jpg">
									<img class="grayscale" src="images/projects/18.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/19.jpg">
									<img class="grayscale" src="images/projects/19.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/20.jpg">
									<img class="grayscale" src="images/projects/20.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/21.jpg">
									<img class="grayscale" src="images/projects/21.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/22.jpg">
									<img class="grayscale" src="images/projects/22.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/23.jpg">
									<img class="grayscale" src="images/projects/23.jpg"/>
								</a>
							</div> 
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/24.jpg">
									<img class="grayscale" src="images/projects/24.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/25.jpg">
									<img class="grayscale" src="images/projects/25.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/26.jpg">
									<img class="grayscale" src="images/projects/26.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/27.jpg">
									<img class="grayscale" src="images/projects/27.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/28.jpg">
									<img class="grayscale" src="images/projects/28.jpg"/>
								</a>
							</div>
							<div class="grid-item show-on-scroll">
								<div class="shadow"></div>
								<a data-lightbox="example-set" class="example-image-link" href="images/projects/29.jpg">
									<img class="grayscale" src="images/projects/29.jpg"/>
								</a>
							</div>
						</div>
					</div>
				</li>
			</ul>	
		</main>

		<!-- navigations -->
		<div class="navigations">
			<ul class="navigators-list">
				<li>
					<span class="nav-box box-3">
						<a href="#skills" class="continues-down-nav arrow-nav">
							<button class="down-btn fa fa-arrow-down" id="white-btn-effect"></button>
							<span class="btn-border"></span>
						</a>
					</span>
				</li>
				<li>
					<span class="nav-box box-2">
						<a href="#" class="continues-up-nav arrow-nav">
							<button class="up-btn fa fa-arrow-up" id="white-btn-effect"></button>
							<span class="btn-border"></span>
						</a>
					</span>
				</li>
			</ul>
		</div>

		<footer>
		<!-- contact & footer -->
		<a name="contact"></a>
		<div class="contact slides-4">
			<!-- social media -->
			<ul class="social-icons footer-elements">
				<li>
					<a href="http://www.facebook.com/debavila15" id="facebook" class="footer-facebook" target="_blank">
						<i class="fab fa-facebook-f"></i>
					</a>
					<span class="social-border facebook-border"></span>
				</li>
				<li>
					<a href="http://www.instagram.com/dbavilaa" id="ig" class="footer-ig" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
					<span class="social-border ig-border"></span>
				</li>
				<li>
					<a href="http://www.pinterest.ph/good_Dev" id="pinterest" class="footer-pinterest" target="_blank">
						<i class="fab fa-pinterest"></i>
					</a>
					<span class="social-border pinterest-border"></span>
				</li>
				<li>
					<a href="#" id="github" class="footer-github" target="_blank">
						<i class="fab fa-github"></i>
					</a>
					<span class="social-border github-border"></span>
				</li>
				<li>
					<a href="#" id="linkedin" class="footer-linkedin" target="_blank">
						<i class="fab fa-linkedin"></i>
					</a>
					<span class="social-border linkedin-border"></span>
				</li>
			</ul>
			<ul class="contact-form">
				<li class="email">

					<!-- email form -->
					<div class="form-box">
						<span class="contact-title title">get in touch</span>
						<div class="form-container">
							<form name="emailForm" method="POST" data-netlify="true">
								<div class="email-title">
									<i class="fa fa-envelope"></i>
									<span id="title">
										<span class="first-title">LETS</span>
										<span class="second-title">CONNECT</span>
									</span>
								</div>
								<div class="mat-inputs input-name">
									<input type="text" name="name" autocomplete="off" class="user-input name-input" id="#{name} name-text" required>
									<span class="input-background" id="name-background"></span>
									<span class="input-border name-border"></span>
									<span class="name-placeholder placeholder">
										<label for="#{name}">name</label>
									</span>
									<i id="name-icon" class="fa fa-user text-icon"></i>
								</div>
								<div class="mat-inputs input-email">
									<input type="text" name="email" autocomplete="off" class="user-input email-input" id="#{email} email-text" required>
									<span class="input-background" id="email-background"></span>
									<span class="input-border email-border"></span>
									<span class="email-placeholder placeholder">
										<label for="#{email}">email</label>
									</span>
									<i id="email-icon" class="fa fa-envelope text-icon"></i>
								</div>
								<div class="mat-inputs input-subject">
									<input type="text" name="subject" autocomplete="off" class="user-input subj-input" id="#{subject} subject-text" required>
									<span class="input-background" id="subj-background"></span>
									<span class="input-border subj-border"></span>
									<span class="subj-placeholder placeholder">
										<label for="#{subject}">subject</label>
									</span>
									<i id="subject-icon" class="fa fa-pen text-icon"></i>
								</div>
								<div class="mat-inputs input-message">
									<textarea class="user-input message-input" autocomplete="off" name="message" id="#{message} message-text" required></textarea>
									<span class="input-background" id="message-background"></span>
									<span class="input-border msg-border"></span>
									<span class="msg-placeholder placeholder">
										<label for="#{message}">message</label>
									</span>
									<i id="message-icon" class="fa fa-comment text-icon"></i>
								</div>
								<div class="mat-button">
									<button type="submit" name="submit" data-text="send message" class="submit-btn">send message</button>
									<span class="submit-btn-border"></span>
									<label class="form-label" id="form-label"></label>
								</div>
							</form>
						</div>
						<div class="info-wrapper">
							<center>
								<ul class="info-list">
									<li class="fa fa-envelope"><span>debavila9@gmail.com</span></li>
									<li class="fa fa-phone"><span>+63 945 541 9417</span></li>
									<li class="fa fa-copyright"><span>D.A Portfolio</span></li>
								</ul>
							</center>
						</div>
					</div>
				</li>
			</ul>
		</div>
		</footer>

		<!-- scripts -->
		<script src="js/jquery.min.js"></script>
		<script src="js/TweenMax.min.js"></script>
		<script src="js/anime.min.js"></script>
		<script src="js/easing.js"></script>
		<script src="js/viper.js"></script>
		<script src="js/colcade.js"></script>
		<script src="js/lightbox-plus-jquery.js"></script>
		<script type="text/javascript">
			
			if (window.history.replaceState) {
				window.history.replaceState(null, null, window.location.href);
			}

		</script>

	</body>
</html>