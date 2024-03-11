<script lang="ts">
    import { createVirtualizer } from '@tanstack/svelte-virtual'
  import Menu from './Menu.svelte';
  
    let virtualListEl: HTMLDivElement
    const cells = Array.from({ length: 1000 }, (_, index) => Array.from({ length: 26}, () => index))
    console.log(cells)
  
    $: virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
      count: cells.length,
      getScrollElement: () => virtualListEl,
      estimateSize: () => 32,
      overscan: 10,
    })

    let columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
  </script>
  
  <!-- <Menu {columnNames}/> -->

  <div class=grid>
    <div style="width: 50px; position: absolute; z-index: 2; background: #eee; top: 0px; left: 0px" class=name></div>

    <div class="list scroll-container" bind:this={virtualListEl}>
      <div style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;"> 

      <div class=column-names>
        <div style="margin-left: 50px">
            {#each columnNames as name}
              <div style:width="{120}px" class=name> {name} </div>
            {/each}
        </div>
      </div>

        {#each $virtualizer.getVirtualItems() as row (row.index)}
          <div
              style="position: absolute; top: 32px; left: 0; width: fit-content; white-space: nowrap; height: 32px; transform: translateY({row.start}px)"
              class=row
              >
              {#each cells[row.index] as cell}
                  <div contenteditable="true" class=cell>{cell}</div>
              {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .scroll-container {
      height: calc(100vh - 140px);
      width: 100vw;
      overflow: auto;
      margin-top: 140px;
      position: relative;
    }

    .row{
      font-size: 0px;
      height: 32px;
      line-height: 32px;
    }

    .cell{
        position: relative;
        display: inline-block;
        padding: 0px 10px;
        width: 120px;
        height: 32px;
        border: solid 0.5px #ccc;
        font-size: 14px;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: visible;
    }

    .cell:first-child{
      background: #eee;
      width: 50px;
      text-align: center;
      position: sticky;
      left: 0;
      top: 0;
      z-index: 1;
    }

    .column-names{
      position: sticky;
      z-index: 1;
      top: 0; 
      left: 0; 
      width: fit-content;
      font-size: 0px;
      height: 32px;
      white-space: nowrap;
    }
   
    .name{
      display: inline-block;
      text-align: center;
      font-size: 14px;
      border-right: solid 0.5px #ccc;
      border-left: solid 0.5px #ccc;
      border-bottom: 1px solid #ddd;
      height: 32px;
      line-height: 32px;
      vertical-align: top;
      background: #eee;
    }
  </style>