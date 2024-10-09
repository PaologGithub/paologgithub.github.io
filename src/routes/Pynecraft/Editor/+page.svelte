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
    <h1>Pynecraft Editor</h1>
    <h3>Pynecraft Editor is an editor, to make mods and map for Pynecraft</h3>
    <h3>NOT FINISHED YET, THERE ISN'T ANY DOWNLOAD</h3>
    <h3><code>Latest version: NONE</code></h3>
</body>