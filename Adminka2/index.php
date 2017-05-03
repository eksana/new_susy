<!-- http://www.php.su/articles/?cat=others&page=015-->
<?php
$ini = parse_ini_file('./config/config.ini');
?>
<!--
Теперь в необходимых местах сайта, мы можем вывести значения переменных. Наши цены из файла настроек будут выглядеть так:

<?php //print $ini['cena1'];?>
<?php //print $ini['cena2'];?>
<?php //print $ini['cena3'];?>
Вместо телефонов на сайте пишем:

<?php //print $ini['phone'];?>
<?php //print $ini['phone2'];?>
Вместо адреса электронной почты

<?php //print $ini['pochta'];?>
Вместо физического адреса:

<?php //print $ini['adress'];?>-->


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>Новое шоколадное настроение </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
	<link rel="stylesheet" href="libs/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="libs/dscountdown.css" />
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
</head>
<body>

	<div class="wrapper_for_header">
		<header class="top">
			<div id="pie">
				<i class="fa fa-bars"></i>
			</div>
			
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-xs-12 col-md-12  col-lg-1">

						<a class="linkForLogo">
							<img src="img/Logo1.png" class="img_logo"/></a>
						</div>
						<div class="col-sm-12 col-xs-12 col-md-12 col-lg-8">
							<nav class="topNavUpper">
								<ul>
									<li class="topNav-item "><a href="" class="topNav-item-active">Главная</a></li>
									<li class="topNav-item"><a href="">Цены</a></li>
									<li class="topNav-item"><a href="">Акции и скидки</a></li>
									<li class="topNav-item"><a href="">Фонтаны</a></li>
									<li class="topNav-item"><a href="">Доставка и оплата</a></li>
									<li class="topNav-item"><a href="">Отзывы</a></li>
									<li class="topNav-item"><a href="">Контакты</a></li>
								</ul>
							</nav>
						</div>
						<div class="col-sm-12 col-xs-12 col-md-12  col-lg-3">
							<div class="callWrap">
								<!--<span class="wrapForTel">+7(812)123-34-56</span><br/>-->

								<span class="wrapForTel"><?php print $ini['phone'];?></span><br/>
								<a href="" class="call">Заказать обратный звонок</a>
							</div>
						</div>
						
					</div>
				</div>
				<!--</div>
				<div class="container">-->
					<div class="row">
						<div class="col-sm-12 col-xs-12 col-md-12  col-lg-12">
							<div class="wrapForFont">


								<div class="innerWrap">
									<h1 class="titleTop">Шоколадные фонтаны!<br/>Удивите гостей!</h1>
									<h2 class="underTitleTop">Компания "Шоколадная сказка" предлагает в аренду шоколадные фонтаны, которые станут лучшим украшением праздника и оставят сладкие воспоминания о вашем торжестве у всех гостей.</h2>

									<div class="col-sm-12 col-xs-12 col-md-12  col-lg-12">

										<div class="wrapForBerry">
											<a href="" class="order">Закажите шоколадный фонтан!
												<img src="img/berry.png" alt="Акцент для кнопки" class="berry"/>
											</a>
										</div>
									</div>

								</div>
								<div class="round">

								</div>
							</div>
						</div>
					</div>
					<!--</div>-->
					<!-- Start aside-menu-->
					<nav class="topNavUpperAside">
					<div id="cross">
				<i class="fa fa-times"></i>
			</div>
						<ul>
							<li class="topNav-itemAside "><a href="" class="topNav-item-active">Главная</a></li>
							<li class="topNav-itemAside"><a href="">Цены</a></li>
							<li class="topNav-itemAside"><a href="">Акции и скидки</a></li>
							<li class="topNav-itemAside"><a href="">Фонтаны</a></li>
							<li class="topNav-itemAside"><a href="">Доставка и оплата</a></li>
							<li class="topNav-itemAside"><a href="">Отзывы</a></li>
							<li class="topNav-itemAside"><a href="">Контакты</a></li>
						</ul>
					</nav>
					<!-- End aside-menu-->
				</div>
			</header>	
			
		</div>


		<section class=" wrapInnerPrices">

			<div class="prices ">
				<h2 class="prices_title">Наши цены Вас приятно удивят</h2>
				<p class="prices_descr">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum saepe iusto vitae quia quae voluptas, ad libero officia esse dicta assumenda! Illo ratione facere nostrum nihil, et voluptatem nemo.
				</p>
				<div class="container">
					<div class="row">


						<div class="col-sm-12 col-xs-12 col-md-4  col-lg-4">

							<div class="prices_item">
								<img src="img/cakeSmall.jpg" class="prices_img"/>
								<h3 class="price_descr">Формат &laquo;Эконом&raquo;</h3>
								<p>для компанири до 20 человек</p>
								<div class="wrapForNav">
									<ul class="price_item_nav">
										<li class="item">-3 кг шоколада</li>
										<li class="item">-3 кг фруктов</li>

									</ul>
									<span class="price">5 000 &#8381</span>
								</div>
								<a href="" class="orderPrices">Заказать</a>	
							</div>
						</div>
						<div class="col-sm-12 col-xs-12 col-md-4  col-lg-4">


							<div class="prices_item prices_item-Middle">
								<img src="img/cakeSmall2.jpg" class="prices_img"/>
								<h3 class="price_descr">Формат &laquo;Оптимальный&raquo;</h3>
								<p>для компании от 20 до 50 человек</p>
								<div class="wrapForNav">
									<ul class="price_item_nav">
										<li class="item">-5 кг шоколада</li>
										<li class="item">-5 кг фруктов</li>

									</ul>
									<span class="price priceMiddle">10 000 &#8381</span>
								</div>
								<a href="" class="orderPricesMiddle">Заказать</a>
							</div>
						</div>
						<div class="col-sm-12 col-xs-12 col-md-4  col-lg-4">

							<div class="prices_item prices_itemLast">
								<img src="img/cakeSmall3.jpg" class="prices_img"/>
								<h3 class="price_descr">Формат &laquo;Премиум&raquo;</h3>
								<p>для компании от 50 до 100 человек</p>
								<div class="wrapForNav">
									<ul class="price_item_nav">
										<li class="item">-10 кг шоколада</li>
										<li class="item">-10 кг фруктов</li>


									</ul>
									<span class="price">15 000 &#8381</span>
								</div>
								<a href="" class="orderPrices">Заказать</a>
							</div>
						</div>
						<div class="round">
							<div class="arrow-down icon"></div>
						</div>
					</div>
				</div>
			</div>

		</section>

		<section  class="present">
			<div class="container">
				<div class="row">


					<div class="col-sm-12 col-xs-12 col-md-12  col-lg-12">
						<div class="prices ">
							<h2 class="prices_title-present">Закажите фонтан до 1-го мая и получите<br/>питьевой фонтан в подарок!</h2>
							<h3>Закажите шоколадный фонтан до 1 мая и получите оборудование для питевого фонтана!</h3>
							<p class="prices_descr">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum saepe iusto vitae quia quae voluptas, ad libero officia esse dicta assumenda! Illo ratione facere nostrum nihil, et voluptatem nemo.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum saepe iusto vitae quia quae voluptas, ad libero officia esse dicta assumenda! Illo ratione facere nostrum nihil, et voluptatem nemo.
							</p>

							<h2 class="prices_title-present">Осталось до конца акции:</h2>

							<div class="demo1"></div>
							<h2 class="prices_title-present">Оставьте заявку и получите питьевой фонтан:</h2>
							<form action="" method="post" class="form_present">
								<div class="wrap_form">
									<input type="text" name="firstName" placeholder="Ваше имя" class="for_form"/>
								</div>
								<div class="wrap_form">
									<input type="text" name="email" placeholder="Ваш телефон" class="for_form"/>
								</div>
								<div class="wrap_form wrap_form-last">
									<input type="submit" name="send" class="for_form for_form-last" value="Оставьте заявку"/>
								</div>
							</form>
							<div class="round">
								<div class="arrow-down icon"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


		<section class="suggest">
			<div class="container">
				
				<h2 class="prices_title">Наши фонтаны</h2>
				<p class="prices_descr">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum saepe iusto vitae quia quae voluptas, ad libero officia esse dicta assumenda! Illo ratione facere nostrum nihil, et voluptatem nemo.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum saepe iusto vitae quia quae voluptas, ad libero officia esse dicta assumenda! Illo ratione facere nostrum nihil, et voluptatem nemo.
				</p>

				<div class="wrapForSuggestItem">

		
				

				<div class="wrapForEach">
					<div class="suggest_item1">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
					</p>
				</div>
				

				<div class="wrapForEach">
					<div class="suggest_item2">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
					</p>
				</div>
			
				<div class="wrapForEach">
					<div class="suggest_item3">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
					</p>
				</div>
			
				<div class="wrapForEach">
					<div class="suggest_item4">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
					</p>
				</div>
		
			<div class="wrapForEach wrapForEach-last">
				<div class="suggest_item5">

				</div>
				<h4>Профессиональное оборудование</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
				</p>
			</div>
		</div>
	</div>

	<div class="wrapForSafe">
		<div class="container">
			<h2 class="prices_title">И еще</h2>

			<div class="wrapForSafeAll">
				<div class="wrapForSafeItem wrapForSafeItem1">
					<div class="safe">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet
					</p>
				</div>

				<div class="wrapForSafeItem wrapForSafeItem2">
					<div class="safe">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet
					</p>
				</div>

				<div class="wrapForSafeItem wrapForSafeItem-last wrapForSafeItem3">
					<div class="safe">

					</div>
					<h4>Профессиональное оборудование</h4>
					<p>Lorem ipsum dolor sit amet
					</p>
				</div>
			</div>
		</div>
	</div>
	
	<div class="round_suggest">
		<div class="arrow-down icon"></div>
	</div>
