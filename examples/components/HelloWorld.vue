<template>
  <div class="hello">
    <!-- <div>{{tileMapMapmatrix}}</div> -->
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" @click="clickSidebar"><img height="100%" :src="colasper" /></a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    <img id="background" style="display: none;" :src="background" />
    <img id="trees" style="display: none;" :src="trees" />
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
                          :showMyPlots="showMyPlots"
                          :showMintNFT="showMintNFT"
                          :showTrees="showTrees"
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
    <div :class="isCollapsed">
      <div class="form-container content">
        <div class="form-heading text-center">
          <h1>MetaTruffy</h1>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="check1" @click="clickMyPlots" name="option1" value="something" checked>
          <label class="form-check-label" for="check1"> Show My plots </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="check1" @click="clickNFTMint" name="option2" value="something" checked>
          <label class="form-check-label" for="check1"> Show Minted NFTs </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="check1" @click="clickTrees" name="option3" value="something" checked>
          <label class="form-check-label" for="check1"> Show Trees </label>
        </div>
      </div>
    </div>

    <div id="terrainModal" class="mi-modal">

      <!-- Modal content -->
      <div class="mi-modal-content">
        <div class="mi-modal-header">
          <span class="mi-close">&times;</span>
          <h2>Ocean #{{landId}}</h2>
        </div>
        <div class="mi-modal-body">
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
  import treeImage from "../assets/trees.png"
  import terrain from "../assets/04.gif"
  import colasper from "../assets/colasper.svg"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      isSidebarOpen: true,
      showMyPlots: true,
      showMintNFT: true,
      showTrees: true,
      background:image,
      trees: treeImage,
      colasper: colasper,
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
        { 1: '#0000ff' },
        { 2: '#00ff00' }
      ],
      tileSize: 10,
      x: 0,
      y: 0,
      flag: true,
      startPaintingX: -2800,
      startPaintingY: -1300
    }
  },
  computed: {
    isCollapsed(){
      return this.isSidebarOpen===true ? "sidebar-expanded" : "sidebar-collapsed";
    }
  },
  beforeCreate() {
    // Get plots data using api
    // this.tileMapMapmatrix = "https://localhost:5000/test.png"
    console.log("beforeCreate")
    axios
      // .get('http://localhost:5000/getall')
      .get('/getall')
      .then(response => {
        console.log('after mysql');
        this.tileMapMapmatrix = response.data
      }
      )
  },
  methods: {
    clickMyPlots(){
      this.showMyPlots = !this.showMyPlots;
    },
    clickMintNFT(){
      this.showMintNFT = !this.showMintNFT;
    },
    clickTrees(){
      this.showTrees = !this.showTrees;
    },
    clickSidebar(){
      this.isSidebarOpen = !this.isSidebarOpen
    },
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
        var span = modal.getElementsByClassName("mi-close")[0];
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
.mi-modal {
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
.mi-modal-content {
  position: fixed;
  /* top: 0; */
  background-color: black;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
}

/* The Close Button */
.mi-close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.mi-close:hover,
.mi-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.mi-modal-header {
  padding: 20px;
  color: white;
}

.mi-modal-body {margin: 20px;}

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
.navbar{
  margin: 0 !important;
}
.sidebar-expanded{
  height: calc(100vh - 60px);
  left: 0;
  max-height: 100vh;
  position: fixed;
  top: 80px;
  transition: all .5s;
  z-index: 0;
}
.sidebar-expanded{
  height: 100vh;
  left: 0;
  max-height: 100vh;
  position: fixed;
  width: 300px;
  top: 50px;
  transition: all .5s;
  z-index: 0;
  background-color: rgba(0,0,0,0.8);
}
.sidebar-collapsed{
  transition: all .5s ease 0s;
  display: none;
}
.hello{
  color: #ffffff;
}
.content .form-check{
  padding: 10px 20px;
}
.content .form-check .form-check-input{
  margin: 0 10px;
}
</style>
