<script>
    const python_package = "Paolog_Pynecraft"
    var latestVersion;
    fetch(`https://pypi.org/pypi/${python_package}/json`)
        .then(response => response.json())
        .then(data => {
            latestVersion = data.info.version
        })
        .catch(error => latestVersion = "Couldn't check latest version. ERR: " + error)
</script>

<style>
    body {
        background-color: #1e1e1e;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #eaeaea;
    }
    h3 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #eaeaea;
    }
</style>

<body>
    <h1>Pynecraft</h1>
    <h3>Pynecraft is a minecraft recreation made with <a href="https://www.python.org/" target="_blank">Python</a> and with <a href="https://www.ursinaengine.org/" target="_blank">Ursina Engine</a></h3>
    <h3>Pynecraft is made to be a fan moddable game, so have fun :,)</h3>
    <h3><code>Latest version: <a href="https://pypi.org/project/{python_package}/{latestVersion}" target="_blank">{latestVersion}</a></code></h3>
</body>