</section>

<section class="orderFont">
	<div class="container">
		<h2 class="prices_orderFont">Как заказать наш фонтан</h2>
		<div class="row">
			<div class="col-md-12">

				<div class="wrapFor_orderFontItem">




					<div class="wrapForEach_orderFont">
						<span class="order_item order_item1">1

						</span>
						<div class="arrowArk arrowArk1"></div>
						<h4>Профессиональное оборудование</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt 
						</p>
					</div>


					<div class="wrapForEach_orderFont">
						<span class="order_item order_item2">2

						</span>
						<div class="arrowArk arrowArk2"></div>
						<h4>Профессиональное оборудование</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt
						</p>
					</div>
					<div class="wrapForEach_orderFont">
						<span class="order_item order_item3">3

						</span>
						<div class="arrowArk arrowArk1"></div>
						<h4>Профессиональное оборудование</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt 
						</p>
					</div>

					<div class="wrapForEach_orderFont">
						<span class="order_item order_item4">4

						</span>

						<h4>Профессиональное оборудование</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt 
						</p>
					</div>

					<div class="wrapForPay">
						<div class="wrap_for_title">
						</div>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<h2 class="prices_orderFont">Мы принимаем к оплате:</h2>
					</div>
					<div class="wrap_for_payCard">
						<img  src="img/eway_creditcard_jcb.png" class="payItem payItem1"/>


						<img  src="img/eway_creditcard_master.png" class="payItem payItem2"/>


						<img  src="img/eway_creditcard_visa.png" class="payItem payItem3"/>


						<img  src="img/eway_masterpass.png" class="payItem payItem4"/>


						<img  src="img/eway_paypal.png" class="payItem payItem5"/>





						<img  src="img/paypal_express_mobile.png" class="payItem payItem7 payItem-last">


					</div>
				</div>
			</div>

			

		<div class="round_orderFont ">
			<div class="arrow-down icon"></div>
		</div>

	</section>

	<section class="testimonialBoot">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<h2 class="prices_titleTestim">Отзывы клиентов</h2>
					
					<div class="owl-carousel">
						<div class="wrapForTestimon">

							<div class="testimon_innerFoto testimon_innerFoto-img1"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3>
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div >
						<div class="wrapForTestimon"> 
							<div class="testimon_innerFoto testimon_innerFoto-img3"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3>
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>
						<div class="wrapForTestimon"> 
							<div class="testimon_innerFoto testimon_innerFoto-img3"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3>
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>
						<div class="wrapForTestimon">
							<div class="testimon_innerFoto testimon_innerFoto-img1"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3> 
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>
						<div class="wrapForTestimon"> 
							<div class="testimon_innerFoto testimon_innerFoto-img3"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3>
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>
						<div class="wrapForTestimon">
							<div class="testimon_innerFoto testimon_innerFoto-img3"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3> 
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>
						<div class="wrapForTestimon">
							<div class="testimon_innerFoto testimon_innerFoto-img1"></div>
							<h3 class="sertifik_descr">Имя фамилия клиента, название мероприятия</h3>
							<p class="testim_descrOwl">Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?<br/>Your Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit deserunt ut quia eligendi excepturi a est neque doloribus, perferendis earum minus veniam ipsum eveniet eum tenetur debitis obcaecati. Obcaecati, fuga?
							</p>
						</div>

					</div>
				</div>
				

				<div class="col-sm-12 col-md-8">
					<div class="two">
					
					<h2 class="prices_titleTestim">Фотографии с мероприятий</h2>
					<div class="wrapForImg">



						
						<div class="prize_item">
							<div class="testimon_inner testimon_inner-img1"></div>
							
						</div>
						<div class="prize_item">
							<div class="testimon_inner testimon_inner-img2"></div>
							
						</div>
						<div class="prize_item">
							<div class="testimon_inner testimon_inner-img3"></div>
							
						</div>
						<div class="prize_item">
							<div class="testimon_inner testimon_inner-img4"></div>
							
						</div>
						<div class="prize_item prize_item-last">
							<div class="testimon_inner testimon_inner-img5"></div>
							
						</div>
						<div class="prize_item prize_item-last">
							<div class="testimon_inner testimon_inner-img6"></div>
							
						</div>
						<div class="prize_item">
							<div class="testimon_inner testimon_inner-img7"></div>
							
						</div>
						<div class="prize_item prize_item-last">
							<div class="testimon_inner testimon_inner-img8"></div>
							
						</div>
						<div class="prize_item prize_item-last">
							<div class="testimon_inner testimon_inner-img9"></div>
							
						</div>
						
					

				</div>

				<div class="wrapForPrizeAll">

					<h3 class="sertifik_descr">Сертификаты</h3>

					<div class="sertifik_item">
						<div class="sertifik_inner sertifik_inner-img1"></div>

					</div>
					<div class="sertifik_item">
						<div class="sertifik_inner sertifik_inner-img3"></div>

					</div>
					<div class="sertifik_item">
						<div class="sertifik_inner sertifik_inner-img3"></div>

					</div>
					<div class="sertifik_item">
						<div class="sertifik_inner sertifik_inner-img3"></div>

					</div>
					<div class="sertifik_item">
						<div class="sertifik_inner sertifik_inner-img3"></div>

					</div>

				</div>
			</div>
		</div>
	</div>
