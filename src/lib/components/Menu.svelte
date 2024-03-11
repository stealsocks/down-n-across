<script lang=ts>
    export let columnNames: string[]
</script>

<div
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 140px;
      background-color: #f0f0f0;
      z-index: 1;
    "
  >

  <div class=menu>

    <div class=top-bar>

    </div>

    <div class=formatting-menu>

    </div>

  </div>

  </div>

  <style>

    .menu{
      position: relative;
      height: 100%;
    }

    .top-bar{
      height: 70px;
    }

    .formatting-menu{
      width: 100%;
      height: 38px;
      background: white;
    } 

  </style>