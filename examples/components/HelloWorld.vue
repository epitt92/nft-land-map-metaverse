<template>
  <div class="hello">
    <!-- <div>{{tileMapMapmatrix}}</div> -->
    <img id="background" style="display: none;" :src="background" />
    <!-- <p>
      <span> Current coordinates {{x}},{{y}}</span>
    </p> -->
    <!-- <h5> <span> <button @click="handleClickFilter"> click Filter</button></span> </h5> -->
    <!-- <div>{{tileMapMapmatrix}}</div> -->
    <div style="display: flex;justify-content: center;"> 
      <vue-lands-tile-map v-if="tileMapMapmatrix" ref="landsTileMapRef"
                          :tileMapMapmatrix="tileMapMapmatrix"
                          :tiledDigitalColormap="tiledDigitalColormap"
                          :tileSize="tileSize"
                          :startPaintingX="startPaintingX"
                          :startPaintingY="startPaintingY"
                          @handleClickTile="handleClickTile"
                          @test="ceshi">
      </vue-lands-tile-map>
      <div v-else>Loading...</div>
    </div>

    <!-- <div  style="display: none">
        <img id = "terrain" :src="terrain" />
      
    </div> -->
    <div id="terrainModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Ocean #{{landId}}</h2>
        </div>
        <div class="modal-body">
          <img id = "terrain" :src="terrain" />
          <div class="terrain-content">
            Owned By {{owner.substring(0,4)+"..."+owner.substr(-4) }}
            <br>
            <br>
            <div>
              Plot: {{x}} , {{y}}
            </div>
            <ul>
              <li>
                White
                <div class="status-comment">
                  Not minted and available for your to buy.
                </div>
              </li>
              <li>
                Grey
                <div class="status-comment">
                  Minted, but not available in our marketplace.
                </div>
              </li>
              <li>
                Blue
                <div class="status-comment">
                  Minted and available in our marketplace.
                </div>  
              </li>
              <li>
                Green
                <div class="status-comment">
                  Your land! Add 3D assets now. Visit our marketplace and buy some.
                </div>  
              </li>
            </ul>
            <br>
            <div class = "buy-button">
              <button>Buy</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  // import json from '../json/map.json'
  import axios from 'axios'
  import image from "../assets/background.jpg"
  import terrain from "../assets/terrain.gif"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      background:image,
      landId: -1,
      terrain:terrain,
      owner: "",
      tileMapMapmatrix: null,
      tileMapMapmatrixToc: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tiledDigitalColormap: [
        { 0: '#138535' },
        { 1: '#808080' },
        { 2: '#0070c0' }
      ],
      tileSize: 10,
      x: 0,
      y: 0,
      flag: true,
      startPaintingX: -750,
      startPaintingY: -1600
    }
  },
  beforeCreate() {
    // Get plots data using api
    // this.tileMapMapmatrix = "https://localhost:5000/test.png"
    console.log("beforeCreate")
    axios
      .get('/getall')
      .then(response => {
        console.log('after mysql');
        this.tileMapMapmatrix = response.data
      }
      )
  },
  methods: {
    ceshi () {
      console.log('ceshi');
    },
    handleClickTile (e) {
      var modal = document.getElementById("terrainModal");
      if (typeof (this.tileMapMapmatrix[e.clickX+"_"+e.clickY]) !== 'undefined') {
        // console.log('asdf')
        
        this.x = e.x;
        this.y = e.y;
        
        this.owner = this.tileMapMapmatrix[e.clickX+"_"+e.clickY]['owner']
        this.landId = this.tileMapMapmatrix[e.clickX+"_"+e.clickY]['landID']
        //show image modal
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

      } else {
        modal.style.display = "none";
        this.x = '';
        this.y = '';
      }
    },
    handleClickFilter () {
      var tileMap = this.tileMapMapmatrix;
      var flag = this.flag;
      if (flag) {
        tileMap = this.$refs.landsTileMapRef.blockCoverage(tileMap, this.tileMapMapmatrixToc);
        flag = false;
      } else {
        flag = true;
      }
      this.flag = flag;
      this.$refs.landsTileMapRef.handleClickAssignRender(tileMap);
    }
  },
 
}
</script>

<style scoped>
.hello {
  text-align: center;
}
button {
  height: 30px;
  background: #42b983;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#terrain {
  width: 100%;
}

/* The Modal (background) */
.modal {
  margin: 20px;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  right: 0;
  top: 30px;
  width: 20%; /* Full width */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
}

/* Modal Content */
.modal-content {
  position: fixed;
  /* top: 0; */
  background-color: black;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 20px;
  color: white;
}

.modal-body {margin: 20px;}

.terrain-content {
  color: white;
  text-align: left;
}

.status-comment {
  position: relative;
  padding-left: 25px;
  width: 90%;
}

.buy-button {
  text-align: center;
}

.buy-button button {
  font-size: 20px;
  padding: 3px 20px;
  border: none;
  border-radius: 4px;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {top: 0px; opacity: 0} 
  to {top: 50px; opacity: 1}
}

@keyframes slideIn {
  from {top: 0px; opacity: 0}
  to {top: 50px; opacity: 1}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}
</style>
