<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <link rel="stylesheet" href="../js/jquery.mobile-1.0.1.css"/>
        <script type="text/javascript" src="../js/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="../js/jquery.mobile-1.0.1.js"></script>
        <script data-main="scripts/main" src="scripts/require.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">    
    </head>
    <body>
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>
        
        <div data-role="page" id="mypage">
            <header data-role="header">  
            </header>
            <div data-role="content">
                <h1><b>AMD + RequireJS<br></b></h1>
                Click on the button to display dialogs with director’s quotes<br>
                <a href="#alert" data-rel="dialog" data-role="button" data-transition="pop" centred>Click me!</a>
            </div>
        </div>
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
        <div data-role="page" id="alert">
            <div data-role="header">
                <h1 id="Director"></h1>
            </div>
            <div data-role="content">
		<p id="Quotes"></p>
            </div>
        </div>
    </body>
</html>