<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Styles/contactUs.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    
    <div class="navbar" >
        <div class="logo">
        <img src="/images/logo.jpg" height="120px" width="300px">
        </div>
        <div class="nav">
            <ul class="links">
                <li><a href="home.html">Home</a></li>
                <li><a href="aboutUs.html">About</a></li>
              <li><a href="#">Trending <i class="fa-solid fa-angle-down"></i></a>
            <ul class="sub-menu">
                <li><a href="newsPage.html">News</a></li>
                <li><a href="Review.html">Reviews</a></li>
                <li><a href="tutorial.html">Tutorials</a></li>

            </ul>
        </li>
        
                <li><a href="contactUs.html">Contact Us <i class="fa-solid fa-angle-down"></i></a>
                <ul class="sub-menu" style="width: 250px;">
                    <li><a href="PrivacyPolicy.html">Privacy Policy</a></li>
                    <li><a href="Communityform.html">Community Forum</a></li>
                    <li><a href="termsConditions.html">Terms of Services</a></li>

                </ul>
                </li>
                  <li><a href="login form.html">Login</a></li>   
                              </ul>
        </div>                                                                                
    </div>
    
         
        <div class="wrapper" style="margin-top: 100px;">
            <h2>Contact us</h2>
            <div id="error_message"> </div>
            <form action="" id="myform" onsubmit = "return validate();">
              <div class="input_field">
                  <input type="text" placeholder="Name" id="name">
              </div>
              <div class="input_field">
                <input type="text" placeholder="password" id="password">
            </div>
             <div class="input_field">
                  <input type="text" placeholder="Phone" id="phone">
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Email" id="email">
              </div>
              <div class="input_field">
                  <textarea placeholder="Address" id="Address"></textarea>
              </div>
              <div class="btn">
                  <input type="submit" value="submit">
              </div>
            </form>
        </div>
        <div class="maps" style="margin-top: 800px;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.214340062455!2d78.3855291737734!3d17.44945228344834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916111434bff%3A0xf31c8a25f9687f96!2sVIP%20Hills%2C%20Jaihind%20Enclave%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1721277308326!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
        
        <div class="footer">
            <div class="footer1">
                <img src="./images/logo.jpg" height="80px" width="180px"> <br><br>
                <p style="font-size: 20px;">We are here to help you.</p>
                <div class="icons">
                   <a><i class="fa-brands fa-facebook-f"></i></a>
                    <a><i class="fa-brands fa-square-instagram"></i></a>
                    <a><i class="fa-brands fa-linkedin"></i></a>
                    <a> <i class="fa-brands fa-x-twitter"></i></a>
                    
                </div>
            </div>
            <div class="footer2">
                <li><a href="home.html">Home</a></li>
                <li><a href="aboutUs.html">About</a></li>
                <li><a href="newsPage.html">News</a></li>
                <li><a href="Review.html">Reviews</a></li>
                <li><a href="tutorial.html">Tutorials</a></li>
               
            </div>
            <div class="footer3">
                <li><a href="ProductComparision.html">Product Comparisions</a></li>
                <li><a href="contactUs.html">Contact</a></li>
                <li><a href="PrivacyPolicy.html">Privacy Policy</a></li>
                <li><a href="Communityform.html">Community Forum</a></li>
                <li><a href="termsConditions.html">Terms of Services</a></li>
                <li><a href="faq.html">FAQ</a></li>
        
            </div>
     </div>
    </div>

       
        <script src="contact.js"></script>
    
</body>
</html>