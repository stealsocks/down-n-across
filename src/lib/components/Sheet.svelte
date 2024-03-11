<!-- <script lang=ts>
    import VirtualList from 'svelte-tiny-virtual-list';
    let rows = 100000
    let columns = 10

    let cells: number[][] = []

    let columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']
    let rowNames: number[] = []


    for(let i = 0; i < rows; ++i){
        let row = []
        rowNames = [...rowNames, i]
        for(let j = 0; j < columns; ++j){
            row.push(1)
        }
        cells = [...cells, row]
    }
    
</script>

<div class=sheet>

    {#each columnNames as name}
        <div class=column-name>{name}</div>
    {/each}

    <VirtualList
    width="100%"
    height="1000"
    itemCount={cells.length}
    itemSize={40}
    >
    <div slot="item" let:index let:style {style}>
        <div class="row">
            <div class="cell">this is a long row</div>
            {#each cells[index] as cell}
                <div class="cell">{cell}</div>
            {/each}
        </div>
    </div>
    </VirtualList>

</div>

<style>
    .sheet{
        width: 100vw;
        white-space: nowrap;
    }

    .row{
        /* height: 40px; */
        font-size: 0px;
        width: fit-content;
    }

    .cell{
        width: 140px;
        height: 40px;
        border: solid 0.5px #ccc;
        display: inline-block;
        line-height: 28px;
        padding: 6px;
        font-size: 16px;
        color: #666
    }

    .column-name{
        width: 140px;
        display: inline-block;
        height: 40px;
        background: #444;
        color: white;
        text-align: center;
        line-height: 40px;
        text-transform: uppercase;
    }
</style> -->

<script lang=ts>
	import VirtualList from 'svelte-tiny-virtual-list';

    // let rows = 100000
    // let columns = 1

    // let cells: number[] = []

    let columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']
    // let rowNames: number[] = []


    // for(let i = 0; i < rows; ++i){
    //     let row = []
    //     rowNames = [...rowNames, i]
    //     for(let j = 0; j < columns; ++j){
    //         row.push(1)
    //     }
    //     cells.push(1)
    // }

    // console.log(cells)
	
	let itemSize = 32;
</script>

<div class="list">
	<VirtualList
		height={400}
		width="auto"
		itemCount={500000}
		{itemSize}>
		<div slot="item" let:index let:style {style} class="row">
		    {#each columnNames as name}
                <div class=cell>{name}: #{index}</div>
             {/each}
		</div>
	</VirtualList>
</div>


<style>
:global(body), :global(html) {
    height: 100%;
    margin: 0;
		background-color: rgb(249, 249, 249);
}

:global(.virtual-list-wrapper) {
	margin: 20px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
	background: #fafafa;
	font-family: -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
	color: #333;
	-webkit-font-smoothing: antialiased;
}

.row {
	padding: 0 15px;
	box-sizing: border-box;
    height: 32px;
    line-height: 32px;
	font-weight: 400;
	background: #fff;
    font-size: 14px;
}

.cell{
        width: 140px;
        height: 40px;
        border: solid 0.5px #ddd;
        display: inline-block;
        line-height: 28px;
        padding: 6px;
        font-size: 16px;
        color: #666
    }

</style>