(async () => {
    const jsonData = await fetch('data.json').then(d => d.json())

    function makeGraph(id, key) {
        const { data, layout } = jsonData[key]
        return Plotly.newPlot(id, data, layout, { responsive: true })
    }

    const graphs = {
        'graph1': 'monthly',
        'graph2': 'uniqueUsers',
        'graph3': 'visitors',
        'graph4': 'netloan'
    }
    Object.keys(graphs).map(id => makeGraph(id, graphs[id]))
})()