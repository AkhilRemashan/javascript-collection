<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
	<title>buttonFilter</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  



	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  


	<style type="text/css">

	.filter{
		padding-bottom: 40px;
	}
	</style>



                
</head>

<body>
		<div class="container" style="padding: 90px 0px;">
			<div class="row">
				<div class="col-md-12">

					<div align="center">
	            			<button class="btn btn-default filter-button" data-filter="all">All</button>
	            			<button class="btn btn-default filter-button" data-filter="red">Red</button>
	            			<button class="btn btn-default filter-button" data-filter="green">Green</button>
	            			<button class="btn btn-default filter-button" data-filter="blue">Blue</button>
	        		</div>
        
        		<br/>

		           	<div class="col-md-3 filter green">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/0f0/fff.png&text=GREEN">
						</div>
		            </div>
		            <div class="col-md-3 filter red">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/f00/fff.png&text=RED">
						</div>
		            </div>
		            <div class="col-md-3 filter green">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/0f0/fff.png&text=GREEN">
						</div>
		            </div>
		            <div class="col-md-3 filter blue">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/00f/fff.png&text=BLUE">
						</div>
		            </div>
		            <div class="col-md-3 filter blue">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/00f/fff.png&text=BLUE">
						</div>
		            </div>
		            <div class="col-md-3 filter green">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/0f0/fff.png&text=GREEN">
						</div>
		            </div>
		            <div class="col-md-3 filter red">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/f00/fff.png&text=RED">
						</div>
		            </div>
		            <div class="col-md-3 filter red">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/f00/fff.png&text=RED">
						</div>
		            </div>
		            <div class="col-md-3 filter blue">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/00f/fff.png&text=BLUE">
						</div>
		            </div>
		            <div class="col-md-3 filter green">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/0f0/fff.png&text=GREEN">
						</div>
		            </div>
		            <div class="col-md-3 filter red">
		                <div class="inner">
								<img class="img-responsive" src="https://dummyimage.com/600x400/f00/fff.png&text=RED">
						</div>
		            </div>
            	</div>
			</div>
		</div>


<!--SCRIPTS-->



<script type="text/javascript">
	$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

</script>

</body>
