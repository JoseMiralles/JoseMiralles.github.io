<?php

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>

        <!-- Coundown's script start-->
        <script>
var end = new Date('12/12/2014 6:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days ';
        document.getElementById('countdown').innerHTML += hours + ' hrs <br/>';
        document.getElementById('countdown').innerHTML += minutes + ' mins ';
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);
</script>
        <!-- Coundown's script end-->

                <!--FACEBOOK JS SDK START-->
        <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
        <!--FACEBOOK JS SDK End-->

        <div class="left rightside">

            

            <div id="unevent" style="font-size: 25px;" class="contentbox">
                <div class="redheader">EVENTS</div>
                <div style="text-align: center;" class="timer">
                <div style="margin-top: 5px;">TAC #2 - Tennessee</div>
                <div style="margin-top: 5px;" id="countdown" class="countdown kill"></div>
                <div class="countdown">To Be Announced</div>
                </div>
                
                
                <a href="http://tacmma.com/upcomingevents.php" class="ticketsbutton fillmob wow fadeIn">Upcoming Events</a>
            </div>

                                    <div class="contentbox " style="height: 282px;">
                                        <div class="redheader">FACEBOOK</div>
                                        <div class="fb-like-box " data-href="https://www.facebook.com/TopAllianceCombat" data-width="284" data-colorscheme="dark" data-show-faces="true" data-header="false" data-stream="false" data-show-border="true"></div>
                                    </div>
                                    <div class="contentbox ">    
                                        <div class="redheader">TWITTER</div>
                                            <a class="twitter-timeline" href="https://twitter.com/TACMMA" data-widget-id="454075068335677440">Tweets by @TACMMA</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                                        </div>
            <div class="contentbox ">
                                        <div class="redheader">EMAIL</div>
                                        <!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signupp{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:284px;}
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signupp">
<form action="http://victoriummma.us3.list-manage2.com/subscribe/post?u=9fee9de85873d2979b7968c45&amp;id=b1af332c21" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_9fee9de85873d2979b7968c45_b1af332c21" value=""></div>
	<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</form>
</div>

<!--End mc_embed_signup-->
                                    </div>

                                </div>
    </body>
</html>
