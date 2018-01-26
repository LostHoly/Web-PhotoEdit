<template>
<body height="100%" width="100%">
  <section id="content">
    <!--工具区域-->
    <ul id="tool">
      <li>
        <h3>图像</h3>
        <hr />
        <ul id="image">
          <li id="saveimg">
            <button onclick="saveimg()" type="button">saveimg</button>
            <form id="myform" action="/iot/api/sjz/img" method="post">
            <input type="hidden" id="data" name="data" value="" />

            </form>
            </li>
          <li id="clearimg"><button onclick="clearimg()">clearimg</button></li>
        </ul>
      </li>
      <li>
        <h3>工具</h3>
        <hr />
        <ul id="means">
          <li id="means_brush" onclick="drawBrush(0)">
            <img src="../../../static/img/Brush.png" />
          </li>
          <li id="means_eraser" onclick="drawEraser(1)">
            <img src="../../../static/img/Eraser.png" />
          </li>
          <li id="means_paint" onclick="drawPaint(2)">
            <img src="../../../static/img/Paint.png" />
          </li>
          <li id="means_straw" onclick="drawStraw(3)">
            <img src="../../../static/img/Straw.png" />
          </li>
          <li id="means_text" onclick="drawText(4)">
            <img src="../../../static/img/text.png" />
          </li>
          <li id="means_magnifier" onclick="drawMagnifier(5)">
          <img src="../../../static/img/Magnifier.png" /></li>
        </ul>
      </li>
      <li>
        <h3>形状</h3>
        <hr />
        <ul id="shape">
          <li id="shape_line" onclick="drawLine(6)">
            <img src="../../../static/img/line.png" />
          </li>
          <li id="shape_arc" onclick="drawArc(7)">
            <img src="../../../static/img/arc.png" />
          </li>
          <li id="shape_rect" onclick="drawRect(8)">
            <img src="../../../static/img/rect.png" />
          </li>
          <li id="shape_poly" onclick="drawPoly(9)">
            <img src="../../../static/img/poly.png" />
          </li>
          <li id="shape_arcfill" onclick="drawArcFill(10)">
            <img src="../../../static/img/arcfill.png" />
          </li>
          <li id="shape_rectfill" onclick="drawRectFill(11)">
            <img src="../../../static/img/rectfill.png" />
          </li>
        </ul>
      </li>
      <li>
        <h3>线宽</h3>
        <hr />
        <ul id="size">
          <li id="width_1" onclick="setLineWidth(0)">
            <img src="../../../static/img/line1px.png" />
          </li>
          <li id="width_3" onclick="setLineWidth(1)">
            <img src="../../../static/img/line3px.png" />
          </li>
          <li id="width_5" onclick="setLineWidth(2)">
            <img src="../../../static/img/line5px.png" />
          </li>
          <li id="width_8" onclick="setLineWidth(3)">
            <img src="../../../static/img/line8px.png" />
          </li>
        </ul>
      </li>
      <li>
        <h3>颜色</h3>
        <hr />
        <ul id="color">
          <li id="red" onclick="setColor(this,0)"></li>
          <li id="green" onclick="setColor(this,1)"></li>
          <li id="blue" onclick="setColor(this,2)"></li>
          <li id="yellow" onclick="setColor(this,3)"></li>
          <li id="white" onclick="setColor(this,4)"></li>
          <li id="black" onclick="setColor(this,5)"></li>
          <li id="pink" onclick="setColor(this,6)"></li>
          <li id="purple" onclick="setColor(this,7)"></li>
          <li id="cyan" onclick="setColor(this,8)"></li>
          <li id="orange" onclick="setColor(this,9)"></li>
        </ul>
      </li>
    </ul>

    <!--绘图区域-->
    <canvas id="canvas" width="880" height="400">
      您的浏览器不支持canvas标签，请升级浏览器
    </canvas>
  </section>

</body>
</template>

<script>
import canvas from '../common/js/canvas'
    var token =  localStorage.getItem('token')
    export default {
       methods: {
       send(){
            this.$axios({
                 method:"post",
                 url:"/iot/api/sjz/img",
                 headers:{'token': token},
                 responseType:'json',
                  }).then(function(response){
                      console.log(response)
                  }).catch(function(error){
                      console.log(error)
                  })
           return false
         }
       }
     }
</script>