</div>
<div class="roundTestim">
	<div class="arrow-down icon"></div>
</div>
</div>
</section>
<footer class="chokoB_footer">
	<h2 class="prices_orderFont">Остались вопросы? Свяжитесь с нами!</h2>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<adress>
					<ul class="ul_footer">
						<li class="item_footer item_footer--tel">+7 876 534-56-77</li>
						<li class="item_footer item_footer--email">Mail@gmail.com</li>
						<li class="item_footer item_footer--social">dm.sgnd.choco</li>
					</ul>
				</adress>
				<p class="footer_descr">
					Очень часто шоколадный фонтан в Санкт-Петербурге берут в аренду на свадьбу, корпоративные праздники (в том числе в офисе), на детские праздники, на выпускные вечера. И это неудивительно- ведь все мы хотим, чтобы праздник запомнился нам и нашим гостям надолго, и шоколадный фонтан в этом обязательно поможет.
				</p>


			</div>
			<div class="col-sm-12 col-md-6">
				<form action="" name="callBack" method="POST" class="form_footer">

					<div class="wrap_for_input">
						<label for="inpName">Напишите свое имя:</label>
						<input type="text" name="userName" placeholder="Ваше имя" class="for_input" id="inpName"/>
						
					</div>

					<div class="wrap_for_input">
						<label for="inpEmail">Напишите свой email:</label>
						<input type="email" name="userEmail" placeholder="Ваш телефон" class="for_input" id="inpEmail"/>
						
					</div>
					<div class="wrap_for_input">
						<label for="inpMessage">Напишите сообщение:</label>
						<textarea type="text" name="userText" placeholder="Ваше сообщение" class="for_input" id="inpMessage">
						</textarea>


					</div>
					
					<div class="wrap_for_input">
						<label for="submitMessage">Отправьте сообщение:</label>
						<input type="submit" value="Submit" name="send" class="for_input for_form-last-footer" id="submitMessage"/>
					</div>

				</form>
			</div>

		</div>
	</div>

	
</footer>
<script type="text/javascript" src="libs/jquery-3.2.0.min.js"></script>
<!--<script type="text/javascript" src="libs/dscountdown.min.js"></script>-->
<script type="text/javascript" src="libs/dscountdown.js"></script>
<script type="text/javascript" src="js/timer.js"></script>
<script src="libs/owl.carousel.min.js"></script>
<script src="js/owl.js"></script>
<script src="js/animateNav.js"></script>

<!--http://www.jqueryscript.net/time-clock/		Customizable-Themeable-jQuery-Countdown-Plugin-dsCountDown.html-->
</body>

</html>
