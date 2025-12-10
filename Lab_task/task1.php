<?php
  #1
  $length = 10;
  $width = 5;

  $area = $length * $width;
  $perimeter = 2 * ($length + $width);

  echo "Length: $length <br>";
  echo "Width: $width <br>";
  echo "Area of Rectangle: $area <br>";
  echo "Perimeter of Rectangle: $perimeter <br><br>";


  #2
  $amount = 1000;
  $vat = $amount * 0.15;

  echo "VAT (15%): $vat <br><br>";


  #3
  $number = 7;

  if ($number % 2 == 0) {
    echo "$number is Even <br><br>";
  } else {
    echo "$number is Odd <br><br>";
  }


  #4
  $a = 10;
  $b = 25;
  $c = 15;

  if ($a >= $b && $a >= $c) {
    echo "$a is the largest <br><br>";
  } elseif ($b >= $a && $b >= $c) {
    echo "$b is the largest <br><br>";
  } else {
    echo "$c is the largest <br><br>";
  }


  #5
  for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) {
        echo $i . "<br>";
    }
  }
  echo "<br>";


  #6
  $arr = array(5, 10, 15, 20);
  $search = 15;
  $found = false;

  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $search) {
        $found = true;
        break;
    }
  }

  if ($found) {
    echo "Found <br><br>";
  } else {
    echo "Not Found <br><br>";
  }


  #7
  

?>
