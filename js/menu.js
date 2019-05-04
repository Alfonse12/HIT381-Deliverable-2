

      <script>
      var context;
      function init()
      {
      context= myCanvas.getContext('2d');
      context.beginPath();
      context.fillStyle="#0000ff";
      // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
      context.arc(100,100,20,0,Math.PI*2,true); context.closePath();
      context.fill();
      }
      </script>


      <script>
      var context;
      var x=100;
      var y=200;
      var dx=5;
      var dy=5;

      function init()
      {
        context= myCanvas.getContext('2d');
        setInterval(draw,10);
      }

      function draw()
      {
        context.beginPath();
        context.fillStyle="#0000ff";
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(x,y,20,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        x+=dx;
        y+=dy;
      }

      <script>
      var context;
      var x=100;
      var y=100;
      var dx=5;
      var dy=5;

      function init()
      {
        context= myCanvas.getContext('2d');
        setInterval(draw,10);
      }

      function draw()
      {
        context.clearRect(0,0, 300,300);
        context.beginPath();
        context.fillStyle="#0000ff";
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(x,y,20,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        x+=dx;
        y+=dy;
      }


      </script>



      <script>
      var context;
      var x=100;
      var y=200;
      var dx=5;
      var dy=5;

      function init()
      {
        context= myCanvas.getContext('2d');
        setInterval(draw,10);
      }

      function draw()
      {
        context.clearRect(0,0, 300,300);
        context.beginPath();
        context.fillStyle="#0000ff";
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(x,y,20,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        // Boundary Logic
      if( x<0 || x>300) dx=-dx;
      if( y<0 || y>300) dy=-dy;
      x+=dx;
      y+=dy;
      }

      </script>
