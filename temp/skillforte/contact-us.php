<?php
  
	  if(count($_POST)){
			$_name 	   = $_POST['name'];		
			$_email    = $_POST['email'];
            $_company = $_POST['company'];
  			$_message1  = $_POST['message'];
			
		  	$error = "";
		  	if(empty($_name)){
  				$message = "Please enter name ... !";
  			}elseif (empty($_email)){
  				$message = "Please enter email ... !";
             }elseif (!strpos($_email,"@") || !strpos($_email, ".")){
  				$message = "Please enter correct email ... !";
  			} 
			  elseif (empty($_message1)){
					$message = "Please enter message... !";
			  }
			  else{
						  if (!$message){
							  $_subject = "skillforte.co";
							  $_body = "Dear Admin,\r\n";
							  $_body .="You have received Contact us.\r\n";
							  $_body .="Details are as follows:<br><br><br><br>\r\n";
							  $_body .="Name: ".$_name."<br><br>\r\n";		
							  $_body .="Email Address: ".$_email."<br><br>\r\n";
                              $_body .="Email Address: ".$_company."<br><br>\r\n";	
                              	
							  $_body .="Message: ".$_message1."<br><br>\r\n";
							  $_from = $_email;
							  $to = "shoaib@skillforte.co";
							  $headers = "From: " . strip_tags($_email) . "\r\n";
							  $headers .= "Reply-To: ". strip_tags($_email) . "\r\n";
							  $headers .= "MIME-Version: 1.0\r\n";
							  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
							  $sent =  mail($to, $_subject, $_body, $headers);
						  }
						  else
						  {
							  header("Location: index.php?error=t#contact");
							  
						  } 
			  }
	  }
  ?>


<!DOCTYPE html>
<html>

<head>
  
    <title>Contact Skillforte</title>
    <meta name="description" content="Skillforte - Position your Digital Transformation for long-term success">
<meta name="keywords" content="Enterprise software, ERP Development, odoo, OpenERP, CRM Development, Business Automation, IT consulting, IT Audit service, Software Development">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./styles/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="./styles/owl.carousel.css" type="text/css" rel="stylesheet">
    <link href="./styles/owl.theme.default.css" type="text/css" rel="stylesheet">
    <link href="./styles/custom-styles.css" type="text/css" rel="stylesheet">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QH9LYLJSCE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QH9LYLJSCE');
</script>


</head>

