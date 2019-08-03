<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
</head>
<body>



<div class="row">

  <h3>Equiment Details</h3>

    <div id="cloned2">

            <div class="form-group">
                <label>Technology</label>
                <select name="technology" class="selectpicker">
                    <option value="Technology1">Technology1</option>
                    <option value="Technology2">Technology2</option>
                    <option value="Technology3">Technology3</option>
                    <option value="Technology4">Technology4</option>
                </select>
            </div>

            {/* selectpicker - is a plugin class used in "bootstrapselect" for the customization of bootstrap select input */}

            <div class="form-group">
                <label>Equipment Type</label>
                <select name="product_type" class="selectpicker">
                    <option value="Equiment Type 1">Equiment Type 1</option>
                    <option value="Equiment Type 2" >Equiment Type 2</option>
                </select>
            </div>

            <div class="form-group">
                <label>Quantity</label>
                <input type="text" name="equipment_model" class=""></input>
            </div>

     </div>

     <div class="form-group">
        <a href="#" id="add-button2" onlick="cloneDiv2();">Add Equipment</a>
     </div>

</div>  
  









<script>
 
 document.getElementById('add-button2').onclick = cloneDiv2;


 var j = 0;
 var original2 = document.getElementById('cloned2');

 function cloneDiv2() {
     var clone = original2.cloneNode(true); // "deep" clone
     clone.id = "cloned2" + ++j; // there can only be one element with an ID
     original2.parentNode.appendChild(clone);
 }


</script>
    
</body>
</html>