<body>
    <header class="dark-bg">
        <!--Top bar start-->
        <div class="containerfluid top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <a href="./index.html">
                            <img src="./images/logo.svg" alt="Skill Forte">
                        </a>
                    </div>
                    <span class="risponsive-btn">
                        <span></span>
                    </span>
                    <nav class="col">
                        <ul>
                            <li><a href="./about-us.html">About Us</a></li>
                            <li class="drop-down"><a href="#">Services</a>
                                <div class="sub-menu">
                                    <span class="arrow-down"></span>
                                   <ul>
                                        <li><a href="./enterprise-solutions.html">Enterprise Solutions</a></li>
                                        <li><a href="./software-development.html">Software Development</a></li>
                                        <li><a href="./software-consulting-services.html">IT Consulting </a></li>
                                        <li><a href="./software-audit-services.html">Audit-as-a-Service</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="./solutions.html">Solutions</a></li>
                            <li><a href="#">Insights</a></li>
                            <li><a href="./contact-us.php">Let’s Talk</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <!--Top bar end-->

        <!--Banner Section Start-->
        <div class="container-fluid banner-section contact-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 m-auto">
                    <?php if(isset($sent)){ ?>
                            
                            <div class="banner-content contact-banner light">
                            <div class="message-sucess">
                               <img src="images/sucess-icon.PNG"> We've received your message, we will get back to you real quick.
                            </div>
                            <h2>Let’s Talk
                            </h2>
                            <small class="pr-md-3">We’re here to help and answer any questions you might have. We look forward to hearing from you.
                            </small>

                            <div class="contact-form pb-80">


                            
	      	
                            
                            <div class="row" style="color:red; font-size:12px; position:absolute; top:-20px;"><? echo $message; ?></div>
                            <form action="<?php echo $_SERVER['PHP_SELF']; ?>#contact" method="post" name="form1" id="form1">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="text" name="name" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Email*</label>
                                        <input type="email" name="email" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Company Name</label>
                                        <input type="text" name="company" class="form-control">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="exampleInputPassword1">What have you budgeted for the
                                            project?</label>
                                        <input type="text" class="form-control">
                                    </div> -->
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Message (Optional)</label>
                                        <textarea class="form-control" required name="message" rows="3"></textarea>
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <span class="checkmark"></span>
                                        <label class="form-check-label" for="exampleCheck1">I agree that TMG may
                                            collect, use and disclose my personal data which I have provided in this
                                            form, for providing marketing material
                                            that I have agreed to receive, in accordance with their privacy
                                            policy.</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-rounded btn-block mt-4">Send
                                        Message</button>
                                </form>
                           

                            
                        </div>
            <?php }else{ ?>
                        <div class="banner-content contact-banner light">
                            <h2>Let’s Talk
                            </h2>
                            <small class="pr-md-3">We’re here to help and answer any questions you might have. We look forward to hearing from you.
                            </small>

                            <div class="contact-form pb-80">


                            
	      	
                            
                            <div class="row" style="color:red; font-size:12px; position:absolute; top:-20px;"><? echo $message; ?></div>
                            <form action="<?php echo $_SERVER['PHP_SELF']; ?>#contact" method="post" name="form1" id="form1">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="text" name="name" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Email*</label>
                                        <input type="email" name="email" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Company Name</label>
                                        <input type="text" name="company" class="form-control">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="exampleInputPassword1">What have you budgeted for the
                                            project?</label>
                                        <input type="text" class="form-control">
                                    </div> -->
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Message (Optional)</label>
                                        <textarea class="form-control" required name="message" rows="3"></textarea>
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <span class="checkmark"></span>
                                        <label class="form-check-label" for="exampleCheck1">I agree that TMG may
                                            collect, use and disclose my personal data which I have provided in this
                                            form, for providing marketing material
                                            that I have agreed to receive, in accordance with their privacy
                                            policy.</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-rounded btn-block mt-4">Send
                                        Message</button>
                                </form>
                           

                            
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
        <!--Banner Section Start-->
    </header>
    <!--Contact Section Start-->
    <section class="container-fluid dark pb-0">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="block-content border-0">
                        <span class="mb-3">Send us a message</span>
                        <h3 class="text-break">connect@skillforte.co</h3>
                        <p>Send us business or general inquiries.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="block-content border-0">
                        <span class="mb-3">Give us a call</span>
                        <h3>+1 (650) 489 6008<br>+92 300 500 4265</h3>
                        <p>If you prefer to speak with a person.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="block-content border-0">
                        <span class="mb-3">Join out team</span>
                        <h3>Careers</h3>
                        <p>Check our Linkedin page for open positions.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!--Contact Section end-->
    <!--offices Section Start-->

    <section class="container-fluid dark visit footer-margin-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>Visit our offices</h4>
                </div>
            </div>
            <div class="row py-5 align-items-center">
                <div class="col-md-7 pb-3 pt-4 pr-5">
                    <div class="">
                    <!-- <div class="pattern-light-right-bottom"> -->
                        <!-- <span class="pattren-box purple"></span>                     -->
                        <img src="./images/office-1.webp" alt="image">
                    </div>
                </div>
                <div class="col-md-4 pl-5">
                    <h3 class="mb-4 pl-5">Florida</h3>
                    <p class="pl-5">1400 St Charles Pl, Pembroke Pines, FL 33026, USA.

                    </p>
                </div>
            </div>
            <div class="row py-5 align-items-center">
                <div class="col-md-7 py-3 pr-5">
                    <div class="">
                    <!-- <div class="pattern-light-left-bottom"> -->
                        <!-- <span class="top-light-span"></span>                         -->
                        <img src="./images/office-2.webp" alt="image">
                    </div>
                </div>
                <div class="col-md-4 pl-5">
                    <h3 class="mb-4 pl-5">Tallinn</h3>
                    <p class="pl-5">Harju maakond, Tallinn, Kesklinna linnaosa, Tornimäe tn 7-26, 10145.
                    </p>
                </div>
            </div>
            <div class="row py-5 align-items-center">
                <div class="col-md-7 pt-3 pr-5">
                    <div class="">                        
                    <!-- <div class="pattern-light-left-top">                         -->
                        <img src="./images/office-3.webp" alt="image">
                    </div>
                </div>
                <div class="col-md-4 pl-5 ">
                    <h3 class="mb-4 pl-5">Islamabad</h3>
                    <p class="pl-5">Office 201, Wallstreet Plaza, Bahria Enclave Sector C, Islamabad.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!--offices Section end-->

    <footer class="container-fluid px-0 dark-bg">
        <div class="container">
            <!--Footer banner Start-->
            <div class="row wrapper-footer light text-center">
                <div class="col-md-12">
                    <h2 class="mb-4">We'll love to hear form you.</h2>
                    <p class="mb-5 pb-3">Our team of experts will get in touch with you for your project evaluation.</p>
                    <a href="./contact-us.php" class="btn btn-primary btn-rounded">Let’s Talk</a>
                </div>
            </div>
            <!--Footer banner End-->
            <!--Footer Links Start-->
            <div class="row footer-links light">
                <div class="col-md-4">
                    <img src="./images/logo-footer.svg" alt="logo" />
                    <p class="mt-5">Position your enterprise for long-term digital success.</p>                    
                </div>
                <div class="col-md-2">
                    <div class="title-links">
                        Links
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Process</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <div class="title-links">
                        Social
                    </div>
                    <ul>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Threads</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <div class="title-links">
                        Offices
                    </div>
                    <ul class="office-location">
                        <li>
                           <strong>Florida</strong><br>
                            18804 Pines Blvd<br>
                            Pembroke Pines, FL <br>
                            33029
                        </li>
                        <li>
                            <strong>Estonia</strong><br>
                            Harju maakond, Tallinn, <br>
                            Tornimäe tn 7-26, <br>
                            10145
                        </li>
                        <li>
                            <strong>Islamabad</strong><br>
                            102, Wallstreet Plaza<br>
                            Bahria Enclave, Islamabad<br>
                            Pakistan
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <div class="title-links">
                        Contact Us
                    </div>
                    <ul>
                        <li><a href="mailto:hello@skillforte.co">hello@skillforte.co</a></li>
                    </ul>
                </div>
                <div class="col-12 copyright">
                    <p class="m-0">© 2023 Skillforte - A TWP Company</p>
                </div>
            </div>
            <!--Footer Links end-->
        </div>
    </footer>

<!-- Plugins -->
    <script type="text/javascript" src="/js/easing.js" defer></script>
    <script type="text/javascript" src="/js/wow.min.js" defer></script>

    <script type="text/javascript">
      var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?7002';
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = url;
      var options = {
    "enabled":true,
    "chatButtonSetting":{
        "backgroundColor":"#4dc247",
        "ctaText":"",
        "borderRadius":"25",
        "marginLeft":"0",
        "marginBottom":"25",
        "marginRight":"50",
        "position":"right"
    },
    "brandSetting":{
        "brandName":"skillforte",
        "brandSubTitle":"Typically replies within an hour",
        "brandImg":"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/krv514wvq2kzedo2wsno",
        "welcomeText":"Hi there!\nHow can I help you?",
        "messageText":"Hello, I have a project idea to discuss.",
        "backgroundColor":"#0a5f54",
        "ctaText":"Start discussion",
        "borderRadius":"25",
        "autoShow":false,
        "phoneNumber":"16504896008"
    }
  };
      s.onload = function() {
          CreateWhatsappChatWidget(options);
      };
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
  </script>
 
 <!-- Hotjar Tracking Code for https://skillforte.co -->
<script type="text/javascript">
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3253719,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

    <script type="text/javascript" src="./scripts/jquery.js"></script>
    <script type="text/javascript" src="./scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="./scripts/owl.carousel.js"></script>
    <script type="text/javascript" src="./scripts/custom-scripts.js"></script>
</body>

</html>